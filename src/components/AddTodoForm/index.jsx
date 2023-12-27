import { TodoContext } from "context/todoContext";
import { useContext, useState } from "react";

function AddTodoForm() {
    const [text, setText] = useState("");
    const { dispatch } = useContext(TodoContext);

    const onSubmit = (e) => {
        e.preventDefault();
        const trimText = text.trim();
        if (!trimText) return;

        dispatch({
            type: "ADD",
            text: trimText,
        });
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

export default AddTodoForm;
