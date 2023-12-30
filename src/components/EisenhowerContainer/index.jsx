import TodoItem from "components/TodoItem";
import Space from "components/ui/Space";
import { TodoContext } from "context/todoContext";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

function EisenhowerContainer({ title }) {
    const [eisenTodo, setEisenTodo] = useState([]);
    const { dispatch } = useContext(TodoContext);

    const ref = useRef();

    const onDropOver = (event) => {
        event.preventDefault();
    };
    const onDrop = (event) => {
        const todo = JSON.parse(event.dataTransfer.getData("todo"));
        setEisenTodo((prev) => [...prev, todo]);
        dispatch({
            type: "DELETE",
            payload: {
                id: todo.id,
            },
        });
    };

    useEffect(() => {
        let dragNDrop = null;
        if (ref.current) {
            dragNDrop = ref.current;
            dragNDrop.addEventListener("dragover", onDropOver);
            dragNDrop.addEventListener("drop", onDrop);
        }

        return () => {
            if (dragNDrop) {
                dragNDrop.removeEventListener("dragover", onDrop);
                dragNDrop.removeEventListener("drop", onDropOver);
            }
        };
    }, []);

    return (
        <div ref={ref} className={styles.container} data-title={title}>
            <div className={styles.title}>{title}</div>
            <Space height={8} />
            <div className={styles.content}>
                <ul>
                    {eisenTodo.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EisenhowerContainer;
