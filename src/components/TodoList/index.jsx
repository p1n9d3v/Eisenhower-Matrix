import TodoItem from "components/TodoItem";
import { TODO_STATUS } from "constant";
import styles from "./index.module.css";

function TodoList({ todos, setTodos, filter }) {
    const toggleStatusTodo = (id) => {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        status:
                            todo.status === TODO_STATUS.active
                                ? TODO_STATUS.completed
                                : TODO_STATUS.active,
                    };
                }

                return todo;
            }),
        );
    };

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const filterTodos = (todos) => {
        switch (filter) {
            case "all": {
                return todos;
            }
            case "active": {
                return todos.filter(
                    (todo) => todo.status === TODO_STATUS.active,
                );
            }

            case "completed": {
                return todos.filter(
                    (todo) => todo.status === TODO_STATUS.completed,
                );
            }
            default: {
                throw new Error("Invalid filter");
            }
        }
    };

    return (
        <section>
            <ul className={styles.container}>
                {filterTodos(todos).map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={() => toggleStatusTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                ))}
            </ul>
        </section>
    );
}

export default TodoList;
