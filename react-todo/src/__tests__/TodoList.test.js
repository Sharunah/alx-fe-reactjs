import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the initial todos correctly", () => {
    render(<TodoList />);

    // Check if the initial todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Explore React Hooks")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    // Select the input and button
    const input = screen.getByPlaceholderText("Add a new todo");
    const addButton = screen.getByText("Add");

    // Simulate adding a new todo
    fireEvent.change(input, { target: { value: "Write Tests" } });
    fireEvent.click(addButton);

    // Verify the new todo is in the document
    expect(screen.getByText("Write Tests")).toBeInTheDocument();
    expect(input.value).toBe(""); // Ensure input is cleared after adding
  });

  test("toggles a todo's completed status", () => {
    render(<TodoList />);

    const todoItem = screen.getByText("Learn React");

    // Initial state: not completed
    expect(todoItem).toHaveStyle("text-decoration: none");

    // Simulate toggling completion
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");

    // Toggle back
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: none");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const deleteButton = screen.getAllByText("Delete")[0];

    // Simulate clicking delete
    fireEvent.click(deleteButton);

    // Verify the first todo is removed
    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
