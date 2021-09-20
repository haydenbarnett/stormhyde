import { Container, Logo } from "../";
import NextLink from "next/link";
import styled from "@emotion/styled";

const StyledHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  img {
    margin: 26px 0;
  }
`;

export const Header = () => (
  <StyledHeader>
    <Container>
      <NextLink href="/" passHref>
        <a>
          <Logo color="white" />
        </a>
      </NextLink>
    </Container>
  </StyledHeader>
);

export default Header;
