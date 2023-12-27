import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoForm({ onAdd }) {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const trimText = text.trim();
        if (!trimText) return;
        onAdd({ id: uuidv4(), text: trimText, status: "active" });
        setText("");
    };

    const onChange = (e) => {
        setText(e.target.value);
    };

    return (
        <form aria-label="add todo" onSubmit={onSubmit}>
            <input
                type="text"
                value={text}
                onChange={onChange}
                placeholder="Add new todo here..."
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoForm;
