import { combineReducers } from 'redux';
import headerSlice from '../slices/headerSlice';
import asyncSlice from '../slices/asyncSlice';

export default combineReducers({
    headerData: headerSlice.reducer,
    apiData: asyncSlice.reducer
})