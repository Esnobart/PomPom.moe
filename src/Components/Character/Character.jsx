import { NavLink } from "react-router-dom"
import css from './Character.module.css'

const types = [
    { key: "Разрушение", icon: "https://i.imgur.com/bLKWzBM.png", alt: "destruction icon" },
    { key: "Охота", icon: "https://i.imgur.com/r0m2RaE.png", alt: "hunt icon" },
    { key: "Эрудиция", icon: "https://i.imgur.com/79saAod.png", alt: "erudition icon" },
    { key: "Гармония", icon: "https://i.imgur.com/sPHDW4p.png", alt: "harmony icon" },
    { key: "Небытие", icon: "https://i.imgur.com/BNzXos9.png", alt: "nihility icon" },
    { key: "Сохранение", icon: "https://i.imgur.com/sO1OQH6.png", alt: "preservation icon" },
    { key: "Изобилие", icon: "https://i.imgur.com/oj8rDBc.png", alt: "abundance icon" }
];

const typesOfFight = [
    { key: "Физический", icon: "https://i.imgur.com/wSMaqBn.png", alt: "physical type" },
    { key: "Огненный", icon: "https://i.imgur.com/PsWUmrn.png", alt: "fire type" },
    { key: "Ледяной", icon: "https://i.imgur.com/ko9X2gT.png", alt: "ice type" },
    { key: "Электрический", icon: "https://i.imgur.com/1TdnQkN.png", alt: "lightning type" },
    { key: "Ветряной", icon: "https://i.imgur.com/KVWVPlF.png", alt: "wind type" },
    { key: "Квантовый", icon: "https://i.imgur.com/VfgDZf2.png", alt: "quantum type" },
    { key: "Мнимый", icon: "https://i.imgur.com/vrCCYin.png", alt: "imaginary type" }
];

const getIcon = (array, key) => array.find(item => item.key === key)?.icon;
const getAlt = (array, key) => array.find(item => item.key === key)?.alt;

export const Character = ({ location, data }) => {
    const rarityClass = `rarity-${data.rarity}`;
    return (
        <NavLink to={`/characters/${data.id}`} state={location} className={css.characterContainer}>
            <div className={`${css.vector1} ${css[rarityClass]}`}></div>
            <div className={`${css.vector2} ${css[rarityClass]}`}></div>
            <div className={`${css.vector3} ${css[rarityClass]}`}></div>
            <div className={`${css.vector4} ${css[rarityClass]}`}></div>
            <div className={css.imageContainer}>
                {data.isNewCharacter && (
                    <div className={css.newContainer}>
                        <p>New!</p>
                    </div>
                )}
                {data.rerun && (
                    <div className={css.rerunContainer}>
                        <p>Rerun!</p>
                    </div>
                )}
                <img src={data.rarity === 4 ? "https://i.imgur.com/F542Iuj.png" : "https://i.imgur.com/ShUUKno.png"} className={css.backgroundImage} />                
                <img src={data.img[1]} alt={`${data.name}'s icon`} className={css.characterImage}/>
            </div>
            <div className={css.pathAndTypeContainer}>
                {getIcon(typesOfFight, data.type) && (
                    <img
                        className={css.typeIcon}
                        key={`type.${data.type}`}
                        src={getIcon(typesOfFight, data.type)}
                        alt={getAlt(typesOfFight, data.type)}
                    />
                )}
                {getIcon(types, data.path) && (
                    <img
                        className={css.pathIcon}
                        key={`typesOfFight.${data.path}`}
                        src={getIcon(types, data.path)}
                        alt={getAlt(types, data.path)}
                    />
                )}
            </div>
            <p className={css.characterName}>{data.name}</p>
        </NavLink>
    )
}