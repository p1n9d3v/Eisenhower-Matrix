import TodoItem from "components/TodoItem";
import Space from "components/ui/Space";
import { EisenContext } from "context/eisenContext";
import { useContext, useEffect, useRef } from "react";
import styles from "./index.module.css";

function EisenhowerContainer({ title }) {
    const { state, dispatch } = useContext(EisenContext);

    const ref = useRef();

    const onDropOver = (event) => {
        event.preventDefault();
    };

    const onDrop = (event) => {
        const id = event.dataTransfer.getData("id");
        dispatch({
            type: "MOVE",
            todo: {
                id,
            },
            category: title,
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
                    {Object.values(state)
                        .filter((state) => state.category === title)
                        .map((todo) => (
                            <TodoItem key={todo.id} todo={todo} />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default EisenhowerContainer;
