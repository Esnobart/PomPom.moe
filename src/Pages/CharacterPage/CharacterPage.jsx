import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../redux/characters/operations";
import { charactersOne, charactersError, charactersLoading } from "../../redux/characters/selectors";
import { Loading } from "../../Loading/Loading";
import { Error } from "../../Error/Error";
import { useParams } from "react-router-dom";
import css from "./CharacterPage.module.css";

export default function CharacterPage() {
    const { id } = useParams();
    const data = useSelector(charactersOne);
    const error = useSelector(charactersError);
    const loading = useSelector(charactersLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacter(id));
    }, []);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <Error />;
    }

    if (!data) {
        return <p>No data available</p>;
    }

    return (
        <section className={css.characterMainSection}>
            <ul className={css.conesList}>
                {data.cones.map(cone => (
                    <li key={cone.id}>
                        <p>{cone.name}</p>
                        <img width="80" height="80" src={cone.img[1]} alt={cone.name} />
                    </li>
                ))}
            </ul>
            <img src={data.img[0]} width="800" height="800" alt={data.name} />
            <ul className={css.relicsList}>
                {data.relics.map(relic => (
                    <li key={relic.id}>
                        <img width="80" height="80" src={relic.img} alt={relic.name} />
                        <p>{relic.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
