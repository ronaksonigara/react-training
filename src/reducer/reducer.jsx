import { counterTypes } from "./types";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_PRODUCT":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];
    case "DELETE_PRODUCT":
      return [...state.filter((product) => product.id !== action.payload.id)];
    default:
      return state;
  }
};

export const countReducer = (state, action) => {
  switch (action.type) {
    case counterTypes.increment:
      return state + 1;
  }
};
