import { useContext, useRef } from "react";
import AddTodo from "../../components/AddTodo/AddTodo";
import { TodoWrapper } from "./style";
import { todoTypes } from "../../reducer/types";
import { AppContext } from "../../reducer/context";

export default function Todo() {
  const { state, dispatch } = useContext(AppContext);

  const inputRef = useRef();

  const handleAddTodo = () => {
    if (inputRef?.current?.value) {
      dispatch({
        type: todoTypes.addTodo,
        payload: {
          value: inputRef.current.value,
        },
      });
      inputRef.current.value = "";
    }
  };

  return (
    <TodoWrapper>
      <AddTodo ref={inputRef} onAddClick={handleAddTodo} />

      <ul>
        {state.todos.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
    </TodoWrapper>
  );
}
