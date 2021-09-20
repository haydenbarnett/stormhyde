import Head from "next/head";
import Image from "next/image";
import {
  CardGrid,
  Banner,
  Box,
  Grid,
  Flex,
  Container,
  DownloadButton,
  Text,
} from "@components";
import type { NextPage } from "next";

const MapConverter: NextPage = () => {
  return (
    <>
      <Head>
        <title>Map Converter | Stormhyde</title>
        <meta
          name="description"
          content="Converts standard image files (jpg, png, tif etc) into .map files for more efficient rendering in Mental Ray"
        />
      </Head>
      <Banner
        title="Map Converter"
        description="Converts standard image files (jpg, png, tif etc) into .map files for more efficient rendering in Mental Ray"
        category="Legacy Application"
        layout="left"
      />
      <Container>
        <Grid columns={[1, null, 2]}>
          <Box>
            <Flex justifyContent="center" mt="-30px">
              <DownloadButton
                href="/downloads/Map-Converter-v1.0.zip"
                label="Download"
                category="Windows file"
              />
            </Flex>
            <Box py={12}>
              <Text>
                Converts standard image files (jpg, png, tif etc) into memory
                mappable (.map) files for use with Mental Ray.
              </Text>
              <Text>
                The .map files are Mental Ray’s native format and work very
                efficiently in comparison to normal images when rendering.
              </Text>
              <Text>
                This works using the Autodesk Maya executable imf_copy.exe
              </Text>
            </Box>
          </Box>
          <Box mt={[null, null, "-200px"]} mb="80px">
            <Box borderRadius="8px" overflow="hidden" lineHeight="0">
              <Image
                src="/products/map-converter/map-converter-2.png"
                width="700"
                height="700"
                alt=""
                layout="responsive"
              />
            </Box>
          </Box>
        </Grid>
      </Container>
      <CardGrid />
    </>
  );
};

export default MapConverter;
