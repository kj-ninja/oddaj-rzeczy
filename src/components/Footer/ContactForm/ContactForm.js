import React, {useState} from 'react';
import axios from 'axios';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import './ContactForm.scss';
import Button from "react-bootstrap/Button";

const ContactForm = ({setIsSuccess}) => {

    return (
        <Formik
            initialValues={{
                name: 'Krzysztof',
                email: 'abc@xyz.pl',
                message: 'LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' +
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' +
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.' +
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
            }}
            validationSchema={Yup.object({
                name: Yup.string()
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
            onSubmit={(values) => {
                console.log(JSON.stringify(values));
                axios.post(`https://fer-api.coderslab.pl/v1/portfolio/contact`, JSON.stringify(values), {"headers": {
                        "Content-Type": "application/json"
                    }})
                    .then(res => {
                        setIsSuccess(true);
                        console.log(res);
                        console.log(res.data);
                    });
            }}
        >
            <Form className="contact-form">
                <div className="contact-form__user">
                    <div className="contact-form__name">
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <Field name="name" type="text"/>
                        <p className="error-message">
                            <ErrorMessage name="name"/>
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