import Head from "next/head";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
    
    function submit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const email = formData.get("email");
        const password = formData.get("password");
        fetch("/api/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return res.json().then(json => {
                throw new Error(json.message);
            });
        }).then(data => {
            console.log(data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("email", data.email);
            window.location.href = "/dashboard";
        }).catch(err => {
            console.error(err);
        });
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
                <div className={`box`}>
                    <h1>Uploadz - Log in</h1>
                    <form onSubmit={submit} id={styles.form} method="POST">
                        <label>
                            <input className={styles.input} type="text" name="email" placeholder="Email"/>
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
