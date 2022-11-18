import React from 'react';
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <div className="tasksList__buttons">
    {tasks.length > 0 && (
      <>
        <button 
        onClick={toggleHideDone} 
        className="tasksList__button"
        >
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="tasksList__button"
          disabled={tasks.every(({ done }) => done)}
          onClick={setAllDone}
        >
          Ukończ wszystkie
        </button>
      </>
    )}
  </div>
);

export default Buttons;
