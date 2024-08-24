import Modal from "react-modal";
import css from "./DataBase.module.css"
import { NavLink } from "react-router-dom";

export const DataBase = ({isOpen, closeModal}) => {
    return (
        <>
          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            className={css.dataBaseModal}
            overlayClassName={css.dataBaseOverlay}>
                <ul className={css.dataBaseList}>
                    <li>
                        <NavLink to="/characters">Персонажи</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cones">Конусы</NavLink>
                    </li>
                    <li>
                        <NavLink to="/relics">Реликвии</NavLink>
                    </li>
                    <li>
                        <NavLink to="/planars">Планарные украшения</NavLink>
                    </li>
                </ul>
          </Modal>
        </>
    )
}