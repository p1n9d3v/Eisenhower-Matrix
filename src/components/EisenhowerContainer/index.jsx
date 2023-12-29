import styles from "./index.module.css";

function EisenhowerContainer({ title, style }) {
    return (
        <div className={styles.container} style={style}>
            <h1>{title}</h1>
        </div>
    );
}

export default EisenhowerContainer;
