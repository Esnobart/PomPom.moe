import { NavLink } from "react-router-dom"
import css from './Character.module.css'

export const Character = ({ data }) => {
    return (
        <NavLink to={`/characters/:${data.id}`} className={css.characterContainer}>
            <div className={css.imageContainer}>
               <img src={data.img[1]} alt={`${data.name}'s icon`} className={css.characterImage}/>
            </div>
            <p className={css.characterName}>{data.name}</p>
        </NavLink>
    )
}