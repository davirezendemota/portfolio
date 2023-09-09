// STYLED
import { StyledNavBar } from "./StyledNavBar";

import logo from "../../assets/img/logo.svg";

export function Navbar() {

  return (
    <StyledNavBar>
      <nav className="navbar">
        <div className="nav__container">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
        </div>
      </nav>
    </StyledNavBar>
  );
}
