import TodoItem from "components/TodoItem";
import Space from "components/ui/Space";
import { EisenContext } from "context/eisenContext";
import { useContext, useEffect, useRef, useState } from "react";
import styles from "./index.module.css";

function EisenhowerContainer({ title }) {
    const { state, dispatch } = useContext(EisenContext);
    const [intersectId, setIntersectId] = useState("");

    const dropZoneRef = useRef();
    const contentZoneRef = useRef();

    const onDragEnter = (event, id) => {
        setIntersectId(id);
    };

    const isInsideZone = (event) => {
        const contentZone = contentZoneRef.current.getBoundingClientRect();
        const zonePosition = {
            x: {
                start: contentZone.x,
                end: contentZone.x + contentZone.width,
            },
            y: {
                start: contentZone.y,
                end: contentZone.y + contentZone.height,
            },
        };
        return (
            event.clientX >= zonePosition.x.start &&
            event.clientX <= zonePosition.x.end &&
            event.clientY >= zonePosition.y.start &&
            event.clientY <= zonePosition.y.end
        );
    };

    useEffect(() => {
        const onDropOver = (event) => {
            event.preventDefault();
        };

        const onDrop = (event) => {
            const todo = JSON.parse(event.dataTransfer.getData("id"));
            dispatch({
                type: "MOVE",
                todo: {
                    ...todo,
                    category: title,
                },
                intersectId: isInsideZone(event) ? intersectId : "",
                category: title,
            });
            setIntersectId("");
        };

        let dragNDrop = null;
        if (dropZoneRef.current) {
            dragNDrop = dropZoneRef.current;
            dragNDrop.addEventListener("dragover", onDropOver);
            dragNDrop.addEventListener("drop", onDrop);
        }

        return () => {
            if (dragNDrop) {
                dragNDrop.removeEventListener("dragover", onDrop);
                dragNDrop.removeEventListener("drop", onDrop);
            }
        };
    }, [intersectId]);

    return (
        <div ref={dropZoneRef} className={styles.container} data-title={title}>
            <div className={styles.title}>{title}</div>
            <Space height={8} />
            <div className={styles.content}>
                <ul ref={contentZoneRef}>
                    {Object.values(state)
                        .filter((todo) => todo.category === title)
                        .map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onDragEnter={(event, _) =>
                                    onDragEnter(event, todo.id)
                                }
                            />
                        ))}
                </ul>
            </div>
        </div>
    );
}

export default EisenhowerContainer;
