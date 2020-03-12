import React from 'react';
import * as Scroll from 'react-scroll';
import Header from "../Header/Header";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import SimpleSteps from "../SimpleSteps/SimpleSteps";
import About from "../About/About";

const Element = Scroll.Element;


const Home = () => {
    return (
        <>
            <Element name="start"><Header/></Element>
            <ThreeColumns/>
            <Element name="steps"><SimpleSteps/></Element>
            <Element name="about"><About/></Element>
        </>
    );
};

export default Home;