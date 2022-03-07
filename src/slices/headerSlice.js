
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false
}

const headerSlice = createSlice({
    name: 'headerSlice',
    initialState,
    reducers: {
        updateName: (state, action) => {
            return {
                ...state,
                name: action.payload.name,
            }
        },
        deleteName: (state, action) => {
            return {
                ...state,
                name: "",
            }
        },
    }
});

export const { updateName, deleteName } = headerSlice.actions;
export default headerSlice