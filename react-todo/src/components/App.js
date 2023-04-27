import { useSelector} from "react-redux"

import { selectTasks, selectIncompleteTasks } from "../redux/taskSlice";

import TaskList from "./Tasks";
import { AddTaskForm } from "./TaskForms";

function App(props) {
  const tasks = useSelector(selectTasks)

  const incompleteArray = useSelector(selectIncompleteTasks);

  return (
    <div className="container">
      <h1>To Do List</h1>
      <p className="lead">
        Num things I have to do: <strong>{incompleteArray.length}</strong>
      </p>

      {/* pass down the array */}
      <TaskList tasks={tasks} />
      <AddTaskForm />
    </div>
  );
}

export default App;
