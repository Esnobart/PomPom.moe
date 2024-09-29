import { NavLink } from "react-router-dom"
import css from './Cone.module.css'

export const Cone = ({ data }) => {
    const rarityClass = `rarity-${data.rarity}`;
    return (
        <NavLink to={`/cones/:${data.id}`} className={css.coneContainer}>
            <div className={`${css.imageContainer} ${css[rarityClass]}`}>
                <img src={`../../img/Background_Item_${data.rarity}_Star.png`} className={css.backgroundImage} />
                <img src={data.img} alt={`${data.name}'s icon`} className={css.coneImage}/>
            </div>
            <p className={css.coneName}>{data.name}</p>
        </NavLink>
    )
}