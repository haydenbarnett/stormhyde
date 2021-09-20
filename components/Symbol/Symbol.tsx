import { FC } from "react";

type SymbolProps = {
  color?: "blue" | "white";
};

export const Symbol: FC<SymbolProps> = ({ color = "blue" }) => {
  return (
    <img src={`/symbol-${color}.svg`} width="30" height="30" alt="Stormhyde" />
  );
};

export default Symbol;
