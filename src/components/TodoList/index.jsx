import { useState } from "react";
function TodoList({ todos }) {
    return (
        <section>
            <ul>
                {todos.map((todo) => (
                    <li>{todo.text}</li>
                ))}
            </ul>
        </section>
    );
}

export default TodoList;
