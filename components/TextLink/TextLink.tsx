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
    position: "relative",
    cursor: "pointer",
    textDecoration: "none",
    "&::before": {
      content: `""`,
      position: "absolute",
      width: "100%",
      height: "1px",
      background: "currentColor",
      top: "100%",
      left: "0",
      pointerEvents: "none",
      transformOrigin: "100% 50%",
      transform: "scale3d(0, 1, 1)",
      transition: "transform 0.3s",
    },
    "&:hover::before": {
      transformOrigin: "0% 50%",
      transform: "scale3d(1, 1, 1)",
    },
    "&:hover": {
      textDecoration: "none",
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
