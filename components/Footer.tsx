import { FC } from 'react';
import { Container } from './Container';
import { Symbol } from './Symbol';
import { TextLink } from './TextLink';
import { Text } from './Text';

export const Footer: FC = () => (
  <div className="bg-gray-800 text-gray-400 py-12">
    <Container>
      <div className="grid grid-cols-12">
        <div className="col-span-12 sm:col-span-6 md:col-span-8 lg:col-span-9">
          <div className="flex flex-col">
            <p className="text-white mb-6">Products</p>
            <TextLink
              className="text-gray-400 my-2 inline-flex w-fit text-sm no-underline"
              href="/batch-script-generator/"
            >
              Batch Script Generator
            </TextLink>
            <TextLink
              href="/map-converter/"
              className="text-gray-400 my-2 inline-flex w-fit text-sm no-underline"
            >
              Map Converter
            </TextLink>
            <TextLink
              href="/image-renamer/"
              className="text-gray-400 my-2 inline-flex w-fit text-sm no-underline"
            >
              Image Renamer
            </TextLink>
            <TextLink
              href="/scrambler/"
              className="text-gray-400 my-2 inline-flex w-fit text-sm no-underline"
            >
              Scrambler
            </TextLink>
            <TextLink
              href="/demon/"
              className="text-gray-400 my-2 inline-flex w-fit text-sm no-underline"
            >
              Demon
            </TextLink>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
          <div className="flex flex-col gap-4 mt-6 sm:mt-0">
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
