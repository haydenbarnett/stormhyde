import { FC } from 'react';
import Image from 'next/image';

type LogoProps = {
  variant?: 'blue' | 'white';
};

export const Logo: FC<LogoProps> = ({ variant = 'blue' }) => {
  return (
    <Image
      src={`/logo-${variant}.svg`}
      width="150"
      height="23"
      alt="Stormhyde"
    />
  );
};

export default Logo;
