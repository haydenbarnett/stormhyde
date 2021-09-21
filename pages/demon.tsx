import Head from "next/head";
import {
  CardGrid,
  Banner,
  Box,
  Grid,
  Flex,
  Container,
  DownloadButton,
  Heading,
  Text,
  TextLink,
  List,
  ProductImage,
} from "@components";
import type { NextPage } from "next";

const Demon: NextPage = () => {
  return (
    <>
      <Head>
        <title>Demon | Stormhyde</title>
        <meta
          name="description"
          content="Free 3d rigged demon creature ready to animate in Autodesk Maya."
        />
      </Head>
      <Banner
        title="Demon"
        description="Free 3d rigged demon creature ready to animate in Autodesk Maya."
        category="Legacy Application"
        layout="left"
      />
      <Container>
        <Grid columns={[1, null, 2]}>
          <Box>
            <Flex justifyContent="center" mt="-30px">
              <DownloadButton
                href="/downloads/demonRigged-v1.0.zip"
                label="Download"
                category="Windows file"
              />
            </Flex>
            <Box py={12}>
              <Heading>Includes</Heading>
              <List>
                <li>.ma &amp; .mb file with basic rig ready for animation</li>
                <li>.obj file with mesh</li>
                <li>
                  Diffuse texture (also applied as bump in preview renders)
                </li>
              </List>
              <Text>Free for personal &amp; commercial use.</Text>
              <Text>
                Also available to download on{" "}
                <TextLink href="http://www.turbosquid.com/3d-models/demon-rig-ma-free/639934">
                  Turbosquid
                </TextLink>
                .
              </Text>
            </Box>
          </Box>
          <Box mt={[null, null, "-220px"]} mb="80px">
            <ProductImage src="/products/demon/demon-1.jpg" />
          </Box>
        </Grid>
      </Container>
      <CardGrid />
    </>
  );
};

export default Demon;
