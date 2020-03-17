import React, {useState} from 'react';
import Menu from "./Menu/Menu";
import HeroSection from "./HeroSection/HeroSection";
import * as firebase from "firebase";

const Header = () => {
    const [loggedUser, setLoggedUser] = useState(null);

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log('zalogowano');
            setLoggedUser(user);
        } else {
            setLoggedUser(null);
        }
    });

    return (
        <header>
            <Menu loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
            <HeroSection loggedUser={loggedUser} />
        </header>
    );
};
export default Header;