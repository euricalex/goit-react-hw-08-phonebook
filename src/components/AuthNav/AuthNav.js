
import { StyledAuth, StyledLink } from './StyledAuthNav';

export default function AuthNav() {
  return (
    <StyledAuth>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </StyledAuth>
  );
}