import Notiflix from "notiflix";

import css from "./Header.module.css"
import { DataBase } from "../DataBase/DataBase";
import { GuidesModal } from "../GuidesModal/GuidesModal";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
    const [firstModal, setFirstModal] = useState(false);
    const [secondModal, setSecondModal] = useState(false);

    return (
        <header className={css.headerContainer}>
            <nav className={css.navigationContainer}>
                <div className={css.headerLogo}>
                    <NavLink to="/" className={css.NavToMain}>
                        <h1>PomPom.moe</h1>
                        <p>V1</p>
                    </NavLink>
                    <div className={css.headerProfileForPhone}>
                        <p onClick={() => Notiflix.Notify.info("В разработке до V2")} className={css.headerUserWelcomeText}>С возвращением, Esna</p>
                        <img src={"https://i.imgur.com/TVL904n.png"} className={css.headerProfileIcon} onClick={() => Notiflix.Notify.info("В разработке до V2")}></img>
                    </div>
                </div>
                <ul className={css.navigationList}>
                    <li>
                        <div className={css.firstLi} onClick={() => setFirstModal(!firstModal)}>
                            <p className={css.navigationListText}>База данных</p>
                            <div className={css.dataBase} style={{ display: firstModal ? 'block' : undefined }}>
                                <div className={css.wrapper}>
                                    <div className={css.vector}></div>
                                    <div className={css.vectorInner}></div>
                                </div>
                                <DataBase />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={css.secondLi} onClick={() => setSecondModal(!secondModal)}>
                            <p className={css.navigationListText}>Гайды на...</p>
                            <div className={css.guidesModal} style={{ display: secondModal ? 'block' : undefined }}>
                                <div className={css.wrapper}>
                                    <div className={css.vector}></div>
                                    <div className={css.vectorInner}></div>
                                </div>
                                <GuidesModal />
                            </div>
                        </div>
                    </li>
                    <li className={css.navigationListText} onClick={() => Notiflix.Notify.info("Идеи мне в дискорд @esnobart")}>Продолжение следует</li>
                </ul>
                <div className={css.headerProfileForDesctop}>
                    <p onClick={() => Notiflix.Notify.info("В разработке до V2")} className={css.headerUserWelcomeText}>С возвращением, Esna</p>
                    <img src={"https://i.imgur.com/TVL904n.png"} className={css.headerProfileIcon} onClick={() => Notiflix.Notify.info("В разработке до V2")}></img>
                </div>
           </nav>
        </header>
    )
}