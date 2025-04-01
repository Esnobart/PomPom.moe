import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";

import {
    userData,
    isUserLogged,
    userLoading,
} from "../../redux/user/selectors";
import { getCones } from "../../redux/cones/operations";
import { setCharacter } from "../../redux/characters/slice";
import { Loading } from "../../Components/Loading/Loading";
import { clearModals } from "../../redux/modals/slice";
import { NotLoggedPage } from "../NotLoggedPage/NotLoggedPage";
import css from "./ProfilePage.module.css";
import { MenuButton } from "@headlessui/react";

export default function ProfilePage() {
    const data = useSelector(userData);
    const loading = useSelector(userLoading);
    const logged = useSelector(isUserLogged);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCones());
        dispatch(setCharacter());
        dispatch(clearModals());
    }, []);

    return (
        <>
            {loading && <Loading />}
            {!logged && <NotLoggedPage />}
            {!loading && data && (
                <>
                    <Helmet>
                        <title>{data.nickname}</title>
                        <link
                            rel="icon"
                            href="https://i.imgur.com/gEu9C46.png"
                        />
                    </Helmet>
                    <div className={css.profileMainContainer}>
                        <div className={css.profileAvatarContainer}>
                            <img
                                src={data.avatar}
                                alt={`${data.nickname}'s avatar'`}
                            />
                            <MenuButton>Choose Another Avatar</MenuButton>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
