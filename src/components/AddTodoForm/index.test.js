import { fireEvent, render, screen } from "@testing-library/react";
import { TodoContext, TodoContextProvider } from "context/todoContext";
import React, { useContext } from "react";
import AddTodoForm from ".";

const TestContextComponent = () => {
    const { state } = useContext(TodoContext);
    return <p data-testid="todo-length">{state.length}</p>;
};
const RenderComponent = () => (
    <TodoContextProvider>
        <AddTodoForm />
        <TestContextComponent />
    </TodoContextProvider>
);

describe("AddTodoForm", () => {
    test("render", () => {
        render(RenderComponent());
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );

        expect(inputElement).toBeInTheDocument();
    });

    test("add todo", async () => {
        render(RenderComponent());
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
        render(RenderComponent());
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
