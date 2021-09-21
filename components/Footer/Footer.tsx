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
  <Box bg="grey.700" color="grey.400" py={15}>
    <Container>
      <Grid columns={12}>
        <GridItem colSpan={[12, 6, 8, 9]}>
          <Stack gap={0}>
            <Heading color="white" pb={4}>
              Products
            </Heading>
            <Text size="sm">
              <TextLink
                color="grey.400"
                href="/batch-script-generator/"
                py={3}
                display="inline-flex"
              >
                Batch Script Generator
              </TextLink>
            </Text>
            <Text size="sm">
              <TextLink
                color="grey.400"
                href="/map-converter/"
                py={2}
                display="inline-flex"
              >
                Map Converter
              </TextLink>
            </Text>
            <Text size="sm">
              <TextLink
                color="grey.400"
                href="/image-renamer/"
                py={2}
                display="inline-flex"
              >
                Image Renamer
              </TextLink>
            </Text>
            <Text size="sm">
              <TextLink
                color="grey.400"
                href="/scrambler/"
                py={2}
                display="inline-flex"
              >
                Scrambler
              </TextLink>
            </Text>
            <Text size="sm">
              <TextLink
                color="grey.400"
                href="/demon/"
                py={2}
                display="inline-flex"
              >
                Demon
              </TextLink>
            </Text>
          </Stack>
        </GridItem>
        <GridItem colSpan={[12, 6, 4, 3]}>
          <Stack gap={4} mt={[6, 0]}>
            <Box mb={4}>
              <Symbol color="white" />
            </Box>
            <Text size="xs">
              A retired project by{" "}
              <TextLink color="sky" href="https://haydenbarnett.com">
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
