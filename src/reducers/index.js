import { combineReducers } from 'redux';
import logSlice from '../slices/logSlice';

export default combineReducers({
    log: logSlice.reducer
})