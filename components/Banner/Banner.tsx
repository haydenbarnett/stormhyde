import { FC } from "react";
import { Container, Flex, Stack, Heading, Text } from "../";
import * as CSS from "csstype";

type BannerProps = {
  title?: string;
  description?: string;
  category?: string;
  layout?: "left" | "center";
};

export const Banner: FC<BannerProps> = ({
  title,
  description,
  category,
  layout = "center",
}) => {
  const justifyContent = {
    left: "flex-start",
    center: "center",
  };
  const textAlign = {
    left: "left",
    center: "center",
  };
  const width = {
    left: [null, null, "50%"],
    center: undefined,
  };
  return (
    <Flex alignItems="center" bg="blue" py={12} minHeight="320px">
      <Container>
        <Flex
          justifyContent={justifyContent[layout] as CSS.Property.JustifyContent}
          textAlign={textAlign[layout] as CSS.Property.TextAlign}
        >
          <Stack gap={3} width={width[layout]}>
            {category && (
              <Text size="xs" color="white" opacity={0.5}>
                {category}
              </Text>
            )}
            {title && (
              <Heading size="h1" color="white">
                {title}
              </Heading>
            )}
            {description && (
              <Text size="lg" color="white" opacity={0.8}>
                {description}
              </Text>
            )}
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Banner;
