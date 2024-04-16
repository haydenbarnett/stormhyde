import { FC } from 'react';
import { Container } from './Container';
import { Symbol } from './Symbol';
import { TextLink } from './TextLink';
import { Text } from './Text';

export const Footer: FC = () => (
  <div className="py-12 text-gray-400 bg-gray-800">
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 md:col-span-8 lg:col-span-9">
          <div className="flex flex-col">
            <p className="mb-6 text-white">Products</p>
            <TextLink
              className="inline-flex my-2 text-sm text-gray-400 no-underline w-fit"
              href="/batch-script-generator/"
            >
              Batch Script Generator
            </TextLink>
            <TextLink
              href="/map-converter/"
              className="inline-flex my-2 text-sm text-gray-400 no-underline w-fit"
            >
              Map Converter
            </TextLink>
            <TextLink
              href="/image-renamer/"
              className="inline-flex my-2 text-sm text-gray-400 no-underline w-fit"
            >
              Image Renamer
            </TextLink>
            <TextLink
              href="/scrambler/"
              className="inline-flex my-2 text-sm text-gray-400 no-underline w-fit"
            >
              Scrambler
            </TextLink>
            <TextLink
              href="/demon/"
              className="inline-flex my-2 text-sm text-gray-400 no-underline w-fit"
            >
              Demon
            </TextLink>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <div className="flex flex-col mt-6 gap-4 sm:mt-0">
            <div className="mb-4">
              <Symbol variant="white" />
            </div>
            <Text size="sm">
              A retired project by{' '}
              <TextLink
                href="https://haydenbarnett.com"
                className="text-gray-400"
              >
                Hayden Barnett
              </TextLink>
              .
            </Text>
            <Text size="sm">&copy; {new Date().getFullYear()}</Text>
          </div>
        </div>
      </div>
    </Container>
  </div>
);
