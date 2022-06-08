import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import * as React from 'react';
import { rootState } from "../redux/reducers/RootReducer";
import {
  Decrement,
  Increment,
  IncrementByButton,
  IncrementByPayload,
  SetInput,
} from "../redux/action/CounterActions";

function Counter() {
  const dispatch = useDispatch();
  const { value, buttonInput } = useSelector((state: rootState) => state.CounterReducer);

  const handleChangeIncrement = () => {
    dispatch(Increment());
  };
  const handleChangeDecrement = () => {
    dispatch(Decrement());
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(IncrementByPayload(parseInt(e.target.value)));
  };
  const setInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(SetInput(parseInt(e.target.value)));
  };
  const handleChangeButton = (buttonInput: number) => {
    dispatch(IncrementByButton(buttonInput));
  };

  return (
    <div>
      <p>
        <button onClick={handleChangeIncrement}>+</button>
        {value}
        <button onClick={handleChangeDecrement}>-</button>
        <input onChange={handleInput} />

        <h1>Add by input Field</h1>
        <input type="number" onChange={setInput} />
        <button onClick={() => handleChangeButton((buttonInput))}>
          Add
        </button>
      </p>

    </div>
  );
}

export default Counter;
