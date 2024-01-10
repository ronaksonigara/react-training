import { counterTypes, todoTypes } from "./types";

export const todoAction = {
  [todoTypes.addTodo]: (state, action) => {
    const newTodo = {
      value: action.payload.value,
      id: state.length + 1,
    };
    return [...state, newTodo];
  },
};

export const counterAction = {
  [counterTypes.increment]: (state) => {
    return state + 1;
  },
};
