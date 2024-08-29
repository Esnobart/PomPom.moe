import css from "./MainPage.module.css"

export default function MainPage() {
    return (
        <div className={css.mainPageContainer}>
            <h1>Добро пожаловать на PomPom.moe</h1>
            <p>Это должно было быть главной страницей, но пока что нет идей что сюда добавить, поэтому пока что используйте навигацию сверху</p>
        </div>
    )
}