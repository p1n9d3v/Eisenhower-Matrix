import { TODO_STATUS } from "constant";
import { FilterContext } from "context/filterContext";
import { useContext } from "react";
import styles from "./index.module.css";

function TodoFilter() {
    const { dispatch } = useContext(FilterContext);

    return (
        <div className={styles.container}>
            {Object.keys(TODO_STATUS).map((filter) => (
                <button
                    key={filter}
                    data-filter={filter}
                    onClick={() => {
                        dispatch({
                            type: filter,
                        });
                    }}
                    className={styles.button}
                    style={{
                        textTransform: "capitalize",
                    }}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;
