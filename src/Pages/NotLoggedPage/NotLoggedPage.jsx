import { NavLink } from "react-router-dom";
import { useRef } from "react";

import css from "./NotLoggedPage.module.css";

export const NotLoggedPage = () => {
    const goBack = useRef(location?.state ?? "/characters");

    return (
        <div>
            <NavLink to={goBack.current} className={css.goBackBtn}>
                &larr; <span>Back</span>
            </NavLink>
            <h1>Кто-то буквально взял на себя роль Безымянного</h1>
            <p>
                Зарегестрируйтесь или войдите в свой аккаунт чтобы войти в
                профиль.
            </p>
        </div>
    );
};
