import TodoForm from "components/AddTodoForm";
import TodoList from "components/TodoList";
import { TodoContextProvider } from "context/todoContext";

function App() {
    return (
        <TodoContextProvider>
            <div className="App">
                <TodoList />
                <TodoForm />
            </div>
        </TodoContextProvider>
    );
}

export default App;
