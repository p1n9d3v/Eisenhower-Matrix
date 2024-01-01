import AddTodoForm from "components/AddTodoForm";
import TodoFilter from "components/TodoFilter";
import TodoList from "components/TodoList";
import Space from "components/ui/Space";
import styles from "./index.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <TodoFilter />
            <Space height={10} />
            <AddTodoForm />
            <Space height={10} />
            <TodoList category="todo" />
        </div>
    );
}

export default Sidebar;
