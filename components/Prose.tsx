import clsx from 'clsx';
import { FC, ReactNode } from 'react';

type ProseProps = {
  className?: string;
  children: ReactNode;
};

export const Prose: FC<ProseProps> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        'prose prose-sm prose-headings:font-medium prose-pre:bg-gray-100 prose-pre:text-gray-900',
        className
      )}
    >
      {children}
    </div>
  );
};
