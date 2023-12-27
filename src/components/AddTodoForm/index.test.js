import { fireEvent, render, screen } from "@testing-library/react";
import AddTodoForm from "./index.jsx";
import React from "react";

const onAdd = jest.fn();

describe("AddTodoForm", () => {
    test("render", () => {
        render(<AddTodoForm onAdd={onAdd} />);
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );

        expect(inputElement).toBeInTheDocument();
    });

    test("add todo", async () => {
        render(<AddTodoForm onAdd={onAdd} />);
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );
        const addButton = screen.getByRole("button", { name: "Add" });

        fireEvent.change(inputElement, { target: { value: "Todo 1" } });
        expect(inputElement).toHaveValue("Todo 1");

        fireEvent.click(addButton);
        expect(onAdd).toHaveBeenCalledTimes(1);
        expect(onAdd).toHaveBeenCalledWith(
            expect.objectContaining({
                id: expect.any(String),
                text: "Todo 1",
                status: "active",
            }),
        );
    });

    test("empty string", () => {
        render(<AddTodoForm onAdd={onAdd} />);
        const formElement = screen.getByLabelText("add todo");
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );

        fireEvent.change(inputElement, { target: { value: "" } });
        fireEvent.submit(formElement);

        expect(onAdd).not.toHaveBeenCalled();
    });
});
