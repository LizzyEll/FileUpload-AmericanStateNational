import { PrismaClient } from "@prisma/client";
import { createHash } from 'crypto';

export default async function request(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({ message: "Wrong Method: Please use POST." });
    }

    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ message: "Missing username or password." });
    }
    const hashedPassword = createHash('sha256').update(password).digest('base64');
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
        where: {
            email: email,
            passwordHash: hashedPassword
        }
    }).then(user => {
        return user;
    }).catch(err => {
        console.error(err);
        res.send(500).json({ message: "Internal server error." });
    });

    if (user) {
        res.status(200).json({ message: "Success!", token: user.id, email: user.email });
    } else {
        res.status(401).json({ message: "Invalid username or password." });
    }
}