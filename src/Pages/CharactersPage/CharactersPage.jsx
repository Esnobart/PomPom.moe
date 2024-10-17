import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { CharacterFilter } from "../../CharacterFilter/CharacterFilter";
import { CharactersList } from "../../CharactersList/CharactersList";
import { charactersAll, charactersError, charactersLoading } from "../../redux/characters/selectors";
import { setCharacter } from "../../redux/characters/slice";
import { getCharacters } from "../../redux/characters/operations";
import { Loading } from "../../Loading/Loading";
import { Error } from "../../Error/Error";
import { clearModals } from "../../redux/modals/slice";
import { Helmet } from "react-helmet-async";

export default function CharactersPage() {
    const location = useLocation();
    const data = useSelector(charactersAll);
    const loading = useSelector(charactersLoading);
    const error = useSelector(charactersError);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCharacters());
        dispatch(setCharacter());
        dispatch(clearModals());
    }, []);

    return (
        <>
            <Helmet>
                <title>Персонажи</title>
                <link rel='icon' href='https://i.imgur.com/gEu9C46.png'/>
            </Helmet>
            {loading && <Loading />}
            {error && <Error />}
            {data && (
                <>
                    <CharacterFilter />
                    <CharactersList location={location} />
                </>
            )}
        </>
    )
}