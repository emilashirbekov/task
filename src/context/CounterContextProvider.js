import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

export const counterContext = createContext();

export const useCounter = () => useContext(counterContext);

const INITIAL_STATE = {
  counter: 0,
  data: "",
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "COUNTER":
      return { ...state, counter: action.payload };
    default:
      return state;
  }
};

const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const inc = () => {
    let res = state.counter + 1;
    let action = {
      type: "COUNTER",
      payload: res,
    };
    dispatch(action);
  };
  const dec = () => {
    let res = state.counter - 1;
    let action = {
      type: "COUNTER",
      payload: res,
    };
    dispatch(action);
  };

  let values = {
    counter: state.counter,
    inc,
    dec,
  };

  return (
    <counterContext.Provider value={values}>{children}</counterContext.Provider>
  );
};

export default CounterContextProvider;
