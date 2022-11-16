import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo.svg";
import { StyledNavBar } from "./StyledNavBar";

import { AuthContext } from "../../contexts/auth";
import { useContext } from 'react'

function Navbar() {

  const { logout, authenticated } = useContext(AuthContext)

  return (
    <StyledNavBar>
      <nav className="navbar">
        <div className="nav__container">
          <div className="logo">
            <Link href='/'>
              <Image
                src={logo}
                alt="logoSrc"
                quality={100}
              />
            </Link>
          </div>
          <ul className="navlinks">
            {!authenticated && (
              <>
                <Link href="/login">
                  <li>Login</li>
                </Link>
                <Link href="/signup">
                  <li>Sign Up</li>
                </Link>
              </>
            )}
            {/* <li>Linktree</li>
            <li>Projects</li> */}
            {authenticated && <li onClick={logout}>Logout</li>}
          </ul>
          <div className="page-options">

          </div>
        </div>
      </nav>
    </StyledNavBar>
  );
}

export { Navbar }