import React from 'react';
import '../ Foundations/Foundations.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Organizations = ({organizations}) => {

    return (
        <section className="foundations">
            <p className="foundations__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation.</p>
            {organizations.map((organization, i) => {
                return (
                    <Container key={i} fluid className="foundations__container">
                        <Row className="foundations__row">
                            <Col className="d-flex flex-column align-items-start pl-0">
                                <h3>{organization.name}</h3>
                                <p>{organization.purpose}</p>
                            </Col>
                            <Col className="d-flex justify-content-end pr-0">
                                <p className="foundations__details">{organization.details}</p>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </section>
    );
};
export default Organizations;