import React from 'react';
import './Foundations.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Foundations = () => {
    return (
        <section className="foundations">
            <p className="foundations__info">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym
                się zajmują, komu pomagają i czego potrzebują.</p>

            <Container fluid className="foundations__container">
                <Row className="foundations__row">
                    <Col className="d-flex flex-column align-items-start pl-0">
                        <h3>Fundacja “Dbam o Zdrowie”</h3>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </Col>
                    <Col className="d-flex justify-content-end pr-0">
                        <p className="foundations__details">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </Col>
                </Row>
                <Row className="foundations__row">
                    <Col className="d-flex flex-column align-items-start pl-0">
                        <h3>Fundacja “Dbam o Zdrowie”</h3>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </Col>
                    <Col className="d-flex justify-content-end pr-0">
                        <p className="foundations__details">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </Col>
                </Row>
                <Row className="foundations__row">
                    <Col className="d-flex flex-column align-items-start pl-0">
                        <h3>Fundacja “Dbam o Zdrowie”</h3>
                        <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                    </Col>
                    <Col className="d-flex justify-content-end pr-0">
                        <p className="foundations__details">ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                    </Col>
                </Row>
            </Container>

        </section>
    );
};

export default Foundations;