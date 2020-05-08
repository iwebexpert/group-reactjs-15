import {createStore} from 'redux';
import {initReducer} from "reducers/index";

export const store = createStore(initReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())