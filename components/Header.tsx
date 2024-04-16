import Link from 'next/link';
import { Container } from './Container';
import Logo from './Logo';
import { FC } from 'react';

const sizeClassName = {
  xl: 'text-xl',
  lg: 'text-lg',
  md: 'text-md',
  sm: 'text-sm',
  xs: 'text-xs',
};

export const Header: FC = () => (
  <div className="absolute top-0 left-0 right-0 z-10">
    <Container>
      <div className="flex justify-center sm:justify-start">
        <Link href="/" className="outline-0 my-[26px]">
          <div className="inline-flex">
            <Logo variant="white" />
          </div>
        </Link>
      </div>
    </Container>
  </div>
);
