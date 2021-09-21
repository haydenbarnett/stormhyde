import { FC, useState } from "react";
import Image from "next/image";
import styled from "@emotion/styled";
import { Box, Heading, Text, Stack, Link } from "../";
import shouldForwardProp from "@styled-system/should-forward-prop";

type CardProps = {
  url: string;
  title: string;
  description?: string;
  category?: string;
  thumbnail: string;
  preload?: boolean;
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

type FadeProps = {
  opacity?: number;
};

const Fade = styled.div<FadeProps>`
  position: absolute;
  inset: 0;
  opacity: ${(props) => props.opacity};
  transition: 0.8s ease;
`;

export const Card: FC<CardProps> = ({
  url,
  title,
  description,
  category,
  thumbnail,
  preload,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Link href={url} passHref>
      <BaseCard as="a">
        <Box position="relative" height="185px" bg="grey.600">
          <Fade opacity={isLoaded || preload ? 1 : 0}>
            <Image
              src={thumbnail}
              layout="fill"
              objectFit="cover"
              alt=""
              priority={preload}
              onLoad={(e) => {
                const target = e.target as HTMLImageElement;
                if (target.src.indexOf("data:image/gif;base64") < 0) {
                  setIsLoaded(true);
                }
              }}
            />
          </Fade>
        </Box>
        <Box p="20px 30px">
          <Stack gap={4}>
            <Heading>{title}</Heading>
            <Text color="grey.500">{description}</Text>
            <Text size="xs" opacity={0.7}>
              {category}
            </Text>
          </Stack>
        </Box>
      </BaseCard>
    </Link>
  );
};

export default Card;
