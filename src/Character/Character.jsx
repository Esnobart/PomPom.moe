import { NavLink } from "react-router-dom"
import css from './Character.module.css'

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
            <p className={css.characterName}>{data.name}</p>
            <div className={css.characterInfo}>
                <p>Путь: {data.path}</p>
                <p>Тип: {data.type}</p>
            </div>
        </NavLink>
    )
}