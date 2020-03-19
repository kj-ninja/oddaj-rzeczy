import React from 'react';
import './GiveAwayStepFour.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GiveAwayStepFour = ({setUserData, setDate, setStep}) => {
    let today = new Date().toISOString().substr(0, 10);

    const handleClickStepBack = () => {
        setStep('stepThree');
    };

    return (
        <div className="give-away__step-four">
            <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>
            <Formik
                initialValues={{ street: '', city: '', postcode: '', phone: '', time: '', notes: '' }}
                validationSchema={Yup.object({
                    street: Yup.string()
                        .min(2, 'Minimum 2 znaki')
                        .required('Pole wymagane'),
                    city: Yup.string()
                        .min(2, 'Minimum 2 znaki')
                        .required('Pole wymagane'),
                    postcode: Yup.string()
                        .matches(/\d{2}-\d{3}/, 'Kod pocztowy powinien być w formacie np. 12-345')
                        .required('Pole wymagane'),
                    phone: Yup.string()
                        .matches(/^[0-9]{9}$/, 'Numer telefonu musi składać się z 9 cyfr bez odstępów')
                        .required('Pole wymagane'),
                    time: Yup.string()
                        .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Godzina powinna być w formacie np. 10:00')
                        .required('Pole wymagane'),
                })}
                onSubmit={(values) => {
                    setUserData(values);
                    setStep('summary');
                }}
            >
                <Form className="give-away__step-four--form">
                    <div className="give-away__step-four--address">
                        <h3>Adres odbioru:</h3>
                            <Container>
                                <Row>
                                    <Col xs={4} className="d-flex align-items-center pl-0">
                                        <label htmlFor="street">Ulica</label>
                                    </Col>
                                    <Col xs={8} className="d-flex align-items-center pl-0">
                                        <Field name="street" type="text" />
                                    </Col>
                                    <p className="step-four__error">
                                        <ErrorMessage name="street" />
                                    </p>
                                </Row>
                                <Row>
                                    <Col xs={4} className="d-flex align-items-center pl-0">
                                        <label htmlFor="city">Miasto</label>
                                    </Col>
                                    <Col xs={8} className="d-flex align-items-center pl-0">
                                        <Field name="city" type="text" />
                                    </Col>
                                    <p className="step-four__error">
                                        <ErrorMessage name="city" />
                                    </p>
                                </Row>
                                <Row>
                                    <Col xs={4} className="d-flex align-items-center pl-0">
                                        <label htmlFor="postcode">Kod pocztowy</label>
                                    </Col>
                                    <Col xs={8} className="d-flex align-items-center pl-0">
                                        <Field name="postcode" type="text" />
                                    </Col>
                                    <p className="step-four__error">
                                        <ErrorMessage name="postcode" />
                                    </p>
                                </Row>
                                <Row>
                                    <Col xs={4} className="d-flex align-items-center pl-0">
                                        <label htmlFor="phone">Numer telefonu</label>
                                    </Col>
                                    <Col xs={8} className="d-flex align-items-center pl-0">
                                        <Field name="phone" type="text" />
                                    </Col>
                                    <p className="step-four__error">
                                    <   ErrorMessage name="phone" />
                                    </p>
                                </Row>
                            </Container>
                    </div>
                    <div className="give-away__step-four--term">
                        <h3>Termin odbioru:</h3>
                        <Container>
                            <Row>
                                <Col className="pl-0">
                                    <label htmlFor="date">Data</label>
                                </Col>
                                <Col>
                                    <input type="date" className="form-control form-control-sm" id="date"
                                            onChange={(e)=>setDate(e.target.value)} defaultValue={today}/>
                                </Col>
                                <p className="step-four__error">
                                    <ErrorMessage name="date" />
                                </p>
                            </Row>
                            <Row>
                                <Col className="pl-0">
                                    <label htmlFor="time">Godzina</label>
                                </Col>
                                <Col>
                                    <Field name="time" type="text" />
                                </Col>
                                <p className="step-four__error--time">
                                    <ErrorMessage name="time" />
                                </p>
                            </Row>
                            <Row>
                                <Col className="pl-0">
                                    <label htmlFor="notes">Uwagi<br/> dla kuriera</label>
                                </Col>
                                <Col>
                                    <Field name="notes" type="text" as="textarea" style={{height: '100px'}} />
                                </Col>
                                <p className="step-four__error">
                                    <ErrorMessage name="notes" />
                                </p>
                            </Row>
                        </Container>
                    </div>
                    <Button variant="outline-secondary" size="lg" onClick={handleClickStepBack}>Wstecz</Button>
                    <Button variant="outline-secondary" size="lg" type="submit">Dalej</Button>
                </Form>
            </Formik>
        </div>
    );
};
export default GiveAwayStepFour;
