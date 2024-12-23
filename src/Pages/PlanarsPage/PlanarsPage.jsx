import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { planarsData, planarsError, planarsLoading } from "../../redux/planars/selectors";
import { getPlanars } from "../../redux/planars/operations";
import { setCharacter } from "../../redux/characters/slice";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";
import { clearModals } from "../../redux/modals/slice";
import css from "./PlanarsPage.module.css"

export default function RelicsPage() {
    const location = useLocation();
    const data = useSelector(planarsData);
    const loading = useSelector(planarsError);
    const error = useSelector(planarsLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlanars());
        dispatch(setCharacter());
        dispatch(clearModals());
    }, []);

    return (
        <section>
            <Helmet>
                <title>Планарные украшения</title>
                <link rel='icon' href='https://i.imgur.com/gEu9C46.png'/>
            </Helmet>
            {loading && <Loading />}
            {error && <Error />}
            {data && (
                <ul className={css.planarsCardsList}>
                    {data.map(planar => (
                        <li key={planar.id}>
                            <img src={planar.img} alt={planar.name} className={css.planarImage} />
                            <div>
                                <p className={css.planarName}>{planar.name}</p>
                                <p><b>2 шт.: </b>{planar.twoPieces}</p>
                                <div className={css.forWho}>
                                    <p>Подходит для:</p>
                                    {planar.chars.map(char => (
                                        <NavLink to={`/characters/${char.id}`} key={char.id} state={location}>
                                            <img src={char.img[2]} alt={char.name} className={css.navigationImage}></img>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}