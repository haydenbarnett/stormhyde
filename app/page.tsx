import type { FC } from 'react';
import { Banner } from '@/components/Banner';
import { CardGrid } from '@/components/CardGrid';

const Home: FC = () => (
  <>
    <Banner
      title="Free software &amp; resources"
      description="Created for use with Autodesk Maya"
    />
    <CardGrid className="-mt-8" />
  </>
);

export default Home;
