import { useState } from "react";

export function AddTaskForm(props) {
  const [inputtedValue, setInputtedValue] = useState("")

  //a controlled form
  const handleChange = (event) => {
    let newValue = event.target.value //what the user typed in
    setInputtedValue(newValue)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Submitting: ", inputtedValue)

    props.addTaskCallback(inputtedValue)
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