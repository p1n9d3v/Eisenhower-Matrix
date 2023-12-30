import { useState } from "react";
import styles from "./index.module.css";
import { MdPlaylistAdd } from "react-icons/md";

function AddTodoForm({ onAddTodo }) {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const trimText = text.trim();
        if (!trimText) return;

        onAddTodo(trimText);
        setText("");
    };

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <form aria-label="add todo" onSubmit={onSubmit}>
            <div className={styles.inputContainer}>
                <input
                    className={styles.input}
                    type="text"
                    value={text}
                    onChange={onChange}
                    placeholder="Add new todo here..."
                />
                <button type="submit" className={styles.button}>
                    <MdPlaylistAdd
                        style={{
                            width: "24px",
                            height: "24px",
                        }}
                    />
                </button>
            </div>
        </form>
    );
}

export default AddTodoForm;
