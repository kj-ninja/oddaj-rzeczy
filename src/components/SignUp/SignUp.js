import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Schema = Yup.object().shape({
    email: Yup.string()
        .email('Email powinien być poprawny')
        .required('Pole wymagane'),
    password: Yup.string().required("This field is required"),
    changepassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
        )
    })
});

function SignUp() {
    return (
        <Formik
            initialValues={{
                email: "",
                password: "",
                changepassword: ""
            }}
            validationSchema={Schema}
            onSubmit={(values) => {;
                firebase.auth().createUserWithEmailAndPassword(values.email, values.password).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
            }}
        >
            {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                            />
                            <span className="error" style={{color: "red"}}>
                                {errors.email}
                            </span>
                        <label htmlFor="passowrd">Password</label>
                        <input
                            type="password"
                            name="password"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                        />
                        <span className="error" style={{ color: "red" }}>
                            {errors.password}
                        </span>

                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            name="changepassword"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.changepassword}
                        />
                        <span className="error" style={{ color: "red" }}>
                            {errors.changepassword}
                        </span>
                        <Button type="submit" variant="outline-secondary" size="lg">Wyślij</Button>
                    </form>
                );
            }}
        </Formik>
    );
}

export default SignUp;