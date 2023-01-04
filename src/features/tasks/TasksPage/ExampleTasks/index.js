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

  return (
    <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
}
export default ExampleTasks;
