import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { CharacterFilter } from "../../CharacterFilter/CharacterFilter";
import { CharactersList } from "../../CharactersList/CharactersList";
import { charactersAll, charactersError, charactersLoading } from "../../redux/characters/selectors";
import { setCharacter } from "../../redux/characters/slice";
import { getCharacters } from "../../redux/characters/operations";
import { Loading } from "../../Loading/Loading";
import { Error } from "../../Error/Error";

export default function CharactersPage() {
    const data = useSelector(charactersAll);
    const loading = useSelector(charactersLoading);
    const error = useSelector(charactersError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
        dispatch(setCharacter());
    }, []);

    return (
        <>
            {loading && <Loading />}
            {error && <Error />}
            {data && (
                <>
                    <CharacterFilter />
                    <CharactersList />
                </>
            )}
        </>
    )
}