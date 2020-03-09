import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './HeroSection.scss';
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import {Link} from "react-router-dom";


const HeroSection = () => {
    return (
        <>
            <Jumbotron>
                <h1>Masz w domu rzeczy, z którymi nie wiesz co zrobić?</h1>
                <p>
                    ODDAJ JE POTRZEBUJĄCYM - szybko i w zaufane ręce
                </p>
                <p>
                    <Link to="/rejestracja"><Button variant="outline-primary">Załóż konto</Button></Link>
                </p>
            </Jumbotron>

            <Container className="hero__section--container">
                <Row>
                    <Col className="hero__section--image"/>
                    <Col className="hero__section--action">
                        <h1>Zacznij pomagać!<br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                        <div className="hero_section--buttons">
                            <Link to="/logowanie"><Button variant="outline-secondary" size="lg">ODDAJ RZECZY</Button></Link>
                            <Link to="/logowanie"><Button variant="outline-secondary" size="lg">ZORGANIZUJ ZBIÓRKĘ</Button></Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default HeroSection;