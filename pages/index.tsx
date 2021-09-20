import Head from "next/head";
import { CardGrid, Banner } from "@components";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Stormhyde | Free software &amp; resources</title>
        <meta
          name="description"
          content="Free software &amp; resources created for animators for use with Autodesk Maya"
        />
      </Head>
      <Banner
        title="Free software &amp; resources"
        description="Created for animators for use with Autodesk Maya"
        layout="center"
      />
      <CardGrid mt="-30px" />
    </>
  );
};

export default Home;
