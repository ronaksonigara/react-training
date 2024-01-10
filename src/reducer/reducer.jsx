import { counterAction, todoAction } from "./action";
// import { counterTypes } from "./types";

export const todoReducer = (state, action) => {
  const func = todoAction?.[action?.type];

  return func ? func(state, action) : state;
  // switch (action.type) {
  //   case "CREATE_PRODUCT":
  //     return [
  //       ...state,
  //       {
  //         id: action.payload.id,
  //         name: action.payload.name,
  //         price: action.payload.price,
  //       },
  //     ];

  //   default:
  //     return state;
  // }
};

export const countReducer = (state, action) => {
  const func = counterAction?.[action?.type];

  return func ? func(state, action) : state;
  // switch (action.type) {
  //   case counterTypes.increment:
  //     return state + 1;
  // }
};
