import { useState } from "react";

import { useDispatch } from "react-redux"
import tasksSlice from "../redux/taskSlice";

export function AddTaskForm(props) {
  const dispatch = useDispatch();
  const [inputtedValue, setInputtedValue] = useState("")

  //a controlled form
  const handleChange = (event) => {
    let newValue = event.target.value //what the user typed in
    setInputtedValue(newValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(tasksSlice.actions.addTask(inputtedValue))

    setInputtedValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control mb-3"
        placeholder="What else do you have to do?"
        value={inputtedValue}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">Add task to list</button>
    </form>
  );
}