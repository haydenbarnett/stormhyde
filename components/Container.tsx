import { FC, ReactNode } from 'react';
import clsx from 'clsx';

type ContainerProps = {
  className?: string;
  children?: ReactNode;
};

export const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={clsx('w-[1170px] max-w-full mx-auto px-4', className)}>
      {children}
    </div>
  );
};
