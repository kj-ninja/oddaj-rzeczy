import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './ContactForm.scss';
import Button from "react-bootstrap/Button";

const ContactForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: 'Krzysztof',
                email: 'abc@xyz.pl',
                message: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' +
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' +
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' +
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .matches(/^\S*$/, 'Imię powinno być jednym wyrazem')
                    .max(15, 'Must be 15 characters or less')
                    .required('Pole wymagane'),
                email: Yup.string()
                    .email('Email powinien być poprawny')
                    .required('Pole wymagane'),
                message: Yup.string()
                    .min(120, 'Wiadomość musi mieć conajmniej 120 znaków')
                    .required('Pole wymagane'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form className="contact-form">
                <div className="contact-form__user">
                    <div className="contact-form__name">
                        <label htmlFor="firstName">Wpisz swoje imię</label>
                        <Field name="firstName" type="text"/>
                        <p className="error-message">
                            <ErrorMessage name="firstName"/>
                        </p>
                    </div>
                    <div className="contact-form__email">
                        <label htmlFor="email">Wpisz swój email</label>
                        <Field name="email" type="email"/>
                        <p className="error-message">
                            <ErrorMessage name="email"/>
                        </p>
                    </div>
                </div>
                <label htmlFor="message">Wpisz swoją wiadomość</label>
                <Field as="textarea" name="message" type="text" style={{height: '107px'}}/>
                <p className="error-message">
                    <ErrorMessage name="message"/>
                </p>
                <Button type="submit" variant="outline-secondary" size="lg">Wyślij</Button>
                {/*<button type="submit">Submit</button>*/}
            </Form>
        </Formik>
    );
};

export default ContactForm;