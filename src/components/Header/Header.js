import React from 'react';
import Menu from "./Menu/Menu";
import HeroSection from "./HeroSection/HeroSection";


const Header = ({loggedUser, setLoggedUser}) => {

    return (
        <header>
            <Menu loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
            <HeroSection loggedUser={loggedUser} />
        </header>
    );
};
export default Header;