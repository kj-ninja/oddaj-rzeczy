import React from 'react';
import Menu from "./Menu/Menu";
import HeroSection from "./HeroSection/HeroSection";

const Header = () => {
    return (
        <header>
            <Menu/>
            <HeroSection/>
        </header>
    );
};

export default Header;