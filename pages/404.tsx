import Head from "next/head";
import { CardGrid, Banner } from "@components";
import type { NextPage } from "next";

const Error404: NextPage = () => {
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
        title="Page not found"
        description="We cannot find what you were looking for. Was it one of our products below?"
        layout="center"
      />
      <CardGrid mt="-30px" />
    </>
  );
};

export default Error404;
