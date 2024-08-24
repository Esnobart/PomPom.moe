import { useState } from "react"
import Notiflix from "notiflix";

import css from "./Header.module.css"
import { DataBase } from "../DataBase/DataBase";
import { GuidesModal } from "../GuidesModal/GuidesModal";

export const Header = () => {
    const [baseIsOpen, setBaseIsOpen] = useState(false);
    const [guidesIsOpen, setGuidesIsOpen] = useState(false);

    const openBaseModal = () => {
        setBaseIsOpen(true);
    }

    const closeBaseModal = () => {
        setBaseIsOpen(false)
    }

    const openGuidesModal = () => {
        setGuidesIsOpen(true)
    }

    const closeGuidesModal = () => {
        setGuidesIsOpen(false)
    }

    const Notidication = () => {
        Notiflix.Notify.info("В разработке до V2")
    }

    const Notidication2 = () => {
        Notiflix.Notify.info("Идеи мне в дискорд @esnobart")
    }

    return (
        <header className={css.headerContainer}>
            <nav className={css.navigationContainer}>
            <div className={css.headerLogoOuterContainer}>
                <div className={css.headerLogoInnerContainer}>
                    <h1>PomPom.moe</h1>
                    <p>V1</p>
                </div>
            </div>
                <ul className={css.navigationList}>
                    <li onClick={openBaseModal}>
                        База данных
                    </li>
                    <li onClick={openGuidesModal}>
                        Гайды на...
                    </li>
                    <li onClick={Notidication2}>Продолжение следует</li>
                </ul>
           </nav>
           <div className={css.headerProfile}>
                <p onClick={Notidication} className={css.headerUserWelcomeText}>С возвращением, Esna</p>
                <img src={"/img/Character_Aventurine_Icon.png"} className={css.headerProfileIcon} onClick={Notidication}></img>
           </div>
           <DataBase isOpen={baseIsOpen} closeModal={closeBaseModal} />
           <GuidesModal isOpen={guidesIsOpen} closeModal={closeGuidesModal} />
        </header>
    )
}