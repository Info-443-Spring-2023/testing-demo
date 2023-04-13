import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AddTaskForm } from './TaskForms';

describe('Unit:Task Forms', () => {
  describe('Add Task Form', () => {
    test('clears content after submit', () => {
      const callback = () => {}; //empty
      
      //can render single element
      render(<AddTaskForm addTaskCallback={callback} />)
  
      //enter text
      const formInput = screen.getByRole('textbox')
      userEvent.type(formInput, "TEST TASK"); //type in two words
  
      //shows typed input (controlled form!)
      expect(screen.getByDisplayValue("TEST TASK")).toBeInTheDocument();
  
      //click button
      userEvent.click(screen.getByRole('button'));
  
      //should also clear the form
      expect(screen.queryByDisplayValue("TEST TASK")).not.toBeInTheDocument();
    })
  })
})
