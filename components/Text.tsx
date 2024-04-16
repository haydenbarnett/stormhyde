import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';

type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type TextProps = ComponentPropsWithoutRef<'p'> & {
  size?: TextSize;
};

const sizeClassName = {
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-md',
  sm: 'text-sm',
  xs: 'text-xs',
};

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, size = 'sm', className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={clsx(sizeClassName[size], 'mb-2', className)}
        {...props}
      >
        {children}
      </p>
    );
  }
);
Text.displayName = 'Text';
