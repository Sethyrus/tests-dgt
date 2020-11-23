import { combineReducers } from 'redux';
import answersReducer from './answersReducer';
import testsReducer from './testsReducer';

const reducers = combineReducers({
  tests: testsReducer,
  answers: answersReducer,
});

export default reducers;