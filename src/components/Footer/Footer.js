import React, {useState} from 'react';
import './Footer.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "./ContactForm/ContactForm";
import Copyright from "./Copyright";

const Footer = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const successMessage = (
        <p className="success-message">
            Wiadomość została wysłana! Wkrótce się skontaktujemy.
        </p>
    );

    return (
        <footer>
            <Container>
                <Row>
                    <Col xl={6} className="footer__img"/>
                    <Col xs={12} lg={7} xl={6} className="footer__form">
                        <h2>Skontaktuj się z nami</h2>
                        <img style={{marginBottom: isSuccess? '0' : '70px'}} src={require("../../assets/Decoration.svg")} alt=""/>
                        {isSuccess ? successMessage : null}
                        <ContactForm setIsSuccess={setIsSuccess}/>
                    </Col>
                </Row>
            </Container>
            <Copyright/>
        </footer>
    );
};
export default Footer;