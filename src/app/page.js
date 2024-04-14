import styles from "./page.module.css";
import Topnav from "@/templates/topnav/topnav.js";

export default function Home() {
    return ( 
        <main className={styles.main}>
            <Topnav loggedIn={true}/>
        </main>
    );
}
