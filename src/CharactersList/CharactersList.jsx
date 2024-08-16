import { useDispatch, useSelector } from "react-redux"
import { charactersData, charactersError, charactersLoading } from "../redux/characters/selectors"
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";
import { Character } from "../Character/Character";
import { getCharacters } from "../redux/characters/operations";
import { useEffect, useState } from "react";
import svg from '../../icons.svg'
import css from './CharactersList.module.css'
import clsx from "clsx";
import { clearList } from "../redux/characters/slice";

export const CharactersList = () => {
    const [isOpen, setIsOpen] = useState(true)
    const data = useSelector(charactersData);
    const error = useSelector(charactersError);
    const loading = useSelector(charactersLoading);
    
    const dispatch = useDispatch();

    const toggleOpen = () => {
        if (!isOpen) {
            setIsOpen(true);
            dispatch(getCharacters())
        } else {
            setIsOpen(false);
            dispatch(clearList())
        }
    };

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return (
        <div className={css.CharactersListContainer}>
            <div className={css.CharacterOpenContainer}>
                <svg width="50px" height="50px" onClick={toggleOpen} className={clsx(css.icon, { [css.open]: !isOpen })}>
                    <use href={`${svg}#icon-arrow`}></use>
                </svg>
                <h1 className={css.CharactersTitle}>Characters</h1>
            </div>
            {loading && <Loading />}
            {error && <Error />}
            <ul className={css.CharactersList}>
                {data.map(character => (
                    <li key={character.id} className={css.characterLi}><Character data={character} /></li>
                ))}
            </ul>
        </div>
    )
}