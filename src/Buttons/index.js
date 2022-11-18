import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
  <div className="tasksList__buttons">
    {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="tasksList__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="tasksList__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
