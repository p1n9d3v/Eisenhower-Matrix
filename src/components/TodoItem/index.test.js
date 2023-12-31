import { fireEvent, render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from ".";
import { TODO_STATUS } from "constant";
import { EisenContext } from "context/eisenContext";

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

describe("TodoItem", () => {
    const mockTodo = {
        id: uuidv4(),
        text: "Todo 1",
        status: TODO_STATUS.active,
        cateogry: "todo",
    };

    test("render", () => {
        customRender(<TodoItem todo={mockTodo} />, { providerProps });
        expect(screen.getByLabelText("todo item")).toBeInTheDocument();
        expect(screen.getByText("Todo 1")).toBeInTheDocument();
    });

    test("toggle todo", () => {
        customRender(<TodoItem todo={mockTodo} />, { providerProps });
        const checkbox = screen.getByRole("checkbox");
        fireEvent.click(checkbox);

        expect(providerProps.dispatch).toHaveBeenCalledWith({
            type: "STATUS",
            todo: {
                id: mockTodo.id,
            },
        });
    });

    test("delete todo", () => {
        customRender(<TodoItem todo={mockTodo} />, { providerProps });

        const moreButton = screen.getByLabelText("more");
        fireEvent.click(moreButton);
        const deleteButton = screen.getByLabelText("delete");
        fireEvent.click(deleteButton);
        expect(providerProps.dispatch).toHaveBeenCalledWith({
            type: "DELETE",
            todo: {
                id: mockTodo.id,
            },
        });
    });

    test("edit todo", () => {
        customRender(<TodoItem todo={mockTodo} />, { providerProps });

        const moreButton = screen.getByLabelText("more");
        fireEvent.click(moreButton);
        const editButton = screen.getByLabelText("edit");
        fireEvent.click(editButton);
        const todoInput = screen.getByRole("textbox", { value: "Todo 1" });
        fireEvent.change(todoInput, { target: { value: "Todo 2" } });
        const form = screen.getByLabelText("edit todo text");
        fireEvent.submit(form);

        expect(providerProps.dispatch).toHaveBeenCalledWith({
            type: "UPDATE",
            todo: {
                id: mockTodo.id,
                text: "Todo 2",
            },
        });
    });
});
