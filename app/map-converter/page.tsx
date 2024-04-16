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

const product = products.find((product) => product.url === '/map-converter');

export const generateMetadata = (): Promise<Metadata> => {
  if (!product) return Promise.resolve({});
  const meta = getProductMetadata(product);
  return Promise.resolve(meta);
};

const MapConverter: FC = () => {
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
                href="/downloads/Map-Converter-v1.0.zip"
                category="Windows file"
              />
            </div>
            <Prose className="py-12">
              <p>
                Converts standard image files (jpg, png, tif etc) into memory
                mappable (.map) files for use with Mental Ray.
              </p>
              <p>
                The .map files are Mental Ray&apos;s native format and work very
                efficiently in comparison to normal images when rendering.
              </p>
              <p>This works using the Autodesk Maya executable imf_copy.exe</p>
            </Prose>
          </div>
          <div className="md:mt-[-220px] mb-[80px]">
            <ProductImage src="/products/map-converter/map-converter-2.png" />
          </div>
        </div>
      </Container>
      <CardGrid className="mt-20" />
    </>
  );
};

export default MapConverter;
