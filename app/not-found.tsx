import { Banner } from '@/components/Banner';
import { CardGrid } from '@/components/CardGrid';
import type { FC } from 'react';

const NotFound: FC = () => (
  <>
    <Banner
      title="Page not found"
      description="We cannot find what you were looking for."
    />
    <CardGrid className="-mt-8" />
  </>
);

export default NotFound;
