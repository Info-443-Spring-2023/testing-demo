import { configureStore, createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks", //the feature name used in actions
  initialState: { tasks: [] }, //e.g., the array of tasks
  reducers: {
    addTask: (state, action) => {
      console.log(action);
      const newTask = { id: state.tasks.length + 1, description: action };
      state.tasks.push(newTask) // will be made immutable!
    },
    markComplete: (state, action) => {},
  },
})

// create the Redux store
const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});
console.log(store.getState());

tasksSlice.actions.addTask("New Task");
console.log(store.getState());

// //A store with data!
// let initialTaskStore = {
//   tasks: [
//     { id: 1, description: "Learn Redux", complete: false },
//     { id: 2, description: "Finish project 1", complete: false },
//   ],
//   appointments: [
//     { id: 1, time: "Tue, April 25 5:30pm", attendees: ["Alexander Bell-Towne", "Students"] },
//   ],
// }

// //A reducer!
// function taskReducer(state = initialTaskStore, action) {
//   if(action.type === "tasks/taskAdded"){
//     const newTask = {
//       id: state.tasks.length + 1, //add 1 to id
//       description: action.payload,
//       complete: false
//     }
//     const updatedTasks = [...state.tasks, newTask]; //new array
//     const updatedState = {...state, tasks: updatedTasks}; //new object
//     return updatedState;
//   }
//   else if(action.type === "tasks/taskCompleted") { }

//   return state;
// }

// // create the Redux store
// const store = configureStore({ reducer: taskReducer })

// // access values from the store
// console.log(store.getState())

// //an action creator -- just a convenience function!
// const addTask = (description) => {
//   //return the action object
//   return { type: "tasks/taskAdded", payload: description }
// }


// const addAction = addTask("Do the thing");

// store.dispatch(addAction);
// console.log(store.getState());

// store.dispatch(addTask( "Do the thing again"));
// console.log(store.getState());

// store.dispatch({
//   type: "tasks/taskAdded",
//   payload: "Do the thing again"
// });

// console.log(store.getState())


// //An array of actions!
// const actionArray = [
//   {type: "tasks/taskAdded", payload: "Do the thing"},
//   {type: "tasks/taskCompleted", payload: {taskId: 2}},
//   {type: "tasks/taskAdded", payload: "Do the other thing"},
//   {type: "appointments/apptAdded", payload: {}}
// ]



// taskManagerStore = actionArray.reduce(taskReducer, taskManagerStore)

// console.log(taskManagerStore);
