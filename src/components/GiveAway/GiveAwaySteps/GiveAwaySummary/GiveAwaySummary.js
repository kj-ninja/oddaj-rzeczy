import React from 'react';
import './GiveAwaySummary.scss';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {STEP_FOUR, THANK_YOU} from "../../../../dictionaries/stepDictionary";

const GiveAwaySummary = ({type, bags, helpGroup, localization, userData, date, setStep}) => {
    const handleClickStepBack = () => {
        setStep(STEP_FOUR);
    };
    const handleClickStepForward = () => {
        setStep(THANK_YOU);
    };

    return (
        <div className="give-away__summary">
            <h2>Podsumowanie Twojej darowizny</h2>
            <h3>Oddajesz:</h3>
            <div className="give-away__summary--gives">
                <img src={require('../../../../assets/Icon-1.svg')} width="50px" alt=""/>
                {bags} worki {type}, {helpGroup.join(', ')}
            </div>
            <div className="give-away__summary--gives">
                <img src={require('../../../../assets/Icon-4.svg')} width="50px" alt=""/>
                dla lokalizacji: {localization}
            </div>
            <div className="give-away__summary--container">
                <div className="give-away__summary--address">
                    <h3>Adres odbioru:</h3>
                    <Container className="pl-0 ml-0 mr-0">
                        <Row>
                            <Col>Ulica</Col>
                            <Col>{userData.street}</Col>
                        </Row>
                        <Row>
                            <Col>Miasto</Col>
                            <Col>{userData.city}</Col>
                        </Row>
                        <Row>
                            <Col>Kod pocztowy</Col>
                            <Col className="d-flex align-items-center">{userData.postcode}</Col>
                        </Row>
                        <Row>
                            <Col>Numer telefonu</Col>
                            <Col className="d-flex align-items-center">{userData.phone}</Col>
                        </Row>
                    </Container>
                </div>
                <div className="give-away__summary--term">
                    <h3>Termin odbioru:</h3>
                    <Container className="pl-0 ml-0 mr-0">
                        <Row>
                            <Col>Data</Col>
                            <Col>{date}</Col>
                        </Row>
                        <Row>
                            <Col>Godzina</Col>
                            <Col>{userData.time}</Col>
                        </Row>
                        <Row>
                            <Col>Uwagi dla kuriera</Col>
                            <Col>{userData.notes}</Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Button variant="outline-secondary" size="lg" onClick={handleClickStepBack}>Wstecz</Button>
            <Button variant="outline-secondary" size="lg" onClick={handleClickStepForward} >Zatwierdź</Button>
        </div>
    );
};
export default GiveAwaySummary;