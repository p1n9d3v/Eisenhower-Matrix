import TodoForm from "components/AddTodoForm";
import TodoFilter from "components/TodoFilter";
import TodoList from "components/TodoList";
import { TODO_STATUS } from "constant";
import { TodoContextProvider } from "context/todoContext";
import { useState } from "react";

const FILTERS = Object.keys(TODO_STATUS);
function App() {
    const [filter, setFilter] = useState(FILTERS[0]);

    return (
        <TodoContextProvider>
            <div className="App">
                <TodoFilter
                    filters={FILTERS}
                    onFilter={(filter) => setFilter(filter)}
                />
                <TodoList filter={filter} />
                <TodoForm />
            </div>
        </TodoContextProvider>
    );
}

export default App;
