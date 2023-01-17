import type {AppProps} from "next/app";

import {useState} from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
  DehydratedState,
} from "@tanstack/react-query";

import {Layout} from "@/Layout";

import "@/styles/globals.css";

function MyApp({
  Component,
  pageProps,
}: AppProps<{dehydratedState: DehydratedState}>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
