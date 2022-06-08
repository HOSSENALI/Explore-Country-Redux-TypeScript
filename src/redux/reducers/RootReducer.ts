
import { combineReducers } from 'redux';

import CounterReducer from './CounterReducer';
import CountryReducer from './CountryReducer';
import LoginReducer from './LoginReducer';
// import TaskReducer from './task/TaskReducer';
const rootReducer = combineReducers({
    CounterReducer: CounterReducer,
    CountryReducer: CountryReducer,
    LoginReducer:LoginReducer,
});

export type rootState= ReturnType<typeof rootReducer>

export default rootReducer;
