import { fireEvent, render, screen } from "@testing-library/react";
import { EisenContext } from "context/eisenContext";
import React from "react";
import AddTodoForm from ".";

const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
        <EisenContext.Provider value={providerProps}>
            {ui}
        </EisenContext.Provider>,
        renderOptions,
    );
};
const providerProps = {
    dispatch: jest.fn(),
};
describe("AddTodoForm", () => {
    test("render", () => {
        customRender(<AddTodoForm />, { providerProps });
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );

        expect(inputElement).toBeInTheDocument();
    });

    test("add todo", async () => {
        customRender(<AddTodoForm />, { providerProps });
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );
        const addButton = screen.getByRole("button");

        fireEvent.change(inputElement, { target: { value: "Todo 1" } });
        expect(inputElement).toHaveValue("Todo 1");
        fireEvent.click(addButton);

        expect(providerProps.dispatch).toHaveBeenCalledWith({
            type: "ADD",
            todo: {
                text: "Todo 1",
            },
        });
    });

    test("empty string", () => {
        customRender(<AddTodoForm />, { providerProps });

        const formElement = screen.getByLabelText("add todo");
        const inputElement = screen.getByPlaceholderText(
            "Add new todo here...",
        );

        fireEvent.change(inputElement, { target: { value: "" } });
        fireEvent.submit(formElement);

        expect(providerProps.dispatch).not.toHaveBeenCalled();
    });
});
