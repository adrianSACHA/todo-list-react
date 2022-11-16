import "./style.css";

const Buttons = ({tasks, hideDoneTasks}) => {
  tasks.length > 0 && (
    <div className="tasksList__buttons">
      <button className="tasksList__button">
        {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
      className="tasksList__button"
      disabled={tasks.every(({ done }) => done)}
       >
        Ukończ wszystkie
      </button>
    </div>
  );
};

export default Buttons;
