import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation, NavLink } from "react-router-dom";
import { useRef, useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

import { logIn } from "../../redux/user/operations";
import css from "./LogInPage.module.css"

export default function SignUpPage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const goBack = useRef(location?.state ?? "/characters");
    const userIdentify = useId();
    const userPassword = useId();
    const validation = Yup.object().shape({
        identify: Yup.string().matches(/^[a-zA-Z0-9,.*@\-<>]+$/, "Удали недопустимые символы").min(3, "Слишком короткий").max(30, "Слишком длинный").required("Никнейм обязателен"),
        password: Yup.string().matches(/^[a-zA-Z0-9,.*\-<>]+$/, "Удали недопустимые символы").min(3, "Слишком короткий").max(30, "Слишком длинный").required("Пароль обязателен")
    })

    return (
        <>
        <NavLink to={goBack.current} className={css.goBackBtn}>&larr; <span>Back</span></NavLink>
        <Formik
            initialValues={{ identify: '', password: '' }}
            validationSchema={validation}
            onSubmit={(values, actions) => {
                dispatch(logIn(values));
                actions.resetForm();
            }}>
                <Form autoComplete="off" className={css.logInForm}>
                    <p className={css.logInMainText}>Добро пожаловать</p>
                    <label htmlFor={userIdentify} className={css.logInLabel}>Nickname or Email
                        <Field type="text" name="identify" id={userIdentify} className={css.logInField}></Field>
                        <ErrorMessage name="identify" component="span" />
                    </label>
                    <label htmlFor={userPassword} className={css.logInLabel}>Password
                        <Field type="password" name="password" id={userPassword} className={css.logInField}></Field>
                        <ErrorMessage name="password" component="span" />
                    </label>
                    <button type="submit" className={css.logInSubBtn}>Log In</button>
                </Form>
            </Formik>
        </>
    )
}