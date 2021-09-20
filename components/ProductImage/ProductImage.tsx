import { FC, useState } from "react";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Box } from "../";

const shimmer = keyframes`
  from {
    background-position: -700px 0;
  }

  to {
    background-position: 700px 0; 
  }
`;

const Animation = styled.div`
  background: ${(props) => props.theme.colors.grey[200]};
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.colors.grey[200]} 0%,
    ${(props) => props.theme.colors.grey[100]} 30%,
    ${(props) => props.theme.colors.grey[200]} 60%,
    ${(props) => props.theme.colors.grey[200]} 100%
  );
  background-repeat: no-repeat;
  background-size: 700px;
  animation: ${shimmer} 1.5s linear forwards infinite;
`;

type FadeProps = {
  opacity?: number;
};

const Fade = styled.div<FadeProps>`
  opacity: ${(props) => props.opacity};
  transition: 0.8s ease;
`;

type ProductImageProps = {
  src: string;
};

export const ProductImage: FC<ProductImageProps> = ({ src }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Box borderRadius="8px" overflow="hidden" lineHeight="0">
      <Animation>
        <Fade opacity={isLoaded ? 1 : 0}>
          <Image
            src={src}
            width="700"
            height="700"
            alt=""
            layout="responsive"
            onLoad={(e) => {
              const target = e.target as HTMLImageElement;
              if (target.src.indexOf("data:image/gif;base64") < 0) {
                setIsLoaded(true);
              }
            }}
          />
        </Fade>
      </Animation>
    </Box>
  );
};

export default ProductImage;
