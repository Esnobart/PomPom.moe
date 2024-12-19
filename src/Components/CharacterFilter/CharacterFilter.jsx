import { useDispatch } from "react-redux"
import css from "./CharacterFilter.module.css"
import { setFilter } from "../../redux/characters/slice";
import { useSelector } from "react-redux";
import { charactersFilter } from "../../redux/characters/selectors";

const types = [
    { key: "Разрушение", icon: "https://i.imgur.com/lsLOnXn.png", alt: "destruction icon" },
    { key: "Охота", icon: "https://i.imgur.com/Ezi3stQ.png", alt: "hunt icon" },
    { key: "Эрудиция", icon: "https://i.imgur.com/51Ub72v.png", alt: "erudition icon" },
    { key: "Гармония", icon: "https://i.imgur.com/iJwwPUe.png", alt: "harmony icon" },
    { key: "Небытие", icon: "https://i.imgur.com/CYzTTcu.png", alt: "nihility icon" },
    { key: "Сохранение", icon: "https://i.imgur.com/wILtHNa.png", alt: "preservation icon" },
    { key: "Изобилие", icon: "https://i.imgur.com/MzZztSp.png", alt: "abundance icon" }
];

const typesOfFight = [
    { key: "Физический", icon: "https://i.imgur.com/zC4rfPQ.png", alt: "physical type" },
    { key: "Огненный", icon: "https://i.imgur.com/M3FqQW3.png", alt: "fire type" },
    { key: "Ледяной", icon: "https://i.imgur.com/BlZcLr0.png", alt: "ice type" },
    { key: "Электрический", icon: "https://i.imgur.com/ra74vjS.png", alt: "lightning type" },
    { key: "Ветряной", icon: "https://i.imgur.com/jlojtuW.png", alt: "wind type" },
    { key: "Квантовый", icon: "https://i.imgur.com/ZQcsE3Y.png", alt: "quantum type" },
    { key: "Мнимый", icon: "https://i.imgur.com/zYhsZ3q.png", alt: "imaginary type" }
];

const rarity = [
    { key: "5", icon: "https://i.imgur.com/6dfcP79.png", alt: "5 stars icon" },
    { key: "4", icon: "https://i.imgur.com/oq2yGeI.png", alt: "4 stars icon" }
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