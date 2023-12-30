import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import AddTodoForm from ".";

const addTodo = jest.fn();
describe("AddTodoForm", () => {
    test("render", () => {
        render(<AddTodoForm onAddTodo={addTodo} />);
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );

        expect(inputElement).toBeInTheDocument();
    });

    test("add todo", async () => {
        render(<AddTodoForm onAddTodo={addTodo} />);
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );
        const addButton = screen.getByRole("button", { name: "Add" });

        fireEvent.change(inputElement, { target: { value: "Todo 1" } });
        expect(inputElement).toHaveValue("Todo 1");
        fireEvent.click(addButton);

        expect(addTodo).toHaveBeenCalled();
    });

    test("empty string", () => {
        render(<AddTodoForm onAddTodo={addTodo} />);
        const formElement = screen.getByLabelText("add todo");
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );

        fireEvent.change(inputElement, { target: { value: "" } });
        fireEvent.submit(formElement);

        expect(addTodo).not.toHaveBeenCalled();
    });
});
