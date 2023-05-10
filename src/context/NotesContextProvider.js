import React from "react";
import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import axios from "axios";

export const notesContext = createContext();

const API = "https://jsonplaceholder.typicode.com/posts";

export const useNotes = () => useContext(notesContext);

const INITIAL_STATE = {
  data: [],
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "NOTES":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

const NotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const getData = async () => {
    try {
      let res = await axios.get(API);
      let action = {
        type: "NOTES",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
  let values = {
    data: state.data,
    getData,
  };

  return (
    <notesContext.Provider value={values}>{children}</notesContext.Provider>
  );
};

export default NotesContextProvider;
