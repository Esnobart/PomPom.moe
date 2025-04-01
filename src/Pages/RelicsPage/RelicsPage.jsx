import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
    relicsData,
    relicsError,
    relicsLoading,
} from "../../redux/relics/selectors";
import { getRelics } from "../../redux/relics/operations";
import { setCharacter } from "../../redux/characters/slice";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";
import { clearModals } from "../../redux/modals/slice";
import css from "./RelicsPage.module.css";

export default function RelicsPage() {
    const location = useLocation();
    const data = useSelector(relicsData);
    const loading = useSelector(relicsLoading);
    const error = useSelector(relicsError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRelics());
        dispatch(setCharacter());
        dispatch(clearModals());
    }, []);

    return (
        <section>
            <Helmet>
                <title>Реликвии</title>
                <link rel="icon" href="https://i.imgur.com/gEu9C46.png" />
            </Helmet>
            {loading && <Loading />}
            {error && <Error />}
            {data?.length > 0 && (
                <ul className={css.relicsCardsList}>
                    {data.map((relic) => (
                        <li key={relic.id}>
                            <img
                                src={relic.img}
                                alt={relic.name}
                                className={css.relicImage}
                            />
                            <div>
                                <p className={css.relicName}>{relic.name}</p>
                                <div className={css.characteristicsContainer}>
                                    <p>
                                        <b>2 шт.: </b>
                                        {relic.twoPieces}
                                    </p>
                                    <p>
                                        <b>4 шт.: </b>
                                        {relic.fourPieces}
                                    </p>
                                </div>
                                <div className={css.forWho}>
                                    <p>Подходит для:</p>
                                    {relic.chars.map((char) => (
                                        <NavLink
                                            to={`/characters/${char.id}`}
                                            key={char.id}
                                            state={location}
                                        >
                                            <img
                                                src={char.img[2]}
                                                alt={char.name}
                                                className={css.navigationImage}
                                            ></img>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
