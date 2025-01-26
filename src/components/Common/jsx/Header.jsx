import React from 'react';

const Header = () =>{
    return (
        <header>
            <div className="header-content">
                <button className="header-title-button" type="button">Cheontfolio</button>
                <nav className="header-nav-menu">
                    <button className="header-nav-button" type="button">Introduction</button>
                    <button className="header-nav-button" type="button">Skills</button>
                    <button className="header-nav-button" type="button">Address</button>
                    <button className="header-nav-button" type="button">Awards & Activities</button>
                    <button className="header-nav-button" type="button">Projects</button>
                </nav>
            </div>
        </header>
    );

}

export default Header;