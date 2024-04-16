import { ProductData } from '@/data/products';
import { site } from '@/data/site';

export const getProductMetadata = (product: ProductData) => {
  return {
    title: `${product.title} | ${site.name}`,
    description: product.description,
    openGraph: {
      images: [product.thumbnail],
    },
  };
};
