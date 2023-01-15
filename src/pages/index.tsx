import type {NextPage} from "next";

import {Advantages, Hero, MostSearch} from "@/components";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <MostSearch />
      <Advantages />
    </>
  );
};

export default Home;
