import React from 'react';
import './Foundations.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Foundations = ({foundations}) => {

    return (
        <section className="foundations">
            <p className="foundations__info">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
                współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
            {foundations.map((foundation, i) => {
                return (
                    <Container key={i} fluid className="foundations__container">
                        <Row className="foundations__row">
                            <Col className="d-flex flex-column align-items-start pl-0">
                                <h3>{foundation.name}</h3>
                                <p>{foundation.purpose}</p>
                            </Col>
                            <Col className="d-flex justify-content-end pr-0">
                                <p className="foundations__details">{foundation.details}</p>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </section>
    );
};
export default Foundations;