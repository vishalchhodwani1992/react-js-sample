import { combineReducers } from 'redux';
import headerSlice from '../slices/headerSlice';

export default combineReducers({
    headerData: headerSlice.reducer
})