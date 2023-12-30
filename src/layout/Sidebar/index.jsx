import Todos from "components/Todos";
import styles from "./index.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <Todos />
        </div>
    );
}

export default Sidebar;
