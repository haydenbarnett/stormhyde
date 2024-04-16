import { FC } from 'react';
import Image from 'next/image';

type ProductImageProps = {
  src: string;
};

export const ProductImage: FC<ProductImageProps> = ({ src }) => {
  return (
    <div className="rounded-lg overflow-hidden leading-[0]">
      <Image src={src} width="700" height="700" alt="" />
    </div>
  );
};
