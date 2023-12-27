import { FaRegTrashCan } from "react-icons/fa6";
import { useContext } from "react";
import { TodoContext } from "@context/todoContext";

function TodoItem({ todo }) {
    const { dispatch } = useContext(TodoContext);
    return (
        <li
            style={{
                dispaly: "flex",
            }}
            aria-label="todo item"
        >
            <input type="checkbox" />
            {todo.text}
            <button>
                <FaRegTrashCan />
            </button>
        </li>
    );
}

export default TodoItem;
