import { FC } from 'react';
import Image from 'next/image';

type SymbolProps = {
  variant?: 'blue' | 'white';
};

export const Symbol: FC<SymbolProps> = ({ variant = 'blue' }) => {
  return (
    <Image
      src={`/symbol-${variant}.svg`}
      width="30"
      height="30"
      alt="Stormhyde"
    />
  );
};
