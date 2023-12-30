import styles from "./index.module.css";
function TodoFilter({ filters, onFilter }) {
    return (
        <div className={styles.container}>
            {filters.map((filter) => (
                <button
                    key={filter}
                    data-filter={filter}
                    onClick={() => onFilter(filter)}
                    className={styles.button}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

export default TodoFilter;
