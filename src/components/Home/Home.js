import React from 'react';
import './Home.scss';
import * as Scroll from 'react-scroll';
import Header from "../Header/Header";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import SimpleSteps from "../SimpleSteps/SimpleSteps";
import About from "../About/About";
import Associations from "../Associations/Associations";
import Footer from "../Footer/Footer";
const Element = Scroll.Element;

const Home = () => {
    return (
        <>
            <Element name="start"><Header/></Element>
            <Element name="columns"><ThreeColumns/></Element>
            <Element name="steps"><SimpleSteps/></Element>
            <Element name="about"><About/></Element>
            <Element name="associations"><Associations/></Element>
            <Element name="contact" className="last-section"><Footer/></Element>
        </>
    );
};
export default Home;