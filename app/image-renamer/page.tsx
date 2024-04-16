import { Banner } from '@/components/Banner';
import { Container } from '@/components/Container';
import { CardGrid } from '@/components/CardGrid';
import { ProductImage } from '@/components/ProductImage';
import { DownloadButton } from '@/components/DownloadButton';
import { FC } from 'react';
import { products } from '@/data/products';
import { Prose } from '@/components/Prose';
import { Metadata } from 'next';
import { getProductMetadata } from '@/lib/utils';

const product = products.find((product) => product.url === '/image-renamer');

export const generateMetadata = (): Promise<Metadata> => {
  if (!product) return Promise.resolve({});
  const meta = getProductMetadata(product);
  return Promise.resolve(meta);
};

const ImageRenamer: FC = () => {
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
                href="/downloads/Image-Renamer-v1.0.zip"
                category="Windows file"
              />
              <DownloadButton
                href="/downloads/Image-Renamer-v1.0-app.zip"
                category="Mac app"
              />
            </div>
            <Prose className="py-12">
              <h2>Instructions</h2>
              <ul>
                <li>Add a source directory to load in files</li>
                <li>Use the file filter fields to select only desired files</li>
                <li>
                  Enter a new name, the amount of frame padding & the file
                  extension. All fields optional.
                </li>
                <li>
                  The lower table allows you to preview the output before
                  renaming
                </li>
              </ul>
            </Prose>
          </div>
          <div className="md:mt-[-220px] mb-[80px]">
            <ProductImage src="/products/image-renamer/image-renamer-2.png" />
          </div>
        </div>
      </Container>
      <CardGrid className="mt-20" />
    </>
  );
};

export default ImageRenamer;
