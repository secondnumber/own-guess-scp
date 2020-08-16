import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import scpReducer from './scpReducer';

const reducers = combineReducers({
    scp: scpReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;