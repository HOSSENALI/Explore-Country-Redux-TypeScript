
import { combineReducers } from 'redux';

import CounterReducer from './CounterReducer';
import countryReducer from './CountryReducer';
// import TaskReducer from './task/TaskReducer';
const rootReducer = combineReducers({
    CounterReducer: CounterReducer,
    CountryReducer: countryReducer,
});

export type rootState= ReturnType<typeof rootReducer>

export default rootReducer;
