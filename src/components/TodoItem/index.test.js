import { fireEvent, render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from ".";
import { TODO_STATUS } from "constant";

const toggleTodo = jest.fn();
const deleteTodo = jest.fn();

describe("TodoItem", () => {
    const mockTodo = {
        id: uuidv4(),
        text: "Todo 1",
        status: TODO_STATUS.active,
    };

    test("render", () => {
        render(
            <TodoItem
                todo={mockTodo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />,
        );
        expect(screen.getByLabelText("todo item")).toBeInTheDocument();
        expect(screen.getByText("Todo 1")).toBeInTheDocument();
    });

    test("toggle todo", () => {
        render(
            <TodoItem
                todo={mockTodo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />,
        );
        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);
        expect(toggleTodo).toHaveBeenCalled();

        const checkboxAfterClick = screen.getByRole("checkbox");
        expect(checkboxAfterClick.checked).toEqual(false);
    });

    test("delete todo", () => {
        render(
            <TodoItem
                todo={mockTodo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
            />,
        );
        const deleteButton = screen.getByRole("button");
        fireEvent.click(deleteButton);
        expect(deleteTodo).toHaveBeenCalled();
    });
});
