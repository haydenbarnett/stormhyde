import {
  Box,
  Container,
  Grid,
  Stack,
  Heading,
  Text,
  Symbol,
  TextLink,
  GridItem,
} from "../";

export const Footer = () => (
  <Box bg="grey.600" color="grey.400" py={15}>
    <Container>
      <Grid columns={12}>
        <GridItem colSpan={[12, 6, 8, 9]}>
          <Stack gap={2}>
            <Heading color="white" pb={4}>
              Products
            </Heading>
            <Text size="xs">
              <TextLink color="grey.400" href="/batch-script-generator/">
                Batch Script Generator
              </TextLink>
            </Text>
            <Text size="xs">
              <TextLink color="grey.400" href="/map-converter/">
                Map Converter
              </TextLink>
            </Text>
            <Text size="xs">
              <TextLink color="grey.400" href="/image-renamer/">
                Image Renamer
              </TextLink>
            </Text>
            <Text size="xs">
              <TextLink color="grey.400" href="/scrambler/">
                Scrambler
              </TextLink>
            </Text>
            <Text size="xs">
              <TextLink color="grey.400" href="/demon/">
                Demon
              </TextLink>
            </Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={[12, 6, 4, 3]}>
          <Stack gap={4}>
            <Box mb={4}>
              <Symbol color="white" />
            </Box>
            <Text size="xs">
              A retired project by{" "}
              <TextLink color="blue" href="https://haydenbarnett.com">
                Hayden Barnett
              </TextLink>
              .
            </Text>
            <Text size="xs">&copy; {new Date().getFullYear()}</Text>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
