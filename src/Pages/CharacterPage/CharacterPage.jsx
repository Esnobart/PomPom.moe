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

    const getRelicsClass = (lengthRelics, lengthPlanars) => {
        if (lengthRelics % 2 === 0 && lengthPlanars % 2 === 0) {
            return css.evenRelicsEvenPlanars;
        }
        if (lengthRelics % 2 === 0 && lengthPlanars % 2 !== 0) {
            return css.evenRelicsOddPlanars;
        }
        if (lengthRelics % 2 !== 0 && lengthPlanars % 2 === 0) {
            return css.oddRelicsEvenPlanars;
        }
        return css.oddRelicsOddPlanars;
    };

    const getPlanarsClass = (lengthRelics, lengthPlanars) => {
        if (lengthRelics % 2 === 0 && lengthPlanars % 2 === 0) {
            return css.evenPlanarsEvenRelics;
        }
        if (lengthRelics % 2 === 0 && lengthPlanars % 2 !== 0) {
            return css.evenPlanarsOddRelics;
        }
        if (lengthRelics % 2 !== 0 && lengthPlanars % 2 === 0) {
            return css.oddPlanarsEvenRelics;
        }
        return css.oddPlanarsOddRelics;
    };

    const statsIcons = {
        body: "https://i.imgur.com/QY9ZJbR.png",
        sphere: "https://i.imgur.com/Z06ahIH.png",
        boots: "https://i.imgur.com/3NNG9Sk.png",
        rope: "https://i.imgur.com/cFwVwVu.png",
      };

    return (    
        <>
        {loading && <Loading />}
        {error && <Error />}
        {data && (<>
        <section className={css.characterMainSection}>
                <ul className={css.conesList}>
                    {data.cones.map(cone => (
                        <li key={cone.id}>
                            <p>{cone.name}</p>
                            <img className={css.coneImage} src={cone.img[1]} alt={cone.name} />
                        </li>
                    ))}
                </ul>
                <img src={data.img[0]} className={css.mainImage} alt={data.name} />
                <div className={css.statsContainerForDesctop}>
                    <ul className={css.statsList}>
                        {Object.keys(data.stats).map((key, index) => (
                            <li key={key} className={index < 2 ? css.firstTwoStats : css.lastTwoStats}>
                                <img src={statsIcons[key]} alt={key} />
                                <p>{data.stats[key]}</p>
                            </li>
                        ))}
                    </ul>
                    <span>Доп. статы: {data.addStats}</span>
                </div>
                <ul className={`${css.relicsList} ${getRelicsClass(data.relics.length, data.planars.length)}`}>
                    {data.relics.map(relic => (
                        <li key={relic.id}>
                            <img className={css.relicImage} src={relic.img} alt={relic.name} />
                            <p>{relic.name}</p>
                        </li>
                    ))}
                </ul>
                <ul className={`${css.planarsList} ${getPlanarsClass(data.relics.length, data.planars.length)}`}>
                    {data.planars.map(planar => (
                        <li key={planar.id}>
                            <img className={css.planarImage} src={planar.img} alt={planar.name} />
                            <p>{planar.name}</p>
                        </li>
                    ))}
                </ul>
                <div className={css.statsContainerForPhone}>
                    <ul className={css.statsList}>
                        {Object.keys(data.stats).map((key, index) => (
                            <li key={key} className={index < 2 ? css.firstTwoStats : css.lastTwoStats}>
                                <img src={statsIcons[key]} alt={key} />
                                <p>{data.stats[key]}</p>
                            </li>
                        ))}
                    </ul>
                    <span>Доп. статы: {data.addStats}</span>
                </div>
        </section>
        <section>
            <p>{data.additionally}</p>
        </section>
    </>)}
        </>
    );
}