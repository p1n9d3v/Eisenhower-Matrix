import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");

    const onAddTodo = (e) => {
        e.preventDefault();
        setTodos((prev) => [
            ...prev,
            {
                id: prev.length + 1,
                text: todo,
                status: "active",
            },
        ]);
        setTodo("");
    };

    return (
        <div className="App">
            <TodoList todos={todos} />
            <TodoForm
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                onSubmit={onAddTodo}
            />
        </div>
    );
}

export default App;
