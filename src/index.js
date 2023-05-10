import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CounterContextProvider from "./context/CounterContextProvider";
import NotesContextProvider from "./context/NotesContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <NotesContextProvider>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </NotesContextProvider>
);
