import { Formik, Form, Field, ErrorMessage } from "formik";
import { useLocation, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useRef, useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

import { logIn } from "../../redux/user/operations";
import css from "./LogInPage.module.css"

export default function SignUpPage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const registered = searchParams.get('registered');
    const verified = searchParams.get('verified')
    const goBack = useRef(location?.state ?? "/characters");
    const userIdentify = useId();
    const userPassword = useId();
    const validation = Yup.object().shape({
        identify: Yup.string().matches(/^[a-zA-Z0-9,.*@\-<>]+$/, "Удали недопустимые символы").min(3, "Слишком короткий").max(30, "Слишком длинный").required(""),
        password: Yup.string().matches(/^[a-zA-Z0-9,.*\-<>]+$/, "Удали недопустимые символы").min(3, "Слишком короткий").max(30, "Слишком длинный").required("")
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
                navigate('/');
            }}>
                {({ isValid, dirty, errors, touched }) => (
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
                        <button type="submit" className={css.logInSubBtn} disabled={!isValid || !dirty}>Log In</button>
                        <div className={css.errorContainer}>
                            {Object.keys(errors).map((key) => 
                                touched[key] ? <p key={key} className={css.errorMessage}>{errors[key]}</p> : null
                            )}
                        </div>
                        {registered && (
                            <div>
                                <p>Вы успешно зарегестрировались! Подтвердите свою почту чтобы активировать свой аккаунт.</p>
                            </div>
                        )}
                        {verified && (
                            <div>
                                <p>Вы успешно подтвердили свою почту! Теперь вы можете войти в свой аккаунт.</p>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </>
    )
}