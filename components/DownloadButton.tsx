import Link from 'next/link';
import { FC } from 'react';

type DownloadButtonProps = {
  href: string;
  label?: string;
  category?: string;
};

export const DownloadButton: FC<DownloadButtonProps> = ({
  href,
  label = 'Download',
  category,
}) => (
  <Link
    href={href}
    target="_blank"
    className="group flex text-center flex-col mx-1 sm:mx-3 py-4 px-6 sm:px-10 bg-white hover:bg-sky-50 rounded-lg shadow-md hover:shadow-lg text-gray-600 transition hover:-translate-y-1"
  >
    {label && (
      <span className="text-md font-semibold group-hover:text-blue-600 transition">
        {label}
      </span>
    )}
    {category && (
      <span className="text-xs text-gray-500 group-hover:text-blue-600 transition">
        {category}
      </span>
    )}
  </Link>
);
