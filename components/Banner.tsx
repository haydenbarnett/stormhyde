import { FC } from 'react';
import { Container } from './Container';
import clsx from 'clsx';
import { Text } from './Text';

type BannerProps = {
  title?: string;
  description?: string;
  category?: string;
  className?: string;
};

export const Banner: FC<BannerProps> = ({
  title,
  description,
  category,
  className,
}) => {
  return (
    <div
      className={clsx(
        'flex min-h-[380px] justify-center items-center py-20 bg-gradient-to-b bg-sky-500 from-sky-500 to-blue-500',
        className
      )}
    >
      <Container>
        <div className="flex flex-col items-start justify-center gap-3 md:w-1/2">
          <div className="flex flex-col gap-3">
            {category && (
              <p className="text-sm text-white opacity-70">{category}</p>
            )}
            {title && (
              <h1 className="text-3xl font-medium text-white">{title}</h1>
            )}
            {description && (
              <Text size="lg" className="text-white opacity-90">
                {description}
              </Text>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};
