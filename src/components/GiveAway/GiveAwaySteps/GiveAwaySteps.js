import React, {useState} from 'react';
import './GiveAwaySteps.scss';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import GiveAwayStepOne from "./GiveAwayStepOne/GiveAwayStepOne";
import GiveAwayStepTwo from "./GiveAwayStepTwo/GiveAwayStepTwo";
import GiveAwayStepThree from "./GiveAwayStepThree/GiveAwayStepThree";
import GiveAwayStepFour from "./GiveAwayStepFour/GiveAwayStepFour";
import GiveAwaySummary from "./GiveAwaySummary/GiveAwaySummary";
import GiveAwayWarning from "../GiveAwayWarning/GiveAwayWarning";
import GiveAwayThankYou from "./GiveAwayThankYou/GiveAwayThankYou";

const GiveAwaySteps = () => {
    let today = new Date().toISOString().substr(0, 10);
    const [step, setStep] = useState('stepOne');
    const [type, setType] = useState('');
    const [bags, setBags] = useState('');
    const [localization, setLocalization] = useState('');
    const [helpGroup, setHelpGroups] = useState([]);
    const [localizationSpecific, setLocalizationSpecific] = useState('');
    const [date, setDate] = useState(today);
    const [userData, setUserData] = useState({});
    let result;
    let stepNumber;
    let warningResult = <GiveAwayWarning step={step} />

    if (step === 'stepOne') {
        result = <GiveAwayStepOne type={type} setType={setType} setStep={setStep}/>;
        stepNumber = <h4>Krok 1/4</h4>
    } else if (step === 'stepTwo') {
        result = <GiveAwayStepTwo bags={bags} setBags={setBags} setStep={setStep}/>;
        stepNumber = <h4>Krok 2/4</h4>
    } else if (step === 'stepThree') {
        result = <GiveAwayStepThree setLocalization={setLocalization}
                                    setStep={setStep}
                                    setHelpGroups={setHelpGroups}
                                    setLocalizationSpecific={setLocalizationSpecific}
                                    localization={localization}
                                    localizationSpecific={localizationSpecific} />;
        stepNumber = <h4>Krok 3/4</h4>
    } else if (step === 'stepFour') {
        result = <GiveAwayStepFour setUserData={setUserData} setDate={setDate} setStep={setStep} userData={userData}/>;
        stepNumber = <h4>Krok 4/4</h4>
    } else if (step === 'summary') {
        result = <GiveAwaySummary type={type}
                                  bags={bags}
                                  helpGroup={helpGroup}
                                  localization={localization}
                                  userData={userData}
                                  date={date}
                                  setStep={setStep} />;
        stepNumber = null;
    } else if (step === 'thankYou') {
        result = <GiveAwayThankYou/>;
        stepNumber = null;
    }

    if (step === 'summary' || step === 'thankYou') {
        warningResult = null
    }

    return (
        <>
            {warningResult}
            <div className="give-away__steps">
                <Container className="give-away__steps--container">
                    <Row>
                        <Col>
                            {stepNumber}
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                    {result}
                </Container>
            </div>
        </>
    );
};
export default GiveAwaySteps;