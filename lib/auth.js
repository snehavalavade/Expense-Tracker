import db from "./db";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function createUser(name, email, password) {
    const hashedPassword = await bcrypt.hash(password, 12);

    db.prepare(
        `INSERT INTO users 
            (name, email, password)
            VALUES (@name, @email, @password)`,
    ).run({ name, email, password: hashedPassword });
}

export function getUserByEmail(email) {
    return db.prepare(`SELECT * FROM users WHERE email = ?`).get(email);
}

export async function verifyPassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}

export async function getCurrentUser() {
    const cookieStore = await cookies();
    const userId = cookieStore.get("userId")?.value;
    if (!userId) return null;
    return db
        .prepare("SELECT id, name, email FROM users WHERE id = ?")
        .get(userId);
}
