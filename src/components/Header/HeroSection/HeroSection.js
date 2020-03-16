import React from 'react';
import './HeroSection.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Link} from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="hero">
            <Jumbotron className="hero__container--mobile">
                <h1 className="hero__title--mobile">Masz w domu rzeczy, z którymi nie wiesz co zrobić?</h1>
                <p className="hero__para--mobile">
                    <span>ODDAJ JE POTRZEBUJĄCYM</span> - szybko i w zaufane ręce
                </p>
                <p className="hero__btn--mobile">
                    <Link to="/rejestracja"><Button variant="outline-secondary">Załóż konto</Button></Link>
                </p>
            </Jumbotron>

            <Container className="hero__container">
                <Row>
                    <Col className="hero__image"/>
                    <Col className="hero__action">
                        <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={require("../../../assets/Decoration.svg")} alt=""/>
                        <div className="hero__buttons">
                            <Link to="/logowanie"><Button variant="outline-secondary" size="lg">ODDAJ RZECZY</Button></Link>
                            <Link to="/logowanie"><Button variant="outline-secondary" size="lg">ZORGANIZUJ ZBIÓRKĘ</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};

export default HeroSection;