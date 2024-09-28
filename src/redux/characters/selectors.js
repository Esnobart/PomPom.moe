import { createSelector } from "@reduxjs/toolkit";

export const charactersAll = state => state.characters.characters;

export const charactersOne = state => state.characters.character;

export const charactersFilter = state => state.characters.filter;

export const charactersLoading = state => state.characters.loading;

export const charactersError = state => state.characters.error;

export const filteredCharacters = createSelector(
    [charactersAll, charactersFilter],
    (characters, filter) => {
        const isFilterEmpty = filter.rarity.length === 0 && filter.path.length === 0 && filter.type.length === 0;
        if (isFilterEmpty) return characters;
        return characters.filter(char => {
            const matchesRarity = filter.rarity.length === 0 || filter.rarity.includes(char.rarity);
            const matchesPath = filter.path.length === 0 || filter.path.includes(char.path);
            const matchesType = filter.type.length === 0 || filter.type.includes(char.type);

            return matchesRarity && matchesPath && matchesType;
        });
    }
);
