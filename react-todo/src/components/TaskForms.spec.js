import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../redux/store"; //will be "single store", may need to clear or re-create

import { AddTaskForm } from "./TaskForms";

describe("Unit:Task Forms", () => {
  describe("Add Task Form", () => {
    test("clears content after submit", () => {
      //can render single element
      render(
        <Provider store={store}>
          <AddTaskForm />
        </Provider>
      )

      //enter text
      const formInput = screen.getByRole("textbox")
      userEvent.type(formInput, "TEST TASK"); //type in two words

      //shows typed input (controlled form!)
      expect(screen.getByDisplayValue("TEST TASK")).toBeInTheDocument();

      //click button
      userEvent.click(screen.getByRole("button"));

      //should also clear the form
      expect(screen.queryByDisplayValue("TEST TASK")).not.toBeInTheDocument();
    })
  })
})
