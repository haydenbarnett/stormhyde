import { FC } from "react";
import styled from "@emotion/styled";
import { Container, Flex, Stack, Heading, Text } from "../";
import * as CSS from "csstype";

type BannerProps = {
  title?: string;
  description?: string;
  category?: string;
  layout?: "left" | "center";
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.space[20]} 0;
  min-height: 380px;

  background-color: ${(props) => props.theme.colors.blue};
  background-image: linear-gradient(
    180deg,
    ${(props) => props.theme.colors.sky} 0%,
    ${(props) => props.theme.colors.blue} 100%
  );
`;

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
    <Wrapper>
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
    </Wrapper>
  );
};

export default Banner;
