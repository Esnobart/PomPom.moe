import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";

import { DataBase } from "../DataBase/DataBase";
import { GuidesModal } from "../GuidesModal/GuidesModal";
import { modalDataBase, modalGuides } from "../../redux/modals/selectors";
import { setDataBaseModal, setGuidesModal } from "../../redux/modals/slice";
// import { userData, isUserLogged } from "../../redux/user/selectors";
import css from "./Header.module.css"

export const Header = () => {
    const dispatch = useDispatch()
    const databaseModal = useSelector(modalDataBase);
    const guidesModal = useSelector(modalGuides);
    // const isLogged = useSelector(isUserLogged);
    // const user = useSelector(userData);

    return (
        <header className={css.headerContainer}>
            <nav className={css.navigationContainer}>
                <div className={css.headerLogo}>
                    <NavLink to="/" className={css.NavToMain}>
                        <h1>PomPom.moe</h1>
                        <p>V1</p>
                    </NavLink>
                    {/* {isLogged ? (
                    <div className={css.headerProfileForPhone}>
                        <p className={css.headerUserWelcomeText}>С возвращением, {user.nickname}</p>
                        <img src={user.avatar} className={css.headerProfileIcon}></img>
                    </div>) : (
                        <div className={css.headerProfileForPhone}>
                            <NavLink to="/signup"><button type="button" className={css.signupBtn}>Sign Up</button></NavLink>
                            <NavLink to="/login"><button type="button" className={css.loginBtn}>Log In</button></NavLink>
                        </div>
                    )} */}
                </div>
                <ul className={css.navigationList}>
                    <li>
                        <div className={css.firstLi} onClick={() => dispatch(setDataBaseModal())}>
                            <p className={css.navigationListText}>База данных</p>
                            <div className={css.dataBase} style={{ display: databaseModal ? 'block' : undefined }}>
                                <div className={css.wrapper}>
                                    <div className={css.vector}></div>
                                    <div className={css.vectorInner}></div>
                                </div>
                                <DataBase />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className={css.secondLi} onClick={() => dispatch(setGuidesModal())}>
                            <p className={css.navigationListText}>Гайды на...</p>
                            <div className={css.guidesModal} style={{ display: guidesModal ? 'block' : undefined }}>
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
                {/* {isLogged ? (
                    <div className={css.headerProfileForDesctop}>
                        <p className={css.headerUserWelcomeText}>С возвращением, {user.nickname}</p>
                        <img src={user.avatar} className={css.headerProfileIcon}></img>
                    </div>) : (
                        <div className={css.headerProfileForDesctop}>
                            <NavLink to="/signup"><button type="button" className={css.signupBtn}>Sign Up</button></NavLink>
                            <NavLink to="/login"><button type="button" className={css.loginBtn}>Log In</button></NavLink>
                        </div>
                    )} */}
           </nav>
        </header>
    )
}