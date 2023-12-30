import EisenhowerContainer from "components/EisenhowerContainer";
import styles from "./index.module.css";

function Eisenhower() {
    return (
        <div className={styles.container}>
            <div className={styles.eisenhower}>
                <EisenhowerContainer title={"Do"} />
                <EisenhowerContainer title={"Schedule"} />
                <EisenhowerContainer title={"Delegate"} />
                <EisenhowerContainer title={"Delete"} />
            </div>
        </div>
    );
}

export default Eisenhower;
