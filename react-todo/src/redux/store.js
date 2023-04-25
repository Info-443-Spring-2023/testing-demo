import { configureStore } from "@reduxjs/toolkit"

import taskSlice from "./taskSlice";

const myStore = configureStore({
  reducer: {
    tasks: taskSlice.reducer //special property!
  }
})

//initial state setting goes here
console.log("initial store:", myStore.getState())

export default myStore;

