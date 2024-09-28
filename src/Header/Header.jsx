import Notiflix from "notiflix";

import css from "./Header.module.css"
import { DataBase } from "../DataBase/DataBase";
import { GuidesModal } from "../GuidesModal/GuidesModal";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className={css.headerContainer}>
            <nav className={css.navigationContainer}>
                <div className={css.headerLogo}>
                    <NavLink to="/" className={css.NavToMain}>
                        <h1>PomPom.moe</h1>
                        <p>V1</p>
                    </NavLink>
                </div>
                <ul className={css.navigationList}>
                    <li tabIndex="0">
                        <div className={css.firstLi}>
                            <p className={css.navigationListText}>База данных</p>
                            <div className={css.dataBase}>
                                <div className={css.wrapper}>
                                    <div className={css.vector}></div>
                                    <div className={css.vectorInner}></div>
                                </div>
                                <DataBase />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={css.secondLi}>
                            <p>Гайды на...</p>
                            <div className={css.guidesModal}>
                                <div className={css.wrapper}>
                                    <div className={css.vector}></div>
                                    <div className={css.vectorInner}></div>
                                </div>
                                <GuidesModal />
                            </div>
                        </div>
                    </li>
                    <li onClick={() => Notiflix.Notify.info("Идеи мне в дискорд @esnobart")}>Продолжение следует</li>
                </ul>
           </nav>
           <div className={css.headerProfile}>
                <p onClick={() => Notiflix.Notify.info("В разработке до V2")} className={css.headerUserWelcomeText}>С возвращением, Esna</p>
                <img src={"/img/Character_Aventurine_Icon.png"} className={css.headerProfileIcon} onClick={() => Notiflix.Notify.info("В разработке до V2")}></img>
           </div>
        </header>
    )
}