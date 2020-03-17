import React, {useState} from 'react';
import './GiveAwaySteps.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GiveAwayStepOne from "./GiveAwayStepOne/GiveAwayStepOne";
import GiveAwayStepTwo from "./GiveAwayStepTwo/GiveAwayStepTwo";

const GiveAwaySteps = () => {
    const [type, setType] = useState('');
    const [bags, setBags] = useState('');
    const [step, setStep] = useState('stepOne');
    let result;

    if (step === 'stepOne') {
        result = <GiveAwayStepOne type={type} setType={setType} setStep={setStep}/>;
    } else if (step === 'stepTwo') {
        result = <GiveAwayStepTwo bags={bags} setBags={setBags} setStep={setStep}/>;
    }

    return (
        <div className="give-away__steps">
            <Container className="give-away__steps--container">
                <Row>
                    <Col>
                        <h4>Krok 1/4</h4>
                    </Col>
                    <Col>
                    </Col>
                </Row>
                {result}
            </Container>
        </div>
    );
};
export default GiveAwaySteps;