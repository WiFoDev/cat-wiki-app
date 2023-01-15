import type {NextPage} from "next";

import {Hero, MostSearch} from "@/components";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <MostSearch />
    </>
  );
};

export default Home;
