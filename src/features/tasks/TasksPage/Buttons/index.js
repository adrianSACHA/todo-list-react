import { useSelector, useDispatch } from "react-redux";
import {
  selectAreTaskEmpty,
  selectHideDone,
  selectIsEveryTaskDone,
  setAllDone,
  toggleHideDone,
} from "../../tasksSlice";
import { Button } from "../Button";
import { StyledButtons } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTaskEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();
  return (
    <StyledButtons>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
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
