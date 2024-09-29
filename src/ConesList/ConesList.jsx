import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { filteredCones } from "../redux/cones/selectors";
import css from "./ConesList.module.css"

export const ConesList = () => {
    const data = useSelector(filteredCones);

    return (
        <section>
            <ul className={css.conesList}>
                {data.map(cone => (
                    <li key={cone.id}>
                        <div className={`${css.imageContainer} ${cone.rarity === "4" ? css.rarity4 : css.rarity5}`}>
                            <img src={`../../img/Background_Item_${cone.rarity}_Star.png`} className={css.backgroundImage} />
                            <img src={cone.img[0]} alt={cone.name} className={css.coneImage} />
                        </div>
                        <div className={css.conesInfo}>
                            <p>{cone.name}</p>
                            <ul className={css.conesStats}>
                                <li>HP: {cone.HP}</li>
                                <li>ATK: {cone.ATK}</li>
                                <li>DEF: {cone.DEF}</li>
                            </ul>
                            <div className={css.forWho}>
                                <p className={css.forWhoText}>Подходит для:</p>
                                <div className={css.forWhoIcons}>
                                    {cone.chars.map(char => (
                                        <NavLink to={`/characters/${char.id}`} key={char.id}>
                                            <img src={char.img[2]} alt={char.name} className={css.navigationImage}></img>
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}