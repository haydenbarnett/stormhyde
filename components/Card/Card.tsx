import { FC } from "react";
import Image from "next/image";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { Box, Heading, Text, Stack } from "../";
import shouldForwardProp from "@styled-system/should-forward-prop";

type CardProps = {
  url: string;
  title: string;
  description?: string;
  category?: string;
  thumbnail: string;
};

const BaseCard = styled(Box, { shouldForwardProp })`
  cursor: pointer;
  text-decoration: none;
  display: block;
  background: ${(props) => props.theme.colors.white};
  border-radius: 15px;
  max-width: 345px;
  margin: 0 auto 30px;
  overflow: hidden;
  box-shadow: 0 3px 8px 0 rgb(0, 0, 0, 0.1);
  color: ${(props) => props.theme.colors.black};
  transition: 0.3s ease;
  h2 {
    transition: 0.3s color;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 10px 0 rgb(0, 0, 0, 0.1);

    h2 {
      color: ${(props) => props.theme.colors.blue};
    }
  }
`;

export const Card: FC<CardProps> = ({
  url,
  title,
  description,
  category,
  thumbnail,
}) => (
  <NextLink href={url} passHref>
    <BaseCard as="a">
      <Box position="relative" height="185px" bg="grey.600">
        <Image src={thumbnail} layout="fill" objectFit="cover" />
      </Box>
      <Box p="20px 30px">
        <Stack gap={4}>
          <Heading>{title}</Heading>
          <Text color="grey.500">{description}</Text>
          <Text size="xs" opacity={0.5}>
            {category}
          </Text>
        </Stack>
      </Box>
    </BaseCard>
  </NextLink>
);

export default Card;
