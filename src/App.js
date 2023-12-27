import { useState } from "react";
import TodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([]);

    const onAdd = (todo) => {
        setTodos((prev) => [...prev, todo]);
    };

    return (
        <div className="App">
            <TodoList todos={todos} />
            <TodoForm onAdd={onAdd} />
        </div>
    );
}

export default App;
