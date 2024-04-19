import { PrismaClient } from "@prisma/client";
import { createHash } from "crypto";

export default async function request(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Wrong Method: Please use POST." });
    }

    const { email, password, username } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Missing email or password." });
    }

    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (user) {
        res.status(400).json({ message: "User already exists." });
    } else {
        let newUser = await prisma.user
            .create({
                data: {
                    email: email,
                    passwordHash: createHash("sha256")
                        .update(password)
                        .digest("base64"),
                    name: username || "User",
                },
            })
            .then((user) => {
                res.status(200).json({
                    message: "Success!",
                    token: user.id,
                    email: user.name,
                });
            })
            .catch((err) => {
                res.status(401).json({
                    message: "Invalid username or password.",
                });
            });
    }
}
