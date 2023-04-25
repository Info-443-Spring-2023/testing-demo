import { createSlice } from "@reduxjs/toolkit"

const tasksSlice = createSlice({
  name: "tasks", //the feature name used in actions
  initialState: [], //e.g., the array of tasks
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: state.length + 1,
        description: action.payload,
        complete: false
      };
      state.push(newTask) //will be made immutable!
    },
    toggleComplete: (state, action) => {
      for(const task of state){
        if(task.id === action.payload) {
          task.complete = !task.complete;
        }
      }
    }
  }
})

export default tasksSlice;

//selectors (accessors)
export const selectTasks = (state) => {
  return state.tasks
}

export const selectIncompleteTasks = (state) => {
  return state.tasks.filter((task) => !task.complete);
}
