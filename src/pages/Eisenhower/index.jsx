import EisenhowerContainer from "components/EisenhowerContainer";
import styles from "./index.module.css";

const eisenhowerSize = (backgroundColor) => ({
    backgroundColor,
});
function Eisenhower() {
    return (
        <div className={styles.container}>
            <div className={styles.eisenhower}>
                <EisenhowerContainer
                    title={"Do"}
                    style={eisenhowerSize("red")}
                />
                <EisenhowerContainer
                    title={"Do"}
                    style={eisenhowerSize("orange")}
                />
                <EisenhowerContainer
                    title={"Do"}
                    style={eisenhowerSize("blue")}
                />
                <EisenhowerContainer
                    title={"Do"}
                    style={eisenhowerSize("purple")}
                />
            </div>
        </div>
    );
}

export default Eisenhower;
