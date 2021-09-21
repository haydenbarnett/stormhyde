import { FC, useState } from "react";
import styled from "@emotion/styled";
import Image from "next/image";

type LogoProps = {
  color?: "blue" | "white";
};

type FadeProps = {
  opacity?: number;
};

const Fade = styled.div<FadeProps>`
  opacity: ${(props) => props.opacity};
  transition: 0.8s ease;
`;

export const Logo: FC<LogoProps> = ({ color = "blue" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Fade opacity={isLoaded ? 1 : 0}>
      <Image
        src={`/logo-${color}.svg`}
        width="150"
        height="23"
        alt="Stormhyde"
        onLoad={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.src.indexOf("data:image/gif;base64") < 0) {
            setIsLoaded(true);
          }
        }}
      />
    </Fade>
  );
};

export default Logo;
