import { useSelector } from "react-redux"

import { filteredCharacters } from "../redux/characters/selectors"
import { Character } from "../Character/Character";
import css from './CharactersList.module.css'


export const CharactersList = () => {
    const filteredData = useSelector(filteredCharacters);

    return (
        <div className={css.charactersListContainer}>
            <ul className={css.charactersList}>
                {filteredData.map(character => (
                    <li key={character.id} className={css.charactersLi}><Character data={character} /></li>
                ))}
            </ul>
        </div>
    )
}