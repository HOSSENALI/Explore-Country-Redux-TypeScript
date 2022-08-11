import { INCREMENT_VALUE } from "../action/ActionTypes";

type InitialState = {
  value: number;
  input: number;
  buttonInput: number;
};
const initialState: InitialState = {
  value: 0,
  input: 0,
  buttonInput: 0,
};

function CounterReducer(
  state = initialState,
  action: CounterACtion
): InitialState {
  switch (action.type) {
    case "INCREMENT_VALUE":
      return {
        ...state,
        value: state.value + 1,
      };

    case "DECREMENT_VALUE":
      return {
        ...state,
        value: state.value - 1,
      };
    case "INCREMENT_PAYLOAD":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "INCREMENT_BY_BUTTON":
      return {
        ...state,
        value: state.value + action.payload,
      };
    case "SET_INPUT":
      return {
        ...state,
        buttonInput: state.buttonInput + action.payload,
      };

    default:
      return state;
  }
}

export default CounterReducer;

export type INCREMENT_VALUE = {
  type: typeof INCREMENT_VALUE; //only in type,we need to call type in this way: typeof GET_COUNTRIES
};
export type DECREMENT_VALUE = {
  type: "DECREMENT_VALUE"; //only in type,we need to call type in this way: typeof GET_COUNTRIES
};
export type INCREMENT_PAYLOAD = {
  type: "INCREMENT_PAYLOAD"; //only in type,we need to call type in this way: typeof GET_COUNTRIES
  payload: number;
};
export type INCREMENT_BY_BUTTON = {
  type: "INCREMENT_BY_BUTTON"; //only in type,we need to call type in this way: typeof GET_COUNTRIES
  payload: number;
};
export type SET_INPUT = {
  type: "SET_INPUT"; //only in type,we need to call type in this way: typeof GET_COUNTRIES
  payload: number;
};
export type CounterACtion =
  | INCREMENT_VALUE
  | DECREMENT_VALUE
  | INCREMENT_PAYLOAD
  | INCREMENT_BY_BUTTON
  | SET_INPUT;
