import { useDispatch, useSelector } from "react-redux";
import {
  fetchExampleTasks,
  selectError,
  selectLoading,
} from "../../tasksSlice";
import { Button } from "../../../../common/Button/styled";

function ExampleTasks() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? loading : error ? error : "Pobierz przykładowe zadania"}
    </Button>
  );
}
export default ExampleTasks;
