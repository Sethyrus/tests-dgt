import { Actions } from "../../AppConstants";

const initialState = [

]

function answersReducer(state = initialState, action) {
  switch (action.type) {

    case Actions.GET_ANSWERS: {
      return action.payload;
    }

    case Actions.ADD_ANSWER: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}

export default answersReducer;