import { FaRegTrashCan } from "react-icons/fa6";
import { TODO_STATUS } from "constant";
import styles from "./index.module.css";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { useContext, useEffect, useRef, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { SlPencil } from "react-icons/sl";
import { EisenContext } from "context/eisenContext";

function TodoItem({ todo, onDragEnter }) {
    const [openMore, setOpenMore] = useState(false);
    const [text, setText] = useState(todo.text);
    const [update, setUpdate] = useState(false);

    const { dispatch } = useContext(EisenContext);
    const itemRef = useRef();
    const activeRef = useRef();
    const inputRef = useRef();

    const onDragStart = (event) => {
        event.dataTransfer.setData("id", JSON.stringify(todo));
    };

    const onEnableInput = () => {
        setOpenMore(false);
        setUpdate(true);
    };

    const onUpdateSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: "UPDATE",
            todo: {
                id: todo.id,
                text: text.trim(),
            },
        });
        setUpdate(false);
    };

    const onToggleStatus = () => {
        dispatch({
            type: "STATUS",
            todo: {
                id: todo.id,
            },
        });
    };

    const onDelete = () => {
        dispatch({
            type: "DELETE",
            todo: {
                id: todo.id,
            },
        });
    };

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [update, inputRef]);

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
            ref={itemRef}
            id={todo.id}
            draggable="true"
            onDragStart={onDragStart}
            onDragEnter={onDragEnter}
            className={styles.container}
            aria-label="todo item"
        >
            <input
                type="checkbox"
                id={todo.id}
                checked={todo.status === TODO_STATUS.completed}
                onChange={onToggleStatus}
            />
            <label htmlFor={todo.id} onClick={onToggleStatus}>
                <RiCheckboxCircleLine className={styles.checkbox} />
            </label>
            <div className={styles.text}>
                {update ? (
                    <form onSubmit={onUpdateSubmit} aria-label="edit todo text">
                        <input
                            type="text"
                            ref={inputRef}
                            value={text}
                            disabled={!update}
                            onChange={(event) => setText(event.target.value)}
                        />
                        <button type="submit" hidden />
                    </form>
                ) : (
                    <label onClick={onToggleStatus} htmlFor={todo.id}>
                        {todo.text}
                    </label>
                )}
            </div>
            <button onClick={() => setOpenMore(!openMore)} aria-label="more">
                {openMore ? (
                    <IoCloseSharp className={styles.more} />
                ) : (
                    <IoMdMore className={styles.more} />
                )}
            </button>
            {openMore && (
                <div ref={activeRef} className={styles.action}>
                    <button onClick={onEnableInput} aria-label="edit">
                        <SlPencil />
                    </button>
                    <button onClick={onDelete} aria-label="delete">
                        <FaRegTrashCan />
                    </button>
                </div>
            )}
        </li>
    );
}

export default TodoItem;
