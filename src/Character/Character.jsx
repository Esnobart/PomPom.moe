import { NavLink } from "react-router-dom"
import css from './Character.module.css'

export const Character = ({ data }) => {
    return (
        <NavLink to={`/characters/:${data.id}`} className={css.characterContainer}>
            <div className={css.vector1}></div>
                <div className={css.vector2}></div>
                <div className={css.vector3}></div>
                <div className={css.vector4}></div>
            <div className={css.imageContainer}>
                <img src={`/img/Background_Item_${data.rarity}_Star.png`} className={css.backgroundImage} />                
                <img src={data.img[1]} alt={`${data.name}'s icon`} className={css.characterImage}/>
            </div>
            <p className={css.characterName}>{data.name}</p>
        </NavLink>
    )
}