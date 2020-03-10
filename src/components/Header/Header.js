import React from 'react';
import Menu from "../Menu/Menu";
import HeroSection from "../HeroSection/HeroSection";
import ThreeColumns from "../ThreeColumns/ThreeColumns";

const Header = () => {
    return (
        <>
            <Menu />
            <HeroSection />
            <ThreeColumns/>
        </>
    );
};

export default Header;