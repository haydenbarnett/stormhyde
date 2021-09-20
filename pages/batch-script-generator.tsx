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
  Text,
  TextLink,
  List,
} from "@components";
import type { NextPage } from "next";

const BatchScriptGenerator: NextPage = () => {
  return (
    <>
      <Head>
        <title>Batch Script Generator | Stormhyde</title>
        <meta
          name="description"
          content="Provides a user friendly interface to create batch script files for rendering multiple Autodesk Maya scenes."
        />
      </Head>
      <Banner
        title="Batch Script Generator"
        description="Provides a user friendly interface to create batch script files for rendering multiple Autodesk Maya scenes."
        category="Legacy Application"
        layout="left"
      />
      <Container>
        <Grid columns={[1, null, 2]}>
          <Box>
            <Flex justifyContent="center" mt="-30px">
              <DownloadButton
                href="/downloads/Batch-Script-Generator-v1.3.zip"
                label="Download"
                category="Windows file"
              />
              <DownloadButton
                href="/downloads/Batch-Script-Generator-v1.3-app.zip"
                label="Download"
                category="Mac app"
              />
            </Flex>
            <Box py={12}>
              <Heading>Instructions</Heading>
              <List>
                <li>
                  Load your .ma or .mb file and enter render data then press
                  &apos;Add Render Line&apos;
                </li>
                <li>
                  Once finished the batch script can be generated with
                  &apos;Create Batch Script&apos;
                </li>
                <li>
                  Any fields not specified simply are not included in the
                  generated script.
                </li>
                <li>All fields are optional except the scene file.</li>
                <li>
                  Can also generate a test script that renders only the first
                  frame of each scene.
                </li>
                <li>
                  Custom render flags to change options such as resolution, file
                  type, render messages and number of cores to use. Applies to
                  all scenes
                </li>
                <li>Automatically create log files for each render line</li>
                <li>
                  Select post render tasks such as opening a file or shutting
                  down or logging off the computer automatically
                </li>
                <li>
                  Able to load batch file information straight back into the
                  program
                  <ul>
                    <li>File &gt; Open Script or File &gt; Add Script</li>
                  </ul>
                </li>
              </List>
              <Text>&nbsp;</Text>
              <Heading>Notes for rendering on a Mac OS</Heading>
              <Text>
                The Render executable file you require will be located in a path
                similar to
              </Text>
              <Text>
                /Applications/Autodesk/maya2015/Maya.app/Contents/bin/Render
              </Text>
              <Text>
                The file you save must also be made executable before it is run.
              </Text>
              <List>
                <li>One way to do this is to:</li>
                <li>rename the file from .sh to .command</li>
                <li>open Terminal</li>
                <li>cd to your current directory</li>
                <li>chmod 700 yourfilename.command</li>
              </List>
              <Text>The file will now run when double clicked.</Text>
              <Text>&nbsp;</Text>
              <Heading>More</Heading>
              <Text>
                Shaun Keenan has created a basic video tutorial available on{" "}
                <TextLink href="http://cg.tutsplus.com/tutorials/autodesk-maya/quick-tip-create-a-batch-script-to-render-maya-scenes/">
                  3D Ocean
                </TextLink>
              </Text>
              <Text>
                The Batch Script Generator is also available to download on{" "}
                <TextLink href="http://www.creativecrash.com/downloads/applications/render-managers/c/batch-script-generator">
                  creativecrash.com
                </TextLink>
              </Text>
            </Box>
          </Box>
          <Box mt={[null, null, "-200px"]} mb="80px">
            <Box borderRadius="8px" overflow="hidden" lineHeight="0">
              <Image
                src="/products/batch-script-generator/batch-script-generator-2.png"
                width="700"
                height="700"
                alt=""
                layout="responsive"
              />
            </Box>
            <Box borderRadius="8px" overflow="hidden" lineHeight="0" mt="80px">
              <Image
                src="/products/batch-script-generator/batch-script-generator-4.png"
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

export default BatchScriptGenerator;
