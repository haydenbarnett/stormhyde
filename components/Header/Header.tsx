import { Container, Logo } from "../";
import NextLink from "next/link";
import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const LogoWrapper = styled.a`
  display: inline-flex;
  margin: 26px 0;
`;

export const Header = () => (
  <HeaderWrapper>
    <Container>
      <NextLink href="/" passHref>
        <LogoWrapper>
          <Logo color="white" />
        </LogoWrapper>
      </NextLink>
    </Container>
  </HeaderWrapper>
);

export default Header;
