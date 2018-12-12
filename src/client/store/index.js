import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import gitReducer from './reducers/gitReducer';

const reducer = combineReducers({
    gitGists: gitReducer
});

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
