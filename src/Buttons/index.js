import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
  <div className="tasksList__buttons">
    {tasks.length > 0 && (
      <>
        <button className="tasksList__button">
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
