import React, {useState} from 'react';
import './GiveAwayStepFour.scss';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from "react-bootstrap/Button";

const GiveAwayStepFour = () => {
    const [state, setState] = useState('');
    let today = new Date().toISOString().substr(0, 10);
    const [date, setDate] = useState(today);

    const handleClickStepBack = () => {
        console.log('krok w tył');
    };

    return (
        <div className="give-away__step-four">
            <h2>Podaj adres oraz termin odbioru rzecz przez kuriera</h2>

            <Formik
                initialValues={{ street: '', city: '', email: '', postcode: '', phone: '', time: '' }}
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
                        .matches(/^[0-9]{9}$/, 'Numer telefonu musi składać się z 9 cyfr')
                        .required('Pole wymagane'),
                    time: Yup.string()
                        .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Godzina powinna być w formacie np. 10:00')
                        .required('Pole wymagane'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
                }}
            >
                <Form className="give-away__step-four--form">
                    <div className="give-away__step-four--address">
                        <h3>Adres odbioru:</h3>

                        <label htmlFor="street">Ulica</label>
                        <Field name="street" type="text"/>
                        <ErrorMessage name="street" />
                        <label htmlFor="city">Miasto</label>
                        <Field name="city" type="text" />
                        <ErrorMessage name="city" />
                        <label htmlFor="postcode">Kod pocztowy</label>
                        <Field name="postcode" type="text" />
                        <ErrorMessage name="postcode" />
                        <label htmlFor="phone">Numer telefonu</label>
                        <Field name="phone" type="text" />
                        <ErrorMessage name="phone" />
                    </div>

                    <div className="give-away__step-four--term">
                        <h3>Termin odbioru:</h3>

                        <label htmlFor="date">Data</label>
                        <input type="date" className="form-control form-control-sm" id="date"
                               onChange={(e) => setDate(e.target.value)} defaultValue={today}/>
                        <ErrorMessage name="date" />
                        <label htmlFor="time">Godzina</label>
                        <Field name="time" type="text" />
                        <ErrorMessage name="time" />
                        <label htmlFor="email">Uwagi dla kuriera</label>
                        <Field name="email" type="text" as="textarea" style={{height: '100px'}} />
                        <ErrorMessage name="email" />
                    </div>

                    <Button variant="outline-secondary" size="lg" onClick={handleClickStepBack}>Wstecz</Button>
                    <Button variant="outline-secondary" size="lg" type="submit">Dalej</Button>
                </Form>
            </Formik>


        </div>
    );
};
export default GiveAwayStepFour;
