import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "Y/utils/api";

import "Y/styles/globals.css";
import Layout from "Y/components/layout";
import wrapper from "Y/redux/store";
import { withTRPC } from "@trpc/next";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default wrapper.withRedux(api.withTRPC(MyApp));
