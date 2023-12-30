import { FaRegTrashCan } from "react-icons/fa6";
import { TODO_STATUS } from "constant";
import styles from "./index.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { SlPencil } from "react-icons/sl";
import { FaPlus } from "react-icons/fa6";

function TodoItem({ todo, onToggle, onDelete }) {
    const [openMore, setOpenMore] = useState(false);
    const activeRef = useRef();

    const onDragStart = (event) => {
        event.dataTransfer.setData("todo", JSON.stringify(todo));
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                activeRef.current &&
                !activeRef.current.contains(event.target)
            ) {
                setOpenMore(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeRef]);

    return (
        <li
            draggable="true"
            onDragStart={onDragStart}
            className={styles.container}
            aria-label="todo item"
        >
            <input
                type="checkbox"
                id={todo.id}
                checked={todo.status === TODO_STATUS.completed}
                onChange={onToggle}
            />
            <label htmlFor={todo.id}>
                <RiCheckboxCircleLine className={styles.checkbox} />
            </label>
            <div className={styles.text}>
                <label htmlFor={todo.id}>{todo.text}</label>
            </div>
            <button onClick={() => setOpenMore(!openMore)}>
                {openMore ? (
                    <IoCloseSharp className={styles.more} />
                ) : (
                    <IoMdMore className={styles.more} />
                )}
            </button>
            {openMore && (
                <div ref={activeRef} className={styles.action}>
                    <button>
                        <SlPencil />
                    </button>
                    <button onClick={onDelete}>
                        <FaRegTrashCan />
                    </button>
                </div>
            )}
        </li>
    );
}

export default TodoItem;
