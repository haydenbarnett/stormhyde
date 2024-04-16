export type ProductData = {
  url: string;
  title: string;
  description: string;
  category: string;
  thumbnail: string;
};

export const products: ProductData[] = [
  {
    url: '/batch-script-generator',
    title: 'Batch Script Generator',
    description:
      'Provides a user friendly interface to create batch script files for rendering multiple Autodesk Maya scenes.',
    category: 'Legacy Application',
    thumbnail:
      '/products/batch-script-generator/batch-script-generator-preview.png',
  },
  {
    url: '/map-converter',
    title: 'Map Converter',
    description:
      'Converts standard image files (jpg, png, tif etc) into .map files for more efficient rendering in Mental Ray.',
    category: 'Legacy Application',
    thumbnail: '/products/map-converter/map-converter-preview.png',
  },
  {
    url: '/image-renamer',
    title: 'Image Renamer',
    description:
      'Quickly rename large collections of files including the ability to fix errors with frame numbering and file extensions.',
    category: 'Legacy Application',
    thumbnail: '/products/image-renamer/image-renamer-preview.png',
  },
  {
    url: '/scrambler',
    title: 'Scrambler',
    description: 'Mix and mash two words together to form new ones.',
    category: 'Legacy Application',
    thumbnail: '/products/scrambler/scrambler-preview.png',
  },
  {
    url: '/demon',
    title: 'Demon',
    description:
      'Free 3d rigged demon creature ready to animate in Autodesk Maya.',
    category: '3D Model',
    thumbnail: '/products/demon/demon-preview.jpg',
  },
];
