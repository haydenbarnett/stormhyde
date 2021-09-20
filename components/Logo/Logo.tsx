import { FC } from "react";

type LogoProps = {
  color?: "blue" | "white";
};

export const Logo: FC<LogoProps> = ({ color = "blue" }) => {
  return (
    <img src={`/logo-${color}.svg`} width="150" height="23" alt="Stormhyde" />
  );
};

export default Logo;
