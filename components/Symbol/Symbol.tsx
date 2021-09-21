import { FC, useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

const spin = keyframes`
  from, 60% {
    transform: rotateZ(0deg);
  }

  to {
    transform: rotateZ(720deg);
  }
`;

const Animation = styled.div`
  display: inline-flex;
  animation: ${spin} 10s cubic-bezier(0.5, 0, 0, 1) forwards infinite;
`;

type FadeProps = {
  opacity?: number;
};

const Fade = styled.div<FadeProps>`
  opacity: ${(props) => props.opacity};
  transition: 0.8s ease;
`;

type SymbolProps = {
  color?: "blue" | "white";
};

export const Symbol: FC<SymbolProps> = ({ color = "blue" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <Fade opacity={isLoaded ? 1 : 0}>
      <Animation>
        <Image
          src={`/symbol-${color}.svg`}
          width="30"
          height="30"
          alt="Stormhyde"
          onLoad={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.indexOf("data:image/gif;base64") < 0) {
              setIsLoaded(true);
            }
          }}
        />
      </Animation>
    </Fade>
  );
};

export default Symbol;
