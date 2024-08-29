import css from "./GuidesModal.module.css"
import Notiflix from "notiflix";

export const GuidesModal = () => {
    return (
        <>
            <ul className={css.guidesList}>
                <li onClick={() => Notiflix.Notify.info("В разработке до V2")}>Чистый вымысел</li>
                <li onClick={() => Notiflix.Notify.info("В разработке до V2")}>Воспоминания хаоса</li>
                <li onClick={() => Notiflix.Notify.info("В разработке до V2")}>Иллюзия конца</li>
            </ul>
        </>
    )
}