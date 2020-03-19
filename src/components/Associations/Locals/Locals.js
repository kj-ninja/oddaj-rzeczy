import React from 'react';
import '../ Foundations/Foundations.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Locals = ({locals}) => {
    return (
        <section className="foundations">
            <p className="foundations__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
            {locals.map((local, i) => {
                return (
                    <Container key={i} fluid className="foundations__container">
                        <Row className="foundations__row">
                            <Col className="d-flex flex-column align-items-start pl-0">
                                <h3>{local.name}</h3>
                                <p>{local.purpose}</p>
                            </Col>
                            <Col className="d-flex justify-content-end pr-0">
                                <p className="foundations__details">{local.details}</p>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </section>
    );
};
export default Locals;