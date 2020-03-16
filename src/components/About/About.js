import React from 'react';
import './About.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Container className="about__container">
            <Row>
                <Col xs={12} lg={12} xl={6} className="about__info d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column align-items-center justify-content-center">
                        <h2>O nas</h2>
                        <img src={require("../../assets/Decoration.svg")} alt=""/>
                        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya
                            nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <div className="about__info--signature">
                            <img src={require("../../assets/Signature.svg")} alt=""/>
                        </div>
                    </div>
                </Col>
                <Col xs={12} lg={12} xl={6} className="about__image"/>
            </Row>
        </Container>
    );
};

export default About;