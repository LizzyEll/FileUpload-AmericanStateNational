import { Poppins } from "next/font/google";
import "./topstyle.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
    title: "Uploadz",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={poppins.className}>{children}</body>
        </html>
    );
}
