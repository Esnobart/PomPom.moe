import { NavLink } from "react-router-dom"
import css from './Cone.module.css'

export const Cone = ({ data }) => {
    return (
        <NavLink to={`/cones/:${data.id}`} className={css.coneContainer}>
            <div className={css.imageContainer}>
               <img src={data.img} alt={`${data.name}'s icon`} className={css.coneImage}/>
            </div>
            <p className={css.coneName}>{data.name}</p>
        </NavLink>
    )
}