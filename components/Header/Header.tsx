import { Container, Logo, Link } from "../";
import styled from "@emotion/styled";

const HeaderWrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: ${(props) => props.theme.colors.blue};
`;

const LogoWrapper = styled.a`
  display: inline-flex;
  margin: 26px 0;
`;

export const Header = () => (
  <HeaderWrapper>
    <Container>
      <Link href="/" passHref>
        <LogoWrapper>
          <Logo color="white" />
        </LogoWrapper>
      </Link>
    </Container>
  </HeaderWrapper>
);

export default Header;
