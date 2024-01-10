import { HeaderWrapper, StyledLink } from "./styles";

export default function Header() {
  return (
    <HeaderWrapper>
      <StyledLink to="/">Home</StyledLink>

      <StyledLink to="/about">About</StyledLink>
    </HeaderWrapper>
  );
}
