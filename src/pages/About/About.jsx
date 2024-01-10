import { useContext } from "react";
import { AppContext } from "../../reducer/context";
import { counterTypes } from "../../reducer/types";

export default function About() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: counterTypes.increment,
          });
        }}
      >
        click
      </button>
      {state.counter}
    </div>
  );
}
