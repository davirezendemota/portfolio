import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/img/logo.svg";
// import { Link } from 'react-router-dom'
import { StyledNavBar } from "./StyledNavBar";

import { AuthContext } from "../../contexts/auth";
import { useContext } from 'react'

function Navbar() {

  const { logout } = useContext(AuthContext)

  return (
    <StyledNavBar>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            {/* <Link to='/'> */}
            <Image
              src={logo}
              alt="logoSrc"
              quality={100}
            />
            {/* </Link> */}
          </div>
          <ul className="navlinks">
            <Link href="/login">
              <li>Login</li>
            </Link>
            <Link href="/signup">
              <li>Sign Up</li>
            </Link>
            <li onClick={logout}>Logout</li>
            <li>Linktree</li>
            <li>Projects</li>
          </ul>
          <div className="page-options">

          </div>
        </div>
      </nav>
    </StyledNavBar>
  );
}

export { Navbar }