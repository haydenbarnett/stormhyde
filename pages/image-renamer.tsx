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
  Heading,
  List,
} from "@components";
import type { NextPage } from "next";

const ImageRenamer: NextPage = () => {
  return (
    <>
      <Head>
        <title>Image Renamer | Stormhyde</title>
        <meta
          name="description"
          content="Quickly rename large collections of files including the ability to fix errors with frame numbering and file extensions."
        />
      </Head>
      <Banner
        title="Image Renamer"
        description="Quickly rename large collections of files including the ability to fix errors with frame numbering and file extensions."
        category="Legacy Application"
        layout="left"
      />
      <Container>
        <Grid columns={[1, null, 2]}>
          <Box>
            <Flex justifyContent="center" mt="-30px">
              <DownloadButton
                href="/downloads/Image-Renamer-v1.0.zip"
                label="Download"
                category="Windows file"
              />
              <DownloadButton
                href="/downloads/Image-Renamer-v1.0-app.zip"
                label="Download"
                category="Mac app"
              />
            </Flex>
            <Box py={12}>
              <Heading>Instructions</Heading>
              <List>
                <li>Add a source directory to load in files</li>
                <li>Use the file filter fields to select only desired files</li>
                <li>
                  Enter a new name, the amount of frame padding & the file
                  extension. All fields optional.
                </li>
                <li>
                  The lower table allows you to preview the output before
                  renaming
                </li>
              </List>
            </Box>
          </Box>
          <Box mt={[null, null, "-200px"]} mb="80px">
            <Box borderRadius="8px" overflow="hidden" lineHeight="0">
              <Image
                src="/products/image-renamer/image-renamer-2.png"
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

export default ImageRenamer;
