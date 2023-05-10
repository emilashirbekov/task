import React, { useEffect } from "react";
import { useNotes } from "../context/NotesContextProvider";

const Notes = () => {
  const { data, getData } = useNotes();

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      <div className="container">
        {data.map((item) => {
          return (
            <div key={item.id}>
              <p>Title: {item.title}</p>
              <p>Description: {item.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Notes;
