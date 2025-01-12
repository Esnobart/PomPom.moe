import { Formik, Form, Field } from "formik";
import { useLocation, NavLink, useNavigate } from "react-router-dom";
import { useRef, useId } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';

import { signUp } from "../../redux/user/operations";
import css from "./SignUpPage.module.css"

export default function SignUpPage() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const goBack = useRef(location?.state ?? "/characters");
    const userNickname = useId();
    const userEmail = useId();
    const userPassword = useId();
    const validation = Yup.object().shape({
        nickname: Yup.string().matches(/^[a-zA-Z0-9,.*\-<>]+$/, "Удали недопустимые символы").min(3, "Слишком короткий").max(30, "Слишком длинный").required(""),
        email: Yup.string().email("Введите корректный email").required(""),
        password: Yup.string().matches(/^[a-zA-Z0-9,.*\-<>]+$/, "Удали недопустимые символы").min(3, "Слишком короткий").max(30, "Слишком длинный").required("")
    })

    return (
        <>
        <NavLink to={goBack.current} className={css.goBackBtn}>&larr; <span>Back</span></NavLink>
        <Formik
            initialValues={{ nickname: '', email: '', password: '' }}
            validationSchema={validation}
            onSubmit={(values, actions) => {
                dispatch(signUp(values));
                actions.resetForm();
                navigate('/login?registered=true');
            }}>
                {({ isValid, dirty, errors, touched }) => (
                    <Form autoComplete="off" className={css.signUpForm}>
                        <p className={css.signUpMainText}><span className={css.signUpSpan}>Зарегестрируйтесь</span>, чтобы принять участие в жизни сайта. Вскоре будут добавлены функции чата и коментариев, а так же добавление в друзья</p>
                        <label htmlFor={userNickname} className={css.signUpLabel}>Nickname
                            <Field type="text" name="nickname" id={userNickname} className={css.signUpField}></Field>
                        </label>
                        <label htmlFor={userEmail} className={css.signUpLabel}>Email
                            <Field type="email" name="email" id={userEmail} className={css.signUpField}></Field>
                        </label>
                        <label htmlFor={userPassword} className={css.signUpLabel}>Password
                            <Field type="password" name="password" id={userPassword} className={css.signUpField}></Field>
                        </label>
                        <button type="submit" className={css.signUpSubBtn} disabled={!isValid || !dirty}>Sign Up</button>
                        <div className={css.errorContainer}>
                            {Object.keys(errors).map((key) => 
                                touched[key] ? <p key={key} className={css.errorMessage}>{errors[key]}</p> : null
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}