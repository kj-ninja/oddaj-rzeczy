import React from 'react';
import './SimpleSteps.scss';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const SimpleSteps = () => {
    return (
        <>
            <div className="simple-steps__header">
                <h2>Wystarczą 4 proste kroki</h2>
                <img src={require("../../assets/Decoration.svg")} alt=""/>
            </div>
            <div className="simple-steps__background">
                <Container className="simple-steps__container">
                    <Row>
                        <Col xs={6} lg={3}>
                            <div className="simple-steps__column">
                                <img src={require("../../assets/Icon-1.svg")} alt="icon"/>
                                <div>Wybierz rzeczy</div>
                                <span />
                                <p>ubrania, zabawki, sprzęt i inne</p>
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="simple-steps__column">
                                <img src={require("../../assets/Icon-2.svg")} alt="icon"/>
                                <div>Spakuj je</div>
                                <span />
                                <p>skorzystaj z worków na śmieci</p>
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="simple-steps__column">
                                <img src={require("../../assets/Icon-3.svg")} alt="icon"/>
                                <div>Zdecyduj komu chcesz pomóc</div>
                                <span />
                                <p>wybierz zaufane miejsce</p>
                            </div>
                        </Col>
                        <Col xs={6} lg={3}>
                            <div className="simple-steps__column">
                                <img src={require("../../assets/Icon-4.svg")} alt="icon"/>
                                <div>Zamów kuriera</div>
                                <span />
                                <p>kurier przyjedzie w dogodnym terminie</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="simple-steps__button-container">
                <Button variant="outline-secondary" size="lg">ODDAJ RZECZY</Button>
            </div>
        </>
    );
};

export default SimpleSteps;