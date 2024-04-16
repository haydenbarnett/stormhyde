import { Banner } from '@/components/Banner';
import { Container } from '@/components/Container';
import { CardGrid } from '@/components/CardGrid';
import { DownloadButton } from '@/components/DownloadButton';
import { ProductImage } from '@/components/ProductImage';
import { TextLink } from '@/components/TextLink';
import { FC } from 'react';
import { products } from '@/data/products';
import { Prose } from '@/components/Prose';
import { Metadata } from 'next';
import { getProductMetadata } from '@/lib/utils';

const product = products.find(
  (product) => product.url === '/batch-script-generator'
);

export const generateMetadata = (): Promise<Metadata> => {
  if (!product) return Promise.resolve({});
  const meta = getProductMetadata(product);
  return Promise.resolve(meta);
};

const BatchScriptGenerator: FC = () => {
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
                href="/downloads/Batch-Script-Generator-v1.3.zip"
                category="Windows file"
              />
              <DownloadButton
                href="/downloads/Batch-Script-Generator-v1.3-app.zip"
                category="Mac app"
              />
            </div>
            <Prose className="py-12">
              <h2>Instructions</h2>
              <ul>
                <li>
                  Load your .ma or .mb file and enter render data then press
                  &apos;Add Render Line&apos;
                </li>
                <li>
                  Once finished the batch script can be generated with
                  &apos;Create Batch Script&apos;
                </li>
                <li>
                  Any fields not specified simply are not included in the
                  generated script.
                </li>
                <li>All fields are optional except the scene file.</li>
                <li>
                  Can also generate a test script that renders only the first
                  frame of each scene.
                </li>
                <li>
                  Custom render flags to change options such as resolution, file
                  type, render messages and number of cores to use. Applies to
                  all scenes
                </li>
                <li>Automatically create log files for each render line</li>
                <li>
                  Select post render tasks such as opening a file or shutting
                  down or logging off the computer automatically
                </li>
                <li>
                  Able to load batch file information straight back into the
                  program
                  <ul>
                    <li>File &gt; Open Script or File &gt; Add Script</li>
                  </ul>
                </li>
              </ul>
              <p>&nbsp;</p>
              <h2>Notes for rendering on a Mac OS</h2>
              <p>
                The Render executable file you require will be located in a path
                similar to
              </p>
              <pre>
                /Applications/Autodesk/maya2015/Maya.app/Contents/bin/Render
              </pre>
              <p>
                The file you save must also be made executable before it is run.
              </p>
              <p>One way to do this is to:</p>
              <ul>
                <li>rename the file from .sh to .command</li>
                <li>open Terminal</li>
                <li>cd to your current directory</li>
                <li>chmod 700 yourfilename.command</li>
              </ul>
              <p>The file will now run when double clicked.</p>
              <p>&nbsp;</p>
              <h2>More</h2>
              <p>
                Shaun Keenan has created a basic video tutorial available on{' '}
                <TextLink href="http://cg.tutsplus.com/tutorials/autodesk-maya/quick-tip-create-a-batch-script-to-render-maya-scenes/">
                  3D Ocean
                </TextLink>
              </p>
              <p>
                The Batch Script Generator is also available to download on{' '}
                <TextLink href="http://www.creativecrash.com/downloads/applications/render-managers/c/batch-script-generator">
                  creativecrash.com
                </TextLink>
              </p>
            </Prose>
          </div>
          <div className="mt-0 md:mt-[-220px] mb-[80px]">
            <div className="flex flex-col gap-10">
              <ProductImage src="/products/batch-script-generator/batch-script-generator-2.png" />
              <ProductImage src="/products/batch-script-generator/batch-script-generator-4.png" />
            </div>
          </div>
        </div>
      </Container>
      <CardGrid className="mt-20" />
    </>
  );
};

export default BatchScriptGenerator;
