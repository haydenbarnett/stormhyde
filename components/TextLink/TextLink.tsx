import { forwardRef } from "react";
import NextLink from "next/link";
import type { LinkProps as NextLinkProps } from "next/link";
import styled from "@emotion/styled";
import {
  compose,
  display,
  space,
  color,
  DisplayProps,
  SpaceProps,
  ColorProps,
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

type BaseTextLinkProps = DisplayProps &
  SpaceProps &
  ColorProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
    children?: React.ReactNode;
  };

type TextLinkProps = BaseTextLinkProps & NextLinkProps;

const BaseTextLink = styled("a", { shouldForwardProp })<BaseTextLinkProps>(
  {
    cursor: "pointer",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  compose(space, display, color)
);

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, color = "blue", href, as = "a", ...props }, ref) => {
    return (
      <NextLink href={href} passHref>
        <BaseTextLink ref={ref} as={as} color={color} {...props}>
          {children}
        </BaseTextLink>
      </NextLink>
    );
  }
);
TextLink.displayName = "TextLink";

export default TextLink;
