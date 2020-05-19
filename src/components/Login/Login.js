import React, {useState} from 'react';
import './Login.scss';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Menu from "../Header/Menu/Menu";
import Button from "react-bootstrap/Button";
import {translate} from '../../functions/translate';

const Login = (props) => {
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <>
            <Menu/>
            <div className="login__container">
                <h2>Zaloguj się</h2>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Zły adres email')
                            .required('Pole wymagane'),
                        password: Yup.string()
                            .required('Pole wymagane')
                    })}
                    onSubmit={(values) => {
                        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                            .then(res => {
                                props.history.replace('/')
                            })
                            .catch(function (error) {
                                setErrorMessage(translate(error.code));
                            });
                    }}
                >
                    <Form className="login__form">
                        <label htmlFor="email">Email</label>
                        <Field name="email" type="email" id="email"/>
                        <p className="error-message">
                            <ErrorMessage name="email"/>
                        </p>
                        <label htmlFor="password">Hasło</label>
                        <Field name="password" type="password" id="password"/>
                        <p className="error-message">
                            <ErrorMessage name="password"/>
                            {errorMessage}
                        </p>
                        <div className="login__buttons">
                            <Button type="submit" variant="outline-secondary" size="lg">Zaloguj się</Button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
};
export default Login;