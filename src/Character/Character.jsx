import { NavLink } from "react-router-dom"
import css from './Character.module.css'

export const Character = ({ data }) => {
    const rarityClass = `rarity-${data.rarity}`;
    return (
        <NavLink to={`/characters/${data.id}`} className={css.characterContainer}>
            <div className={`${css.vector1} ${css[rarityClass]}`}></div>
            <div className={`${css.vector2} ${css[rarityClass]}`}></div>
            <div className={`${css.vector3} ${css[rarityClass]}`}></div>
            <div className={`${css.vector4} ${css[rarityClass]}`}></div>
            <div className={css.imageContainer}>
                <img src={`/img/Background_Item_${data.rarity}_Star.png`} className={css.backgroundImage} />                
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