import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { TodoContext } from "context/todoContext";
import { TODO_STATUS } from "constant";

function TodoItem({ todo }) {
    const { dispatch } = useContext(TodoContext);

    const onDelete = () => {
        dispatch({
            type: "DELETE",
            id: todo.id,
        });
    };

    const onUpdate = () => {
        dispatch({
            type: "UPDATE",
            id: todo.id,
        });
    };

    return (
        <li
            style={{
                dispaly: "flex",
            }}
            aria-label="todo item"
        >
            <input
                type="checkbox"
                id="todo"
                checked={todo.status === TODO_STATUS.completed}
                onChange={onUpdate}
            />
            <label htmlFor="todo">{todo.text}</label>
            <button onClick={onDelete}>
                <FaRegTrashCan />
            </button>
        </li>
    );
}

export default TodoItem;
