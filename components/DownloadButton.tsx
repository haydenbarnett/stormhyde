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
    className="flex flex-col px-6 py-4 mx-1 text-center text-gray-600 bg-white rounded-lg shadow-md outline-none transition group sm:mx-3 sm:px-10 hover:bg-sky-50 hover:shadow-lg hover:-translate-y-1 focus-visible:ring-4 ring-blue-600"
  >
    {label && (
      <span className="font-semibold transition text-md group-hover:text-blue-600">
        {label}
      </span>
    )}
    {category && (
      <span className="text-xs text-gray-500 transition group-hover:text-blue-600">
        {category}
      </span>
    )}
  </Link>
);
