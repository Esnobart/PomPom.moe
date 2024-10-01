import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
    name: 'modals',
    initialState: {
        dataBaseModal: false,
        guidesModal: false
    },
    reducers: {
        clearModals(state) {
            state.dataBaseModal = false;
            state.guidesModal = false;
        },
        setDataBaseModal(state) {
            state.dataBaseModal = !state.dataBaseModal
        },
        setGuidesModal(state) {
            state.guidesModal = !state.guidesModal
        }
    }
});

export const { clearModals, setDataBaseModal, setGuidesModal } = modalsSlice.actions;
export const modalsReducer = modalsSlice.reducer;