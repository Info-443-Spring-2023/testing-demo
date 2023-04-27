import { configureStore } from "@reduxjs/toolkit"

import taskSlice from "./taskSlice";

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer //special property!
  }
})

export default store;

