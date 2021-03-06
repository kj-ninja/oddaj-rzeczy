import React, {useState} from 'react';
import './GiveAwayStepOne.scss';
import Button from "react-bootstrap/Button";
import {STEP_TWO} from "../../../../dictionaries/stepDictionary";

const GiveAwayStepOne = ({type, setType, setStep}) => {
    const [isError, setIsError] = useState(false);

    const handleClickStepOne = () => {
        if (type.length === 0) {
            setIsError(true);
        } else {
            setIsError(false);
            setStep(STEP_TWO);
        }
    };

    const handleRadio = (e) => {
        setType(e.target.value);
        setIsError(false);
    };

    return (
        <div className="give-away__step-one">
            <h2>Zaznacz co chcesz oddać:</h2>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio1" className="custom-control-input" checked={type === 'ubrań w dobrym stanie'}  value='ubrań w dobrym stanie' onChange={(e)=>handleRadio(e)} />
                <label className="custom-control-label" htmlFor="customRadio1">
                    ubrania, które nadają się do ponownego użycia
                </label>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio2" className="custom-control-input" checked={type === 'ubrań, do wyrzucenia'} value='ubrań, do wyrzucenia' onChange={(e)=>handleRadio(e)} />
                <label className="custom-control-label" htmlFor="customRadio2">
                    ubrania, do wyrzucenia
                </label>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio3" className="custom-control-input" checked={type === 'zabawek'} value='zabawek' onChange={(e)=>handleRadio(e)} />
                <label className="custom-control-label" htmlFor="customRadio3">
                    zabawki
                </label>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio4" className="custom-control-input" checked={type === 'książek'} value='książek' onChange={(e)=>handleRadio(e)} />
                <label className="custom-control-label" htmlFor="customRadio4">
                    książki
                </label>
            </div>
            <div className="custom-control custom-radio">
                <input type="radio" id="customRadio5" className="custom-control-input" checked={type === 'Inne'} value='Inne' onChange={(e)=>handleRadio(e)} />
                <label className="custom-control-label" htmlFor="customRadio5">
                    Inne
                </label>
            </div>
            {isError ? <p>Musisz wybrać jakieś pole</p> : null}
            <Button variant="outline-secondary" size="lg" onClick={handleClickStepOne}>Dalej</Button>
        </div>
    );
};
export default GiveAwayStepOne;