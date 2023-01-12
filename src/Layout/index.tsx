import Head from "next/head";
import Image from "next/image";
import React from "react";

import catWikiLogo from "@/Assets/CatwikiLogo.svg";
import catWikiLogoFooter from "@/Assets/CatwikiLogoFooter.svg";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({children}: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen px-4">
      <Head>
        <title>Cat Wiki</title>
        <meta
          content="The next generation cat wiki app"
          name="Cat Wiki App"
        />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <header className="sticky top-0 z-20 w-full">
        <nav className="flex h-16 mx-auto max-w-screen-standar items-center justify-end gap-2">
          <div className="mr-auto text-xl">
            <Image alt="Cat Wiki Logo" src={catWikiLogo} />
          </div>
        </nav>
      </header>
      <main className="flex-1 mx-auto w-full grid max-w-screen-standar">
        {children}
      </main>
      <footer className="relative">
        <div className="mx-auto max-w-screen-standar py-6 px-8 flex flex-col gap-2 text-white text-xs bg-background rounded-t-3xl">
          <div>
            <Image
              alt="Cat Wiki Logo In the Footer"
              height={33}
              layout="fixed"
              src={catWikiLogoFooter}
              width={60}
            />
          </div>
          <div>© Make with ❤️ by WiFo</div>
        </div>
      </footer>
    </div>
  );
};
