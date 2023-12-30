import Header from "layout/Header";
import Sidebar from "layout/Sidebar";
import { Outlet } from "react-router-dom";
import styles from "./index.module.css";

function Layout() {
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

export default Layout;
