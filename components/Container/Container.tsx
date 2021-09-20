import { FC, ReactNode } from "react";
import styled from "@emotion/styled";

type ContainerProps = {
  children?: ReactNode;
};

const StyledContainer = styled("div")`
  width: 1170px;
  max-width: 100%;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
`;

export const Container: FC<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
