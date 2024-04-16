import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode, forwardRef } from 'react';

type TextLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, href, className }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={clsx(
          'underline text-blue-600 hover:text-sky-600 transition',
          className
        )}
      >
        {children}
      </Link>
    );
  }
);
TextLink.displayName = 'TextLink';
