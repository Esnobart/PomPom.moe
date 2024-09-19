import { useDispatch, useSelector } from "react-redux"
import { charactersAll, charactersError, charactersLoading } from "../redux/characters/selectors"
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";
import { Character } from "../Character/Character";
import { getCharacters } from "../redux/characters/operations";
import { useEffect } from "react";
import css from './CharactersList.module.css'
import { setCharacter } from "../redux/characters/slice";

export default function CharactersList() {
    const data = useSelector(charactersAll);
    const error = useSelector(charactersError);
    const loading = useSelector(charactersLoading);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
        dispatch(setCharacter());
    }, [])

    return (
        <div className={css.charactersListContainer}>
            {loading && <Loading />}
            {error && <Error />}
            <ul className={css.charactersList}>
                {data.map(character => (
                    <li key={character.id} className={css.charactersLi}><Character data={character} /></li>
                ))}
            </ul>
        </div>
    )
}