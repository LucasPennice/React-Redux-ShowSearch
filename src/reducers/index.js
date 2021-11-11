import showsArrayReducer from './showsArray';
import clickedShowReducer from './clickedShow';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
	showsArray: showsArrayReducer,
	clickedShow: clickedShowReducer,
});

export default allReducers;
