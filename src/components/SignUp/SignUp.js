import React, {useState} from "react";
import './SignUp.scss';
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import Menu from "../Header/Menu/Menu";
import {Link} from 'react-router-dom';
import {translate} from "../../functions/translate";

const Schema = Yup.object().shape({
    email: Yup.string()
        .email('Email powinien być poprawny')
        .required('Pole jest wymagane'),
    password: Yup.string()
        .required("Pole jest wymagane")
        .min(6, 'Hasło powinno mieć minimum 6 znaków'),
    changepassword: Yup.string().when("password", {
        is: val => (!!(val && val.length > 0)),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Obydwa hasła powinny być takie same"
        )
    })
});

function SignUp() {
    const [errorMessage, setErrorMessage] = useState(null);

    return (
        <>
            <Menu/>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    changepassword: ""
                }}
                validationSchema={Schema}
                onSubmit={(values) => {
                    firebase.auth().createUserWithEmailAndPassword(values.email, values.password)
                        .then(res => {
                            window.location.href = 'http://localhost:3000/#/';
                        })
                        .catch(function(error) {
                        // Handle Errors here.
                        setErrorMessage(translate(error.code));
                    });
                }}
            >
                {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                    return (
                        <div className="signup__container">
                            <h2>Załóż konto</h2>
                            <img src={require('../../assets/Decoration.svg')} alt="decoration"/>
                            <form onSubmit={handleSubmit} className="signup__form">
                                <label htmlFor="email">Email</label>
                                    <input
                                        type="text"
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                    <p className="error-message">
                                        {errors.email}
                                        {errorMessage}
                                    </p>

                                <label htmlFor="password">Hasło</label>
                                <input
                                    type="password"
                                    name="password"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.password}
                                />
                                <p className="error-message">
                                    {errors.password}
                                </p>

                                <label htmlFor="password">Powtórz hasło</label>
                                <input
                                    type="password"
                                    name="changepassword"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.changepassword}
                                />
                                <p className="error-message">
                                    {errors.changepassword}
                                </p>
                                <div className="signup__buttons">
                                    <Button type="submit" variant="outline-secondary" size="lg">Załóż konto</Button>
                                    <Link to="/logowanie"><Button variant="outline-secondary" size="lg">Zaloguj się</Button></Link>
                                </div>
                            </form>
                        </div>
                    );
                }}
            </Formik>
        </>
    );
}
export default SignUp;