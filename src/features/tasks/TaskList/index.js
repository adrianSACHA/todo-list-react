import { useSelector, useDispatch } from "react-redux";
import { removeTask, selectTasks, toggleTaskDone } from "../tasksSlice";
import { List, Item, Content, RemoveButton, ToggleDoneButton } from "./styled";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? " ✔" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>{task.content}</Content>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
