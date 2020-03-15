import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Footer.scss';
import ContactForm from "./ContactForm/ContactForm";

const Footer = () => {
    const [isSuccess, setIsSuccess] = useState(false);

    const succesMessage = (
        <p className="success-message">
            Wiadomość została wysłana! Wkrótce się skontaktujemy.
        </p>
    );

    return (
        <footer>
            <Container className="footer__container">
                <Row>
                    <Col xs={7} className="footer__img"/>
                    <Col xs={5} className="footer__form">
                        <h2>Skontaktuj się z nami</h2>
                        <img style={{marginBottom: isSuccess? '0' : '70px'}} src={require("../../assets/Decoration.svg")} alt=""/>
                        {isSuccess ? succesMessage : null}
                        <ContactForm setIsSuccess={setIsSuccess}/>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;