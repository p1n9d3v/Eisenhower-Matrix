import { fireEvent, render, screen } from "@testing-library/react";
import { TodoContext } from "context/todoContext";
import { v4 as uuidv4 } from "uuid";
import TodoItem from ".";
import { TODO_STATUS } from "constant";

describe("TodoItem", () => {
    const mockDispatch = jest.fn();
    const mockTodo = {
        id: uuidv4(),
        text: "Todo 1",
        status: TODO_STATUS.active,
    };

    const renderComponent = () =>
        render(
            <TodoContext.Provider
                value={{
                    state: [mockTodo],
                    dispatch: mockDispatch,
                }}
            >
                <TodoItem todo={mockTodo} />
            </TodoContext.Provider>,
        );

    test("render", () => {
        renderComponent();
        expect(screen.getByLabelText("todo item")).toBeInTheDocument();
        expect(screen.getByText("Todo 1")).toBeInTheDocument();
    });

    test("toggle todo", () => {
        renderComponent();
        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: "UPDATE",
            id: mockTodo.id,
        });

        const checkboxAfterClick = screen.getByRole("checkbox");
        expect(checkboxAfterClick.checked).toEqual(false);
    });

    test("delete todo", () => {
        renderComponent();
        const deleteButton = screen.getByRole("button");
        fireEvent.click(deleteButton);
        expect(mockDispatch).toHaveBeenCalledWith({
            type: "DELETE",
            id: mockTodo.id,
        });
    });
});
