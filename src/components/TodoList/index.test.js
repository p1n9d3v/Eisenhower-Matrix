import { render, screen } from "@testing-library/react";
import { TODO_STATUS } from "constant";
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
        render(<TodoList todos={_mock} setTodo={jest.fn()} filter={"all"} />);
        const todosElement = screen.queryAllByRole("listitem");
        expect(todosElement).toHaveLength(_mock.length);
    });

    test.each(Object.keys(TODO_STATUS))("filter list", (filter) => {
        render(<TodoList todos={_mock} setTodo={jest.fn()} filter={filter} />);

        const todosElements = screen.queryAllByRole("listitem");
        const filterTodos = _mock.filter((item) => {
            if (filter === "all") return true;
            return item.status === TODO_STATUS[filter];
        });

        expect(todosElements).toHaveLength(filterTodos.length);
    });
});
