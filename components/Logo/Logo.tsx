import { FC } from "react";
import Image from "next/image";

type LogoProps = {
  color?: "blue" | "white";
};

export const Logo: FC<LogoProps> = ({ color = "blue" }) => {
  return (
    <Image src={`/logo-${color}.svg`} width="150" height="23" alt="Stormhyde" />
  );
};

export default Logo;
