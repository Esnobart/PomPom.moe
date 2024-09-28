import { useDispatch } from "react-redux"
import css from "./CharacterFilter.module.css"
import { setFilter } from "../redux/characters/slice";
import { useSelector } from "react-redux";
import { charactersFilter } from "../redux/characters/selectors";

const types = [
    { key: "Разрушение", icon: "/img/destruction-icon.png", alt: "destruction icon" },
    { key: "Охота", icon: "/img/hunt-icon.png", alt: "hunt icon" },
    { key: "Эрудиция", icon: "/img/erudition-icon.png", alt: "erudition icon" },
    { key: "Гармония", icon: "/img/harmony-icon.png", alt: "harmony icon" },
    { key: "Небытие", icon: "/img/nihility-icon.png", alt: "nihility icon" },
    { key: "Сохранение", icon: "/img/preservation-icon.png", alt: "preservation icon" },
    { key: "Изобилие", icon: "/img/abundance-icon.png", alt: "abundance icon" }
];

const typesOfFight = [
    { key: "Физический", icon: "/img/physical-type.png", alt: "physical type" },
    { key: "Огненный", icon: "/img/fire-type.png", alt: "fire type" },
    { key: "Ледяной", icon: "/img/ice-type.png", alt: "ice type" },
    { key: "Электрический", icon: "/img/lightning-type.png", alt: "lightning type" },
    { key: "Ветряной", icon: "/img/wind-type.png", alt: "wind type" },
    { key: "Квантовый", icon: "/img/quantum-type.png", alt: "quantum type" },
    { key: "Мнимый", icon: "/img/imaginary-type.png", alt: "imaginary type" }
];

const rarity = [
    { key: "5", icon: "/img/icon_5_Stars.png", alt: "5 stars icon" },
    { key: "4", icon: "/img/icon_4_Stars.png", alt: "4 stars icon" }
]

export const CharacterFilter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(charactersFilter);

    const isSelected = (filterType, key) => currentFilter[filterType].includes(key);

    return (
        <section className={css.filterContainer}>
            <div className={css.typesContainer}>
                <p>Путь</p>
                <ul className={css.pathList}>
                    {types.map(type => (
                        <li 
                          key={type.key} 
                          onClick={() => dispatch(setFilter({ filterType: 'path', value: type.key }))} 
                          className={isSelected('path', type.key) ? css.selected : ''}
                        >
                            <img src={type.icon} alt={type.alt} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={css.typesContainer}>
                <p>Типы боя</p>
                <ul className={css.typesList}>
                    {typesOfFight.map(type => (
                        <li
                          key={type.key} 
                          onClick={() => dispatch(setFilter({ filterType: 'type', value: type.key }))}
                          className={isSelected('type', type.key) ? css.selected : ''}
                        >
                            <img src={type.icon} alt={type.alt} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={css.typesContainer}>
                <p>Редкость</p>
                <ul className={css.rarityList}>
                    {rarity.map(rare => (
                        <li
                          key={rare.key} 
                          onClick={() => dispatch(setFilter({ filterType: 'rarity', value: rare.key }))}
                          className={isSelected('rarity', rare.key) ? css.selected : ''}
                        >
                            <img src={rare.icon} alt={rare.alt} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}