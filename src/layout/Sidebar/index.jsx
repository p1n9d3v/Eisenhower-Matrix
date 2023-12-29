import styles from "./index.module.css";

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <nav>
                <ul>
                    <li>Home</li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;
