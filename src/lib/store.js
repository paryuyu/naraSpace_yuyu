import { createStore } from "redux";

//이니셜로 넣어버리면 안되나요
const userInitialState = [];

const userReducer = (state = userInitialState, action) => {

  switch (action.type) {
    case 'add':
      return [...state, action.value];

    case 'remove':
      return state.filter(one => one !== action.value)

    default:
      return state;
  }
}

export const store = createStore(userReducer);