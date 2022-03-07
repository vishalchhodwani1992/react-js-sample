
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    properties: {},
    show: false
}

const logSlice = createSlice({
    name: 'logSlice',
    initialState,
    reducers: {
        showMessage: (state, action) => {
            return {
                ...state,
                show: true,
                properties: action.payload
            }
        },
        hideMessage: (state, action) => {
            return {
                ...state,
                show: false,
                properties: {}
            }
        },
    }
});

export const { showMessage, hideMessage } = logSlice.actions;
export default logSlice