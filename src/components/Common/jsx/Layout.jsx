import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Introduction from "../../Introduction/jsx/Introduction";
import Skills from "../../Skills/jsx/Skills";
import Address from "../../Address/jsx/Address";
import AwardAndActivations from "../../AwardsAndActivations/jsx/AwardAndActivations";
import Projects from "../../DevelopmentProjects/jsx/Projects";
const Layout = ({children}) =>{
    return(
        <div className="Layout">
            <Header/>
            <Introduction/>
            <Skills/>
            <Address/>
            <AwardAndActivations/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default Layout;