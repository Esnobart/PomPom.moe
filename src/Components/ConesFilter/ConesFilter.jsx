import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { conesFilter } from "../../redux/cones/selectors";
import { setFilter } from "../../redux/cones/slice";
import css from "./ConesFilter.module.css"

const types = [
    { key: "Разрушение", icon: "https://i.imgur.com/2feXFtR.png", alt: "destruction icon" },
    { key: "Охота", icon: "https://i.imgur.com/Emwka1e.png", alt: "hunt icon" },
    { key: "Эрудиция", icon: "https://i.imgur.com/kLishcF.png", alt: "erudition icon" },
    { key: "Гармония", icon: "https://i.imgur.com/OjpVlkA.png", alt: "harmony icon" },
    { key: "Небытие", icon: "https://i.imgur.com/gdnfXhQ.png", alt: "nihility icon" },
    { key: "Сохранение", icon: "https://i.imgur.com/zKhz5Bn.png", alt: "preservation icon" },
    { key: "Изобилие", icon: "https://i.imgur.com/lw9aahv.png", alt: "abundance icon" }
];

const rarity = [
    { key: "5", icon: "https://i.imgur.com/6dfcP79.png", alt: "5 stars icon" },
    { key: "4", icon: "https://i.imgur.com/oq2yGeI.png", alt: "4 stars icon" }
]

export const ConesFilter = () => {
    const dispatch = useDispatch();
    const currentFilter = useSelector(conesFilter);

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