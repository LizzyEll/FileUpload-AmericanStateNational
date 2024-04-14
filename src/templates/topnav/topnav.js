import styles from "./topnav.module.css";

export default function Topnav(loggedIn = false) {
    return (
        <div>
            <button className={styles.button}>Home</button>
            {!loggedIn && <button className={styles.button}>Sign In</button>}
            {!loggedIn && <button className={styles.button}>Sign Up</button>}
            {loggedIn ? <button className={styles.button}>Upload</button> : null}
            {loggedIn ? <button className={styles.button}>Sign Out</button> : null}
        </div>
    );
}