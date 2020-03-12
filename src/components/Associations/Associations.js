import React from 'react';
import Button from "react-bootstrap/Button";
import './Associations.scss';
import Foundations from "./ Foundations/Foundations";

const Associations = () => {
    return (
        <section className="associations">
            <h2>Komu pomagamy?</h2>
            <img src={require("../../assets/Decoration.svg")} alt=""/>
            <div className="associations__buttons">
                <Button variant="outline-secondary" size="lg">Fundacjom</Button>
                <Button variant="outline-secondary" size="lg">Organizacjom pozarządowym</Button>
                <Button variant="outline-secondary" size="lg">Lokalnym zbiórkom</Button>
            </div>
            <Foundations />

        </section>
    );
};

export default Associations;