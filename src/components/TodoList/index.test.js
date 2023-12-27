import { render, screen } from "@testing-library/react";
import TodoList from "./index.jsx";

const _todoMock = [
    {
        id: "1",
        text: "Todo 1",
        status: "active",
    },
    {
        id: "2",
        text: "Todo 2",
        status: "active",
    },
    {
        id: "3",
        text: "Todo 3",
        status: "active",
    },
    {
        id: "4",
        text: "Todo 4",
        status: "active",
    },
    {
        id: "5",
        text: "Todo 5",
        status: "active",
    },
];
test("render list", () => {
    render(<TodoList todos={_todoMock} />);
    const todosElement = screen.getAllByRole("listitem");
    expect(todosElement).toHaveLength(_todoMock.length);
});
