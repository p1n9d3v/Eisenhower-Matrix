import { fireEvent, render, screen } from "@testing-library/react";
import AddTodoForm from "./index.jsx";
import React, { useContext } from "react";
import {
    TodoContext,
    TodoContextProvider,
} from "../../context/todoContext.jsx";

const TestContextComponent = () => {
    const { state } = useContext(TodoContext);
    return <p data-testid="todo-length">{state.length}</p>;
};
const renderComponent = () => (
    <TodoContextProvider>
        <AddTodoForm />
        <TestContextComponent />
    </TodoContextProvider>
);

describe("AddTodoForm", () => {
    test("render", () => {
        render(renderComponent());
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );

        expect(inputElement).toBeInTheDocument();
    });

    test("add todo", async () => {
        render(renderComponent());
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );
        const addButton = screen.getByRole("button", { name: "Add" });

        fireEvent.change(inputElement, { target: { value: "Todo 1" } });
        expect(inputElement).toHaveValue("Todo 1");
        fireEvent.click(addButton);

        const todoLengthElement = screen.getByTestId("todo-length");
        expect(todoLengthElement).toHaveTextContent("1");
    });

    test("empty string", () => {
        render(renderComponent());
        const formElement = screen.getByLabelText("add todo");
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );

        fireEvent.change(inputElement, { target: { value: "" } });
        fireEvent.submit(formElement);

        const todoLengthElement = screen.getByTestId("todo-length");
        expect(todoLengthElement).toHaveTextContent("0");
    });
});
