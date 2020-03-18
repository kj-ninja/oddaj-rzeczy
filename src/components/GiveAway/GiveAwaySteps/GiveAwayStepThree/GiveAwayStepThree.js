import React, {useState} from 'react';
import './GiveAwayStepThree.scss';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const GiveAwayStepThree = ({setLocalization, setStep, setHelpGroups, setLocalizationSpecific, localizationSpecific, localization}) => {
    const [checkboxesError, setCheckboxesError] = useState(false);
    const [localizationError, setLocalizationError] = useState(false);
    const [firstCheck, setFirstCheck] = useState('');
    const [secondCheck, setSecondCheck] = useState('');
    const [thirdCheck, setThirdCheck] = useState('');
    const [fourthCheck, setFourthCheck] = useState('');
    const [fifthCheck, setFifthCheck] = useState('');

    const handleClickStepBack = () => {
        setStep('stepTwo');
    };
    const handleClickStepForward = () => {
        let result = [];

        if (firstCheck.length > 1) {
            result.push(firstCheck);
        }
        if (secondCheck.length > 1) {
            result.push(secondCheck);
        }
        if (thirdCheck.length > 1) {
            result.push(thirdCheck);
        }
        if (fourthCheck.length > 1) {
            result.push(fourthCheck);
        }
        if (fifthCheck.length > 1) {
            result.push(fifthCheck);
        }

        if (result.length === 0) {
            return setCheckboxesError(true);
        }
        if (localization.length < 1 && localizationSpecific.length < 1) {
            return setLocalizationError(true);
        }
        else {
            setStep('stepFour');
            setHelpGroups(result);
        }
    };
    const handleSelect = (e) => {
        setLocalization(e.target.value);
        setLocalizationError(false);

    };
    const handleCheckbox = (e) => {
        if (e.target.name === 'dzieciom' && e.target.checked) {
            setFirstCheck('dzieciom');
            setCheckboxesError(false);
        } else if (e.target.name === 'dzieciom' && !e.target.checked) {
            setFirstCheck('');
        }
        if (e.target.name === 'samotnym matkom' && e.target.checked) {
            setSecondCheck('samotnym matkom');
            setCheckboxesError(false);
        } else if (e.target.name === 'samotnym matkom' && !e.target.checked) {
            setSecondCheck('');
        }
        if (e.target.name === 'bezdomnym' && e.target.checked) {
            setThirdCheck('bezdomnym');
            setCheckboxesError(false);
        } else if (e.target.name === 'bezdomnym' && !e.target.checked) {
            setThirdCheck('');
        }
        if (e.target.name === 'niepełnosprawnym' && e.target.checked) {
            setFourthCheck('niepełnosprawnym');
            setCheckboxesError(false);
        } else if (e.target.name === 'niepełnosprawnym' && !e.target.checked) {
            setFourthCheck('');
        }
        if (e.target.name === 'osobom starszym' && e.target.checked) {
            setFifthCheck('osobom starszym');
            setCheckboxesError(false);
        } else if (e.target.name === 'osobom starszym' && !e.target.checked) {
            setFifthCheck('');
        }
    };

    return (
        <div className="give-away__step-three">
            <Form>
                <Form.Group className="step-three__form" controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Lokalizacja:</Form.Label>
                    <Form.Control as="select" size="lg" onChange={(e)=>handleSelect(e)} value={localization}>
                        <option value="">wybierz</option>
                        <option>Poznań</option>
                        <option>Warszawa</option>
                        <option>Kraków</option>
                        <option>Wrocław</option>
                        <option>Katowice</option>
                    </Form.Control>
                </Form.Group>

                <h3>Komu chcesz pomóc</h3>
                <div className="custom-control custom-checkbox step-three__checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" name="dzieciom" onChange={(e)=>handleCheckbox(e)}/>
                        <label className="custom-control-label" htmlFor="customCheck1">
                            dzieciom
                        </label>
                </div>
                <div className="custom-control custom-checkbox step-three__checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" name="samotnym matkom" onChange={(e)=>handleCheckbox(e)}/>
                    <label className="custom-control-label" htmlFor="customCheck2">
                        samotnym matkom
                    </label>
                </div>
                <div className="custom-control custom-checkbox step-three__checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck3" name="bezdomnym" onChange={(e)=>handleCheckbox(e)}/>
                    <label className="custom-control-label" htmlFor="customCheck3">
                        bezdomnym
                    </label>
                </div>
                <div className="custom-control custom-checkbox step-three__checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck4" name="niepełnosprawnym" onChange={(e)=>handleCheckbox(e)}/>
                    <label className="custom-control-label" htmlFor="customCheck4">
                        niepełnosprawnym
                    </label>
                </div>
                <div className="custom-control custom-checkbox step-three__checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck5" name="osobom starszym" onChange={(e)=>handleCheckbox(e)}/>
                    <label className="custom-control-label" htmlFor="customCheck5">
                        osobom starszym
                    </label>
                </div>
                {checkboxesError ? <p style={{color: 'red', marginTop: '5px'}}>Musisz wybrać minimum jedno pole</p> : null}
                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                <input type="text" className="give-away__step-three--optional" onChange={(e)=>setLocalizationSpecific(e.target.value)} />
                {localizationError ? <p style={{color: 'red', marginTop: '5px'}}>Musisz wybrać lokalizację lub wpisac konkretną organizację</p> : null}
            </Form>
            <Button variant="outline-secondary" size="lg" onClick={handleClickStepBack}>Wstecz</Button>
            <Button variant="outline-secondary" size="lg" onClick={handleClickStepForward} >Dalej</Button>
        </div>
    );
};
export default GiveAwayStepThree;