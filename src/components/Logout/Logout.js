import React from 'react';
import './Logout.scss';
import Menu from "../Header/Menu/Menu";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const Logout = () => {
    return (
        <>
            <Menu/>
            <div className="logout__container">
                <h2>Wylogowanie nastąpiło <br/> pomyślnie!</h2>
                <img src={require('../../assets/Decoration.svg')} alt=""/>
                <Link to="/"><Button type="submit" variant="outline-secondary" size="lg">Strona główna</Button></Link>
            </div>
        </>
    );
};

export default Logout;