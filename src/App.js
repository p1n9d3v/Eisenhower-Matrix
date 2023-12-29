import TodoForm from "components/AddTodoForm";
import EisenhowerContainer from "components/EisenhowerContainer";
import TodoFilter from "components/TodoFilter";
import TodoList from "components/TodoList";
import { TODO_STATUS } from "constant";
import { TodoContextProvider } from "context/todoContext";
import Eisenhower from "pages/Eisenhower";
import { useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import "./styles/global.css";

const FILTERS = Object.keys(TODO_STATUS);

const router = createBrowserRouter([
    {
        path: "/",
    },
]);

function App() {
    const [filter, setFilter] = useState(FILTERS[0]);

    return (
        <TodoContextProvider>
            <Eisenhower />
            {/* <div className="App"> */}
            {/*     <TodoFilter */}
            {/*         filters={FILTERS} */}
            {/*         onFilter={(filter) => setFilter(filter)} */}
            {/*     /> */}
            {/*     <TodoList filter={filter} /> */}
            {/*     <TodoForm /> */}
            {/* </div> */}
        </TodoContextProvider>
    );
}

export default App;
