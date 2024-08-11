import { useDispatch, useSelector } from "react-redux"
import { charactersData, charactersError, charactersLoading } from "../redux/characters/selectors"
import { Loading } from "../Loading/Loading";
import { Error } from "../Error/Error";
import { Character } from "../Character/Character";
import { getCharacters } from "../redux/characters/operations";
import { useEffect } from "react";

export const CharactersList = () => {
    const data = useSelector(charactersData);
    const error = useSelector(charactersError);
    const loading = useSelector(charactersLoading);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    return (
        <div>
            {loading && <Loading />}
            {error && <Error />}
            <ul>
                {data.map(character => (
                    <li key={character.id}><Character data={character} /></li>
                ))}
            </ul>
        </div>
    )
}