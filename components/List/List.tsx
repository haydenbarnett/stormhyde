import { FC } from "react";
import styled from "@emotion/styled";
import {
  compose,
  display,
  space,
  color,
  variant,
  DisplayProps,
  SpaceProps,
  ColorProps,
  ResponsiveValue,
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";

type ListSize = "xs" | "sm" | "md" | "lg" | "xl";

type ListProps = DisplayProps &
  SpaceProps &
  ColorProps &
  React.ComponentPropsWithoutRef<"ul"> & {
    as?: React.ElementType;
    size?: ResponsiveValue<ListSize>;
    children?: React.ReactNode;
  };

const BaseList = styled("ul", { shouldForwardProp })<ListProps>(
  {
    marginTop: "0",
    marginBottom: "1em",
    paddingLeft: "1rem",
    "> li": {
      fontSize: "inherit",
      lineHeight: "inherit",
      marginBottom: "0.5em",
      "ul, ol": {
        paddingLeft: "1rem",
        marginTop: "0.5em",
      },
    },
  },
  variant({
    prop: "size",
    variants: {
      xl: {
        fontSize: "xl",
        lineHeight: "loose",
        fontWeight: "normal",
      },
      lg: {
        fontSize: "lg",
        lineHeight: "relaxed",
        fontWeight: "normal",
      },
      md: {
        fontSize: "md",
        lineHeight: "normal",
        fontWeight: "normal",
      },
      sm: {
        fontSize: "sm",
        lineHeight: "normal",
        fontWeight: "normal",
      },
      xs: {
        fontSize: "xs",
        lineHeight: "normal",
        fontWeight: "normal",
      },
    },
  }),
  compose(space, display, color)
);

export const List: FC<ListProps> = ({ children, size = "sm", ...props }) => {
  return (
    <BaseList size={size} {...props}>
      {children}
    </BaseList>
  );
};

export default List;
