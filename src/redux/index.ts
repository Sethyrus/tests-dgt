import { createStore, applyMiddleware } from 'redux';
import Reducers from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

const reduxStore = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));

export default reduxStore;