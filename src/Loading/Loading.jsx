import css from "./Loading.module.css"

export const Loading = () => {
    return (
        <div className={css.loaderContainer}>
            <div className={css.bouncingDots}>
                <div className={css.dot}></div>
                <div className={css.dot}></div>
                <div className={css.dot}></div>
            </div>
        </div>
    )
}