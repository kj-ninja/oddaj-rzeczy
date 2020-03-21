import React, {useEffect, useState} from 'react';
import * as Scroll from 'react-scroll';
import Header from "../Header/Header";
import ThreeColumns from "../ThreeColumns/ThreeColumns";
import SimpleSteps from "../SimpleSteps/SimpleSteps";
import About from "../About/About";
import Associations from "../Associations/Associations";
import Footer from "../Footer/Footer";
import * as firebase from "firebase";
const Element = Scroll.Element;

const Home = () => {
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(()=> {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                setLoggedUser(user);
            } else {

                setLoggedUser(null);
            }
        });
    }, []);

    return (
        <>
            <Element name="start"><Header loggedUser={loggedUser} setLoggedUser={setLoggedUser}/></Element>
            <Element name="columns"><ThreeColumns/></Element>
            <Element name="steps"><SimpleSteps loggedUser={loggedUser}/></Element>
            <Element name="about"><About/></Element>
            <Element name="associations"><Associations/></Element>
            <Element name="contact" className="last-section"><Footer/></Element>
        </>
    );
};
export default Home;