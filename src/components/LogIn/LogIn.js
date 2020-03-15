import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const LogIn = () => {
    return (
        <Formik
            initialValues={{ email: '', password: ''}}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .required('Required'),
            })}
            onSubmit={(values) => {
                firebase.auth().signInWithEmailAndPassword(values.email, values.password)
                    .catch(function(error) {
                    // Handle Errors here.
                    // Wyswietl w divie wiadomosc o blednym hasle
                        //TODO: 
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });
            }}
        >
            <Form>
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
                <label htmlFor="password">Hasło</label>
                <Field name="password" type="password" />
                <ErrorMessage name="password" />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default LogIn;