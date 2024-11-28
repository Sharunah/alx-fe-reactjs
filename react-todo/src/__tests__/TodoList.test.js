/* eslint-disable no-undef */

import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom'; // For additional matchers
import TodoList from "../components/TodoList";


describe("TodoList Component", () => {
    test("renders the initial todos correctly", () => {
    render(<TodoList />);

    // Verify the demo todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Explore React Hooks")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    // Get the input field and button
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    // Simulate adding a new todo
    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(addButton);

    // Verify the new todo is added to the list
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
  });

  test("toggles a todo's completed status", () => {
    render(<TodoList />);

    // Get the todo and simulate clicking it
    const todo = screen.getByText("Learn React");
    fireEvent.click(todo);

    // Verify the text decoration style changes
    expect(todo).toHaveStyle("text-decoration: line-through");

    // Click again to toggle back
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    // Get the delete button for the first todo
    const deleteButton = screen.getAllByText("Delete")[0];

    // Simulate clicking the delete button
    fireEvent.click(deleteButton);

    // Verify the first todo is removed
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
