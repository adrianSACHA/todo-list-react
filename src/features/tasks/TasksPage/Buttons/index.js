import { useSelector, useDispatch } from "react-redux";
import { selectAreTaskEmpty, selectHideDone, selectIsEveryTaskDone, setAllDone, toggleHideDone, fetchExampleTasks } from "../../tasksSlice";
import { StyledButtons, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTaskEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);
  
  const dispatch = useDispatch();
  return (
    <StyledButtons>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button 
          onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            disabled={isEveryTaskDone}
            onClick={() => dispatch(setAllDone())}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  );
};
export default Buttons;
