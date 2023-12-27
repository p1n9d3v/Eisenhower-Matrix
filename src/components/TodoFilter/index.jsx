function TodoFilter({ filters, onFilter }) {
    return (
        <div>
            {filters.map((filter) => (
                <button onClick={() => onFilter(filter)}>{filter}</button>
            ))}
        </div>
    );
}

export default TodoFilter;
