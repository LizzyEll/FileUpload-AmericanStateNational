import Head from "next/head";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
    
    function submit(e) {
        console.log(e);
    }

    return (
        <>
            <Head>
                <title>Uploadz</title>
                <meta
                    name="description"
                    content="American State Assembly upload site."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main className={poppins.className}>
                <div className={styles.box}>
                    <h1>Uploadz - Log in</h1>
                    <form action="/api/login" id={styles.form} method="POST">
                        <label>
                            <input className={styles.input} type="text" name="username" placeholder="Username"/>
                        </label>
                        <label>
                            <input className={styles.input} type="password" name="password" placeholder="Password"/>
                        </label>
                        <button className={styles.input} type="submit">Log in</button>
                    </form>
                </div>
            </main>
        </>
    );
}
