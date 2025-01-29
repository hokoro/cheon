import React from 'react';
import {Link} from 'react-scroll';

const Header = () =>{
    return (
        <header>
            <div className="header-content">
                <div className="header-title-button">Cheontfolio</div>
                <nav className="header-nav-menu">
                    <Link to="introduction" smooth={true} duration={500} className="header-nav-button">Introduction</Link>
                    <Link to="skills" smooth={true} duration={500} className="header-nav-button">Skills</Link>
                    <Link to="address" smooth={true} duration={500} className="header-nav-button">Address</Link>
                    <Link to="awardandactivations" smooth={true} duration={500} className="header-nav-button">Awards & Activities</Link>
                    <Link to="projects" smooth={true} duration={500} className="header-nav-button">Projects</Link>
                </nav>
            </div>
        </header>
    );

}

export default Header;