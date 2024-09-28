import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ConesFilter } from "../../ConesFilter/ConesFilter";
import { ConesList } from "../../ConesList/ConesList";
import { conesData, conesLoading, conesError } from "../../redux/cones/selectors";
import { getCones } from "../../redux/cones/operations";
import { setCharacter } from "../../redux/characters/slice";
import { Loading } from "../../Loading/Loading";
import { Error } from "../../Error/Error";

export default function CharactersPage() {
    const data = useSelector(conesData);
    const loading = useSelector(conesLoading);
    const error = useSelector(conesError);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCones());
        dispatch(setCharacter())
    }, []);

    return (
        <>
            {loading && <Loading />}
            {error && <Error />}
            {data && (
                <>
                    <ConesFilter />
                    <ConesList />
                </>
            )}
        </>
    )
}