import React from 'react';
import './Organizations.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Organizations = ({organizations}) => {

    return (
        <section className="organizations">
            <p className="organizations__info">{organizations[0].info}</p>
            {organizations.map((organization, i)=>{
                return (
                    <Container key={i} fluid className="organizations__container">
                        <Row className="organizations__row">
                            <Col className="d-flex flex-column align-items-start pl-0">
                                <h3>{organization.name}</h3>
                                <p>{organization.purpose}</p>
                            </Col>
                            <Col className="d-flex justify-content-end pr-0">
                                <p className="organizations__details">{organization.details}</p>
                            </Col>
                        </Row>
                    </Container>
                )
            })}
        </section>
    );
};

export default Organizations;