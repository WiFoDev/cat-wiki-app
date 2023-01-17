import type {NextPage} from "next";

import {dehydrate, QueryClient} from "@tanstack/react-query";

import {Advantages, Hero, MostSearch} from "@/components";
import {getBreeds} from "@/querys";

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["breeds"],
    queryFn: getBreeds,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

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
