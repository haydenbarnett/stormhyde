import { Banner } from '@/components/Banner';
import { Container } from '@/components/Container';
import { DownloadButton } from '@/components/DownloadButton';
import { ProductImage } from '@/components/ProductImage';
import { CardGrid } from '@/components/CardGrid';
import { FC } from 'react';
import { TextLink } from '@/components/TextLink';
import { products } from '@/data/products';
import { Prose } from '@/components/Prose';
import { getProductMetadata } from '@/lib/utils';
import { Metadata } from 'next';

const product = products.find((product) => product.url === '/demon');

export const generateMetadata = (): Promise<Metadata> => {
  if (!product) return Promise.resolve({});
  const meta = getProductMetadata(product);
  return Promise.resolve(meta);
};

const Demon: FC = () => {
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
                href="/downloads/demonRigged-v1.0.zip"
                category=".ma .mb .obj"
              />
            </div>
            <Prose className="py-12">
              <h2>Includes</h2>
              <ul>
                <li>.ma &amp; .mb file with basic rig ready for animation</li>
                <li>.obj file with mesh</li>
                <li>
                  Diffuse texture (also applied as bump in preview renders)
                </li>
              </ul>
              <p>Free for personal &amp; commercial use.</p>
              <p>
                Also available to download on{' '}
                <TextLink href="http://www.turbosquid.com/3d-models/demon-rig-ma-free/639934">
                  Turbosquid
                </TextLink>
                .
              </p>
            </Prose>
          </div>
          <div className="mt-0 md:mt-[-220px] mb-[80px]">
            <ProductImage src="/products/demon/demon-1.jpg" />
          </div>
        </div>
      </Container>
      <CardGrid className="mt-20" />
    </>
  );
};

export default Demon;
