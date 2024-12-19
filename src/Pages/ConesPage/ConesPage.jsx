import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { ConesFilter } from "../../Components/ConesFilter/ConesFilter";
import { ConesList } from "../../Components/ConesList/ConesList";
import { conesData, conesLoading, conesError } from "../../redux/cones/selectors";
import { getCones } from "../../redux/cones/operations";
import { setCharacter } from "../../redux/characters/slice";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";
import { clearModals } from "../../redux/modals/slice";

export default function CharactersPage() {
    const location = useLocation();
    const data = useSelector(conesData);
    const loading = useSelector(conesLoading);
    const error = useSelector(conesError);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCones());
        dispatch(setCharacter());
        dispatch(clearModals());
    }, []);

    return (
        <>
            <Helmet>
                <title>Конусы</title>
                <link rel='icon' href='https://i.imgur.com/gEu9C46.png'/>
            </Helmet>
            {loading && <Loading />}
            {error && <Error />}
            {data && (
                <>
                    <ConesFilter />
                    <ConesList location={location} />
                </>
            )}
        </>
    )
}