import { FC } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

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

type SymbolProps = {
  color?: "blue" | "white";
};

export const Symbol: FC<SymbolProps> = ({ color = "blue" }) => {
  return (
    <Animation>
      <img
        src={`/symbol-${color}.svg`}
        width="30"
        height="30"
        alt="Stormhyde"
      />
    </Animation>
  );
};

export default Symbol;
