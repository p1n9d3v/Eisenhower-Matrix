import { fireEvent, render, screen } from "@testing-library/react";
import { TODO_STATUS } from "constant";
import { TodoContext } from "context/todoContext";
import TodoList from ".";

const _mock = [
    {
        id: "1",
        text: "Todo 1",
        status: TODO_STATUS.active,
    },
    {
        id: "2",
        text: "Todo 2",
        status: TODO_STATUS.completed,
    },
];

describe("TodoList", () => {
    test("render list", () => {
        render(
            <TodoContext.Provider
                value={{
                    state: _mock,
                    dispatch: jest.fn(),
                }}
            >
                <TodoList />
            </TodoContext.Provider>,
        );
        const todosElement = screen.queryAllByRole("listitem");
        expect(todosElement).toHaveLength(_mock.length);
    });

    test.each(Object.keys(TODO_STATUS))("filter list", (filter) => {
        render(
            <TodoContext.Provider
                value={{
                    state: _mock,
                    dispatch: jest.fn(),
                }}
            >
                <TodoList />
            </TodoContext.Provider>,
        );

        const completedElement = screen.queryByText(filter);
        fireEvent.click(completedElement);
        const todosElements = screen.queryAllByRole("listitem");
        const filterTodos = _mock.filter(
            (item) => item.status === TODO_STATUS[filter],
        );

        expect(todosElements).toHaveLength(filterTodos.length);
    });
});
