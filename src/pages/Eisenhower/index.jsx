import EisenhowerContainer from "components/EisenhowerContainer";
import styles from "./index.module.css";

function Eisenhower() {
    return (
        <div className={styles.container}>
            <div className={styles.eisenhower}>
                <EisenhowerContainer title={"do"} />
                <EisenhowerContainer title={"schedule"} />
                <EisenhowerContainer title={"delegate"} />
                <EisenhowerContainer title={"delete"} />
            </div>
        </div>
    );
}

export default Eisenhower;
