import { FaRegTrashCan } from "react-icons/fa6";
import { TODO_STATUS } from "constant";

function TodoItem({ todo, onToggle, onDelete }) {
    const onDragStart = (event) => {
        event.dataTransfer.setData("todo", JSON.stringify(todo));
    };

    return (
        <li
            id={todo.id}
            draggable="true"
            onDragStart={onDragStart}
            style={{
                dispaly: "flex",
            }}
            aria-label="todo item"
        >
            <input
                type="checkbox"
                id="todo"
                checked={todo.status === TODO_STATUS.completed}
                onChange={onToggle}
            />
            <label htmlFor="todo">{todo.text}</label>
            <button onClick={onDelete}>
                <FaRegTrashCan />
            </button>
        </li>
    );
}

export default TodoItem;
