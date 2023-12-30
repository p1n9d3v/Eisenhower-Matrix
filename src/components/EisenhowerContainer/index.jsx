import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

function EisenhowerContainer({ title, style }) {
    const [todos, setTodos] = useState([]);

    const ref = useRef();

    const onDropOver = (event) => {
        event.preventDefault();
    };

    const onDrop = (event) => {
        const todo = JSON.parse(event.dataTransfer.getData("todo"));
        setTodos((prev) => [...prev, todo]);
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
        <div className={styles.container} style={style}>
            <h1>{title}</h1>
            <div ref={ref}>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={`${index}-${todo.id}`}>{todo.text}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EisenhowerContainer;
