import { useDispatch, useSelector } from "react-redux"
import { conesData, conesError, conesLoading } from "../redux/cones/selectors"
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";
import { Character } from "../Character/Character";
import { getCones } from "../redux/cones/operations";
import { useEffect, useState } from "react";
import svg from '../../icons.svg'
import css from './ConesList.module.css'
import clsx from "clsx";
import { clearConesList } from "../redux/cones/slice";

export const ConeList = () => {
    const [isOpen, setIsOpen] = useState(true)
    const data = useSelector(conesData);
    const error = useSelector(conesError);
    const loading = useSelector(conesLoading);
    
    const dispatch = useDispatch();

    const toggleOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
            dispatch(getCones())
        } else {
            setIsOpen(false);
            dispatch(clearConesList())
        }
    };

    useEffect(() => {
        dispatch(getCones())
    }, [])

    return (
        <div className={css.conesListContainer}>
            <div className={css.conesOpenContainer}>
                <svg width="50px" height="50px" onClick={toggleOpen} className={clsx(css.icon, { [css.open]: !isOpen })}>
                    <use href={`${svg}#icon-arrow`}></use>
                </svg>
                <h1 className={css.conesTitle}>Cones</h1>
            </div>
            {loading && <Loading />}
            {error && <Error />}
            <ul className={css.conesList}>
                {data.map(cone => (
                    <li key={cone.id} className={css.conesLi}><Character data={cone} /></li>
                ))}
            </ul>
        </div>
    )
}