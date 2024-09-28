import { createSelector } from "@reduxjs/toolkit";

export const conesData = state => state.cones.data;

export const conesFilter = state => state.cones.filter;

export const conesLoading = state => state.cones.loading;

export const conesError = state => state.cones.error;

export const filteredCones = createSelector(
    [conesData, conesFilter],
    (cones, filter) => {
        const isFilterEmpty = filter.rarity.length === 0 && filter.path.length === 0;
        if (isFilterEmpty) return cones;
        return cones.filter(cone => {
            const matchesRarity = filter.rarity.length === 0 || filter.rarity.includes(cone.rarity);
            const matchesPath = filter.path.length === 0 || filter.path.includes(cone.path);

            return matchesRarity && matchesPath;
        });
    }
)