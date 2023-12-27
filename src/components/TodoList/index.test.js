import { render, screen } from "@testing-library/react";
import TodoList from "./index.jsx";
import { TodoContext } from "@context/todoContext";

const _mock = [
    {
        id: "1",
        text: "Todo 1",
        status: "active",
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
