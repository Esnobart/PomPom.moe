import { NavLink } from "react-router-dom"

export const Character = ({ data }) => {
    return (
        <NavLink to={`/characters/:${data.id}`}>
            <img src={data.img[0]} alt={`${data.name}'s icon`} />
            <p>{data.name}</p>
        </NavLink>
    )
}