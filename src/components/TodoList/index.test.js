import { render, screen } from "@testing-library/react";
import { TODO_STATUS } from "constant";
import { EisenContext } from "context/eisenContext";
import TodoList from ".";

const _mock = [
    {
        id: "1",
        text: "Todo 1",
        status: TODO_STATUS.active,
        category: "todo",
    },
    {
        id: "2",
        text: "Todo 2",
        status: TODO_STATUS.completed,
        category: "todo",
    },
];

const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
        <EisenContext.Provider value={providerProps}>
            {ui}
        </EisenContext.Provider>,
        renderOptions,
    );
};
const providerProps = {
    state: _mock,
    dispatch: jest.fn(),
};

describe("TodoList", () => {
    test("render list", () => {
        customRender(<TodoList filter="all" category="todo" />, {
            providerProps,
        });
        const todosElement = screen.queryAllByRole("listitem");
        expect(todosElement).toHaveLength(_mock.length);
    });

    test.each(Object.keys(TODO_STATUS))("filter list", (filter) => {
        customRender(<TodoList filter={filter} category="todo" />, {
            providerProps,
        });
        const todosElements = screen.queryAllByRole("listitem");
        const filterTodos = _mock.filter((item) => {
            if (filter === "all") return true;
            return item.status === TODO_STATUS[filter];
        });

        expect(todosElements).toHaveLength(filterTodos.length);
    });
});
