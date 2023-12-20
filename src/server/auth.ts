import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
  type DefaultSession,
  User,
} from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { env } from "Y/env.mjs";
import { prisma } from "Y/server/db";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      name: string;
      email: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "something@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials, req): Promise<User | null> => {
        if (credentials) {
          const user = await prisma.credentialsUser.findFirst({
            where: {
              OR: [
                {
                  email: { contains: credentials?.email, mode: "insensitive" },
                },
              ],
            },
          });
          if (!user) {
            return null;
          }

          const passwordValidation = await compare(
            credentials?.password as string,
            user.password as string
          );
          if (!passwordValidation) {
            return null;
          } else {
            return user as unknown as User; // Return the user object if authorization is successful
          }
        } else {
          return null;
        }
      },
    }),
  ],
};


/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
