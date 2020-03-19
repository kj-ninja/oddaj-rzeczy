import React from 'react';
import './HeroSection.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const HeroSection = ({loggedUser}) => {
    return (
        <section className="hero">
            <div className="hero__container--mobile">
                <div className="hero__para--mobile">
                    <h1>ODDAJ POTRZEBUJĄCYM</h1>
                    <span>- szybko i w zaufane ręce</span>
                </div>
                <span>Masz w domu rzeczy, z którymi nie wiesz co zrobić?</span>
                <p className="hero__btn--mobile">
                    <Link to="/rejestracja"><Button variant="outline-secondary">Załóż konto</Button></Link>
                </p>
            </div>

            <Container className="hero__container--desktop">
                <Row>
                    <Col className="hero__image"/>
                    <Col className="hero__action">
                        <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <img src={require("../../../assets/Decoration.svg")} alt=""/>
                        <div className="hero__buttons">
                            {loggedUser ? <Link to="/oddaj-rzeczy"><Button variant="outline-secondary" size="lg">ODDAJ
                                    RZECZY</Button></Link> :
                                <Link to="/logowanie"><Button variant="outline-secondary" size="lg">ODDAJ
                                    RZECZY</Button></Link>}
                            {loggedUser ? <Link to="/oddaj-rzeczy"><Button variant="outline-secondary" size="lg">ZORGANIZUJ
                                    ZBIÓRKĘ</Button></Link> :
                                <Link to="/logowanie"><Button variant="outline-secondary" size="lg">ZORGANIZUJ
                                    ZBIÓRKĘ</Button></Link>}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
};
export default HeroSection;