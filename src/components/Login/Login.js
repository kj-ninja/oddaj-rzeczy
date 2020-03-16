import React, {useState} from 'react';
import './Login.scss';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Menu from "../Header/Menu/Menu";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
import {translate} from '../../functions/translate';

const Login = () => {
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <>
            <Menu/>
            <div className="login__container">
                <h2>Zaloguj się</h2>
                <img src={require('../../assets/Decoration.svg')} alt=""/>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email('Invalid email address')
                            .required('Required'),
                        password: Yup.string()
                            .required('Required')
                    })}
                    onSubmit={(values) => {

                        firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                            .then(res => {
                                console.log('zalogowano');
                                // TODO: to jest kupa jak to zmienic na Redirect z React router dom ????
                                window.location.href = 'http://localhost:3000/#/';
                                // return <Redirect exact to="/" />
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
                            <Link to="/rejestracja"><Button variant="outline-secondary" size="lg">Załóż
                                konto</Button></Link>
                        </div>
                    </Form>
                </Formik>
            </div>
        </>
    );
};

export default Login;