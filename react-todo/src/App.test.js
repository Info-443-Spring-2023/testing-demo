import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./components/App"; //import Components to test

describe("Integration:App", () => {
  test("renders without errors", () => {
    render(<App initialTasks={[]} />); //render into testing DOM!
    //screen.debug(); //view rendered DOM/HTML in console (for debugging)
    expect(screen.getByText("To Do List")).toBeInTheDocument(); //assertion
  })

  test("shows new tasks on form submission", () => {
    render(<App initialTasks={[]} />); //render into testing DOM!

    //enter text
    const formInput = screen.getByRole("textbox")
    userEvent.type(formInput, "TEST TASK"); //type in two words

    //click button
    userEvent.click(screen.getByRole("button"));

    //assertion! text appears in list
    expect(screen.getByText("TEST TASK")).toBeInTheDocument();
  })
})
