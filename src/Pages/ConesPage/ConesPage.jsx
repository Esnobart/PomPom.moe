import { useDispatch, useSelector } from "react-redux";
import { conesData, conesError, conesLoading } from "../../redux/cones/selectors";
import { useEffect } from "react";
import { getCones } from "../../redux/cones/operations";
import { Loading } from "../../Loading/Loading";
import { Error } from "../../Error/Error";
import { NavLink } from "react-router-dom";
import css from "./ConesPage.module.css"
import { setCharacter } from "../../redux/characters/slice";

export default function ConesPage() {
    const data = useSelector(conesData);
    const loading = useSelector(conesLoading);
    const error = useSelector(conesError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCones());
        dispatch(setCharacter())
    }, []);

    return (
        <section>
            {loading && <Loading />}
            {error && <Error />}
            {data && (
                <ul className={css.conesList}>
                    {data.map(cone => (
                    <li key={cone.id}>
                        <img src={cone.img[0]} alt={cone.name} width="261" height="306" />
                        <div className={css.conesInfo}>
                            <p>{cone.name}</p>
                            <ul className={css.conesStats}>
                                <li>HP: {cone.HP}</li>
                                <li>ATK: {cone.ATK}</li>
                                <li>DEF: {cone.DEF}</li>
                            </ul>
                            <div className={css.forWho}>
                            <p className={css.forWhoText}>Подходит для:</p>
                                {cone.chars.map(char => (
                                    <NavLink to={`/characters/${char.id}`} key={char.id}>
                                        <img src={char.img[2]} alt={char.name} className={css.navigationImage}></img>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>)}
        </section>
    )
}