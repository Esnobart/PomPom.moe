import { useDispatch } from "react-redux"
import css from "./CharacterFilter.module.css"
import { setFilter } from "../../redux/characters/slice";
import { useSelector } from "react-redux";
import { charactersFilter } from "../../redux/characters/selectors";

const types = [
    { key: "Разрушение", icon: "https://i.imgur.com/bLKWzBM.png", alt: "destruction icon" },
    { key: "Охота", icon: "https://i.imgur.com/r0m2RaE.png", alt: "hunt icon" },
    { key: "Эрудиция", icon: "https://i.imgur.com/79saAod.png", alt: "erudition icon" },
    { key: "Гармония", icon: "https://i.imgur.com/sPHDW4p.png", alt: "harmony icon" },
    { key: "Небытие", icon: "https://i.imgur.com/BNzXos9.png", alt: "nihility icon" },
    { key: "Сохранение", icon: "https://i.imgur.com/sO1OQH6.png", alt: "preservation icon" },
    { key: "Изобилие", icon: "https://i.imgur.com/oj8rDBc.png", alt: "abundance icon" }
];

const typesOfFight = [
    { key: "Физический", icon: "https://i.imgur.com/wSMaqBn.png", alt: "physical type" },
    { key: "Огненный", icon: "https://i.imgur.com/PsWUmrn.png", alt: "fire type" },
    { key: "Ледяной", icon: "https://i.imgur.com/ko9X2gT.png", alt: "ice type" },
    { key: "Электрический", icon: "https://i.imgur.com/1TdnQkN.png", alt: "lightning type" },
    { key: "Ветряной", icon: "https://i.imgur.com/KVWVPlF.png", alt: "wind type" },
    { key: "Квантовый", icon: "https://i.imgur.com/VfgDZf2.png", alt: "quantum type" },
    { key: "Мнимый", icon: "https://i.imgur.com/vrCCYin.png", alt: "imaginary type" }
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