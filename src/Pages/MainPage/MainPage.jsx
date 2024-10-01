import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { setCharacter } from "../../redux/characters/slice"
import { clearModals } from "../../redux/modals/slice"
import css from "./MainPage.module.css"

export default function MainPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCharacter());
        dispatch(clearModals());
    }, [])

    return (
        <div className={css.mainPageContainer}>
            <h1>Добро пожаловать на PomPom.moe</h1>
            <p>Это должно было быть главной страницей, но пока что нет идей что сюда добавить, поэтому пока что используйте навигацию сверху</p>
        </div>
    )
}