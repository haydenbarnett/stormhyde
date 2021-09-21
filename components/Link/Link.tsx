import NextLink, { LinkProps } from "next/link";
import React, { ReactNode } from "react";

interface LinkPropsExtended extends LinkProps {
  children: ReactNode;
}

export const Link = ({ children, href, passHref }: LinkPropsExtended) => (
  <NextLink href={href} passHref={passHref} scroll={false}>
    {children}
  </NextLink>
);

export default Link;
