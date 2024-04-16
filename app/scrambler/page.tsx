import { Banner } from '@/components/Banner';
import { Container } from '@/components/Container';
import { ProductImage } from '@/components/ProductImage';
import { CardGrid } from '@/components/CardGrid';
import { DownloadButton } from '@/components/DownloadButton';
import { FC } from 'react';
import { products } from '@/data/products';
import { Prose } from '@/components/Prose';
import { Metadata } from 'next';
import { getProductMetadata } from '@/lib/utils';

const product = products.find((product) => product.url === '/scrambler');

export const generateMetadata = (): Promise<Metadata> => {
  if (!product) return Promise.resolve({});
  const meta = getProductMetadata(product);
  return Promise.resolve(meta);
};

const Scrambler: FC = () => {
  return (
    <>
      <Banner
        title={product?.title}
        description={product?.description}
        category={product?.category}
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="flex justify-center -mt-8">
              <DownloadButton
                href="/downloads/Scrambler-v1.1.zip"
                category="Windows file"
              />
              <DownloadButton
                href="/downloads/Scrambler-v1.1-app.zip"
                category="Mac app"
              />
            </div>
            <Prose className="py-12">
              <p>
                A simple application that takes two words and scrambles them
                together to make new words for idea generation and naming.
              </p>
            </Prose>
          </div>
          <div className="md:mt-[-220px] mb-[80px]">
            <ProductImage src="/products/scrambler/scrambler-2.png" />
          </div>
        </div>
      </Container>
      <CardGrid className="mt-20" />
    </>
  );
};

export default Scrambler;
