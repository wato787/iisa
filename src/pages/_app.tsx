// src/pages/_app.tsx
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import { trpc } from "../utils/trpc";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "../redux/store";
import { NextComponentType } from "next";

interface MyAppProps extends AppProps {
  Component: NextComponentType & { authNotRequired?: boolean };
}

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) => {
  return (
    <SessionProvider session={session}>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
