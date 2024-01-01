import Header from "layout/Header";
import Sidebar from "layout/Sidebar";
import styles from "./index.module.css";

function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
        </div>
    );
}

export default Layout;
