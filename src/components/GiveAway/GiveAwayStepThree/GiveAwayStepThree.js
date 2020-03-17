import React, {useState} from 'react';
import './GiveAwayStepThree.scss';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const GiveAwayStepThree = ({setLocalization, setStep, setHelpGroups, setLocalizationSpecific}) => {
    const [isError, setIsError] = useState('');

    const handleClickStepTwo = () => {
        setStep('stepTwo');
    };

    // const handleClickStepTwo = () => {
    //     if (bags.length === 0) {
    //         setIsError(true);
    //     } else {
    //         setIsError(false);
    //         setStep('stepThree');
    //     }
    // };

    const handleCheckbox = (e) => {
        console.log(e.target.checked);
    };

    return (
        <div className="give-away__step-three">
            <Form>
                <Form.Group className="step-two__form" controlId="exampleForm.SelectCustomSizeLg">
                    <Form.Label>Lokalizacja:</Form.Label>
                    <Form.Control as="select" size="lg" onChange={(e)=>setLocalization(e.target.value)}>
                        <option value="">wybierz</option>
                        <option>Poznań</option>
                        <option>Warszawa</option>
                        <option>Kraków</option>
                        <option>Wrocław</option>
                        <option>Katowice</option>
                    </Form.Control>
                </Form.Group>

                <h3>Komu chcesz pomóc</h3>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" onChange={(e)=>handleCheckbox(e)} value={}/>
                        <label className="custom-control-label" htmlFor="customCheck1">
                            dzieciom
                        </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                    <label className="custom-control-label" htmlFor="customCheck2">
                        samotnym matkom
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck3" />
                    <label className="custom-control-label" htmlFor="customCheck3">
                        bezdomnym
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck4" />
                    <label className="custom-control-label" htmlFor="customCheck4">
                        niepełnosprawnym
                    </label>
                </div>
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck5" />
                    <label className="custom-control-label" htmlFor="customCheck5">
                        osobom starszym
                    </label>
                </div>
                <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                <input type="text" className="give-away__step-three--optional"/>
            </Form>
            <Button variant="outline-secondary" size="lg" onClick={handleClickStepTwo}>Wstecz</Button>
            <Button variant="outline-secondary" size="lg">Dalej</Button>
        </div>
    );
};
export default GiveAwayStepThree;