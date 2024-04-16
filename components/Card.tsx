import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Text } from './Text';

type CardProps = {
  url: string;
  title: string;
  description?: string;
  category?: string;
  thumbnail: string;
};

export const Card: FC<CardProps> = ({
  url,
  title,
  description,
  category,
  thumbnail,
}) => {
  return (
    <Link
      href={url}
      className="group block rounded-xl shadow-lg hover:shadow-xl mx-auto max-w-[345px] transition-all hover:-translate-y-1 will-change-transform overflow-hidden"
    >
      <div className="relative h-[185px] w-full bg-gray-600">
        <Image src={thumbnail} className="object-cover" fill alt="" />
      </div>
      <div className="flex flex-col gap-4 py-5 px-8">
        <h2 className="font-medium text-lg group-hover:text-sky-600 transition">
          {title}
        </h2>
        <Text className="text-gray-600">{description}</Text>
        <Text size="xs" className="text-gray-500">
          {category}
        </Text>
      </div>
    </Link>
  );
};
