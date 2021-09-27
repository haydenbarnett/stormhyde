import { forwardRef } from "react";
import { Link } from "@components";
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
    "&:focus": {
      outline: "none",
    },
    "&:focus-visible": {
      outline: "currentColor 1px dashed",
    },
  },
  compose(space, display, color)
);

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  ({ children, color = "blue", href, as = "a", ...props }, ref) => {
    return (
      <Link href={href} passHref>
        <BaseTextLink ref={ref} as={as} color={color} {...props}>
          {children}
        </BaseTextLink>
      </Link>
    );
  }
);
TextLink.displayName = "TextLink";

export default TextLink;
