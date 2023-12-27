import { render, screen } from "@testing-library/react";
import { TodoContext } from "context/todoContext";
import TodoList from ".";
import { TODO_STATUS } from "constant";

const _mock = [
    {
        id: "1",
        text: "Todo 1",
        status: TODO_STATUS.active,
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
});
