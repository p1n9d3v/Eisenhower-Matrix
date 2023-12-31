import { useContext, useState } from "react";
import styles from "./index.module.css";
import { MdPlaylistAdd } from "react-icons/md";
import { EisenContext } from "context/eisenContext";

function AddTodoForm() {
    const [text, setText] = useState("");
    const { dispatch } = useContext(EisenContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const trimText = text.trim();
        if (!trimText) return;

        dispatch({
            type: "ADD",
            todo: {
                text: trimText,
            },
        });
        setText("");
    };

    return (
        <form aria-label="add todo" onSubmit={onSubmit}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add new todo here..."
                />
                <button
                    type="submit"
                    className={styles.button}
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <MdPlaylistAdd
                        style={{
                            width: "28px",
                            height: "28px",
                        }}
                    />
                </button>
            </div>
        </form>
    );
}

export default AddTodoForm;
