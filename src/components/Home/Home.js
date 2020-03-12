import React from 'react';
import Menu from "../Menu/Menu";
import HeroSection from "../HeroSection/HeroSection";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import SimpleSteps from "../SimpleSteps/SimpleSteps";
import About from "../About/About";


const Home = () => {
    return (
        <>
            <Menu/>
            <HeroSection/>
            <ThreeColumns/>
            <SimpleSteps/>
            <About/>
        </>
    );
};

export default Home;