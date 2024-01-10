import { createContext, useReducer } from "react";
import PropTypes from "prop-types";

import { todoReducer, countReducer } from "./reducer";

const initialState = {
  todos: [],
  counter: 0,
};

const AppContext = createContext({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ todos, counter }, action) => ({
  todos: todoReducer(todos, action),
  counter: countReducer(counter, action),
});

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { AppContext, AppProvider };
