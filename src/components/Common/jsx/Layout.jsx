import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Introduction from "../../Introduction/jsx/Introduction";
import Skills from "../../Skills/jsx/Skills";
const Layout = ({children}) =>{
    return(
        <div className="Layout">
            <Header/>
            <Introduction/>
            <Skills/>
                <main className="content">{children}</main>
            <Footer/>
        </div>
    );
}

export default Layout;