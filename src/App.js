import TodoForm from "@components/AddTodoForm";
import TodoList from "@components/TodoList";
import { TodoContextProvider } from "@context/todoContext";
import { useState } from "react";

function App() {
    const [todos, setTodos] = useState([]);

    const onAdd = (todo) => {
        setTodos((prev) => [...prev, todo]);
    };

    return (
        <TodoContextProvider>
            <div className="App">
                <TodoList todos={todos} />
                <TodoForm onAdd={onAdd} />
            </div>
        </TodoContextProvider>
    );
}

export default App;
