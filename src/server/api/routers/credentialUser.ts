import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { generatePassword } from "Y/utils/constants";
import bcrypt, { compare } from "bcrypt";


export const credentialUserRouter = createTRPCRouter({
    create:protectedProcedure
        .input(z.object({
            name: z.string(),
            email: z.string(),
            password: z.string()
        })).mutation(async({input,ctx})=>{
            try{
                const autoPassword = !input.password
          ? generatePassword(6)
          : input.password;
        const salt = await bcrypt.genSalt(10);
        const hashedPasswords = await bcrypt.hash(autoPassword, salt);
        const user = await ctx.prisma.credentialsUser.create({
            data:{
                name: input.name,
                email: input.email,
                password: hashedPasswords
            }
        })
        return user;
            }catch(error: any){
                throw new Error(error);
            }
        })
})