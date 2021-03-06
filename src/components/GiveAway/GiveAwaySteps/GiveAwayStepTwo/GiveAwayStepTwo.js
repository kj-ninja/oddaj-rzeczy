import React, {useState} from 'react';
import './GiveAwayStepTwo.scss';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {STEP_ONE, STEP_THREE} from "../../../../dictionaries/stepDictionary";

const GiveAwayStepTwo = ({bags, setBags, setStep}) => {
    const [isError, setIsError] = useState(false);

    const handleClickStepBack = () => {
        setStep(STEP_ONE);
    };

    const handleClickStepForward = () => {
        if (bags.length === 0) {
            setIsError(true);
        } else {
            setIsError(false);
            setStep(STEP_THREE);
        }
    };

    return (
        <div className="give-away__step-two">
            <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h2>
            <Form>
                <Form.Group className="step-two__form" controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Liczba 60l worków:</Form.Label>
                    <Form.Control as="select" size="lg" onChange={(e)=>setBags(e.target.value)} value={bags}>
                        <option value="">wybierz</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            {isError ? <p>Musisz wybrać jakieś pole</p> : null}
            <Button variant="outline-secondary" size="lg" onClick={handleClickStepBack}>Wstecz</Button>
            <Button variant="outline-secondary" size="lg" onClick={handleClickStepForward}>Dalej</Button>
        </div>
    );
};
export default GiveAwayStepTwo;