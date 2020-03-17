import React, {useState} from 'react';
import './GiveAwaySteps.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GiveAwayStepOne from "./GiveAwayStepOne/GiveAwayStepOne";
import GiveAwayStepTwo from "./GiveAwayStepTwo/GiveAwayStepTwo";
import GiveAwayStepThree from "../GiveAwayStepThree/GiveAwayStepThree";

const GiveAwaySteps = () => {
    const [step, setStep] = useState('stepOne');
    const [type, setType] = useState('');
    const [bags, setBags] = useState('');
    const [localization, setLocalization] = useState('');
    const [helpGroup, setHelpGroups] = useState([]);
    const [localizationSpecific, setLocalizationSpecific] = useState('');
    let result;

    console.log(helpGroup);

    if (step === 'stepOne') {
        result = <GiveAwayStepOne type={type} setType={setType} setStep={setStep}/>;
    } else if (step === 'stepTwo') {
        result = <GiveAwayStepTwo bags={bags} setBags={setBags} setStep={setStep}/>;
    } else if (step === 'stepThree') {
        result = <GiveAwayStepThree setLocalization={setLocalization}
                                    setStep={setStep}
                                    setHelpGroups={setHelpGroups}
                                    setLocalizationSpecific={setLocalizationSpecific} />;
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