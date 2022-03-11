import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchField from "./SearchField";

const StyledNavbar = styled.nav`
  width: 1100px;
  padding: 5px;
  margin: 0 auto;
  display: flex;
  gap: 15px;
`;

function Navbar() {
  return (
    <StyledNavbar>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <SearchField />
    </StyledNavbar>
  );
}

export default Navbar;
