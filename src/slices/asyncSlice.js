
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    fetching: false,
    error: null
}

export const getApi = createAsyncThunk(
    'api/getApi',
    async (request) => {
        console.log("getApi:request==", request);
        const response = await new Promise((resolve, reject) => setTimeout(() => reject("Something went wrong!"), request.delay));
        console.log("getApi:timeout==", response);
        return { status: response }
    }
)

const asyncSlice = createSlice({
    name: 'asyncSlice',
    initialState,
    reducers: {
        deleteAPIData: (state, action) => {
            return {
                ...state,
                data: {},
                fetching: false
            }
        }
    },
    extraReducers: {
        [getApi.pending]: (state, action) => {
            state.data = {}
            state.fetching = true
        },
        [getApi.fulfilled]: (state, action) => {
            state.data = action.payload
            state.fetching = false
        },
        [getApi.rejected]: (state, action) => {
            state.fetching = false
            state.error = action.error
        }
    }
});

export const { deleteAPIData } = asyncSlice.actions;
export default asyncSlice