import AsyncStorage from '@react-native-community/async-storage';
import { Actions } from '../../AppConstants';
import reduxStore from '../index';

export const getAnswers = () => async dispatch => {

  let answers: any = false;

  try {
    answers = await AsyncStorage.getItem('answers');
  } catch (error) {
    console.log('getAnswers asyncstorage ERROR', error);
  }

  console.log('STORED ANSWERS', answers);

  dispatch({ type: Actions.GET_ANSWERS, payload: JSON.parse(answers) });
};

export const addAnswer = (answer, callback?) => async dispatch => {

  const answers: any = reduxStore.getState().answers;
  console.log('answers PRE', answers);
  answers.push(answer)

  try {
    await AsyncStorage.setItem('answers', JSON.stringify(answers));
  } catch (e) {
    console.log('addAnswer asyncstorage ERROR', e);
  }

  dispatch({ type: Actions.ADD_ANSWER, payload: answers });

  console.log('Respuesta añadida', answers);

  if (typeof callback != 'function') {
    callback();
  }
};
