import Modal from "react-modal";
import css from "./GuidesModal.module.css"
import Notiflix from "notiflix";

export const GuidesModal = ({isOpen, closeModal}) => {
    const Notification = () => {
        Notiflix.Notify.info("В разработке до V2")
    }
    return (
        <>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={css.guidesModal}
            overlayClassName={css.guidesOverlay}>
                <ul className={css.guidesList}>
                    <li onClick={Notification}>Золото и шестерёнки</li>
                    <li onClick={Notification}>Чистый вымысел</li>
                    <li onClick={Notification}>Зал забвения</li>
                </ul>
          </Modal>
        </>
    )
}