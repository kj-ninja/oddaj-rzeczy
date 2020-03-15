import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Footer.scss';
import ContactForm from "./ContactForm/ContactForm";

const Footer = () => {
    return (
        <footer>
            <Container className="footer__container">
                <Row>
                    <Col xs={7} className="footer__img"/>
                    <Col xs={5} className="footer__form">
                        <h2>Skontaktuj się z nami</h2>
                        <img src={require("../../assets/Decoration.svg")} alt=""/>
                        <ContactForm/>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;