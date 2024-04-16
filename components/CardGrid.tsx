import { FC } from 'react';
import { products } from '../data/products';
import clsx from 'clsx';
import { Container } from './Container';
import { Card } from './Card';

type CardGridProps = {
  className?: string;
};

export const CardGrid: FC<CardGridProps> = ({ className }) => (
  <div className={clsx('mb-20', className)}>
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products?.map((item, index) => (
          <div key={index} className="col-span-1">
            <Card {...item} />
          </div>
        ))}
      </div>
    </Container>
  </div>
);
