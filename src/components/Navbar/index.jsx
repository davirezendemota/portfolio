import Image from "next/image";
import logo from "../../assets/img/logo.svg";
// import { Link } from 'react-router-dom'
import { StyledNavBar } from "./StyledNavBar";


function Navbar() {
    return (
        <StyledNavBar>
            <nav className="navbar navbar-expand-lg position-relative px-5">
                <div className="px-0 container-fluid">
                    <div className="navbar-brand">
                        {/* <Link to='/'> */}
                            <Image src={logo} alt="logoSrc" />
                        {/* </Link> */}
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="ml-2 nav-item">
                                {/* <Link to='/linktree' className="nav-link active"> */}
                                    Links
                                {/* </Link> */}
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/portfolio' className="nav-link">
                                    Portfolio
                                </Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link to='/achievements' className="nav-link">
                                    Achievements
                                </Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </StyledNavBar>
    );
}

export { Navbar }