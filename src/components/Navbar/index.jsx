import Image from "next/image";
import logo from "../../assets/img/logo.svg";
// import { Link } from 'react-router-dom'
import { StyledNavBar } from "./StyledNavBar";


function Navbar() {
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