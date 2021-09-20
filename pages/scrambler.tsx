import Head from "next/head";
import {
  CardGrid,
  Banner,
  Box,
  Grid,
  Container,
  DownloadButton,
  Flex,
  Text,
} from "@components";
import type { NextPage } from "next";

const Scrambler: NextPage = () => {
  return (
    <>
      <Head>
        <title>Scrambler | Stormhyde</title>
        <meta
          name="description"
          content="Mix and mash two words together to form new ones."
        />
      </Head>
      <Banner
        title="Scrambler"
        description="Mix and mash two words together to form new ones."
        category="Legacy Application"
        layout="left"
      />
      <Container>
        <Grid columns={[1, 2]}>
          <Box>
            <Flex justifyContent="center" mt="-30px">
              <DownloadButton
                href="/downloads/Scrambler-v1.1.zip"
                label="Download"
                category="Windows file"
              />
              <DownloadButton
                href="/downloads/Scrambler-v1.1-app.zip"
                label="Download"
                category="Mac app"
              />
            </Flex>
            <Box py={12}>
              <Text>
                A simple application that takes two words and scrambles them
                together to make new words for idea generation and naming.
              </Text>
            </Box>
          </Box>
        </Grid>
      </Container>
      <CardGrid />
    </>
  );
};

export default Scrambler;
