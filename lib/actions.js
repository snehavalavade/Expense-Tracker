"use server";

import { redirect } from "next/navigation";
import { createUser, getUserByEmail, verifyPassword } from "./auth";
import { cookies } from "next/headers";
import { saveExpense } from "./expenses";
import { revalidatePath } from "next/cache";

function isInvalid(text) {
    return !text || text.trim === "";
}

export async function signup(prevState, formData) {
    const user = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
    };

    if (
        isInvalid(user.name) ||
        isInvalid(user.email) ||
        isInvalid(user.password) ||
        isInvalid(user.confirmPassword) ||
        !user.email.includes("@")
    ) {
        return { message: "Invalid input" };
    }

    if (user.password !== user.confirmPassword) {
        return { message: "Passwords do not match!" };
    }

    if (user.password.length < 6) {
        return { message: "Password must be at least 6 characters." };
    }

    const existingUser = getUserByEmail(user.email);
    if (existingUser) {
        return { message: "Email already registered." };
    }

    await createUser(user.name, user.email, user.password);
    redirect("/login");
}

export async function login(prevState, formData) {
    const user = {
        email: formData.get("email"),
        password: formData.get("password"),
    };

    if (
        isInvalid(user.email) ||
        isInvalid(user.password) ||
        !user.email.includes("@")
    ) {
        return { message: "Invalid input" };
    }

    const existingUser = getUserByEmail(user.email);
    if (!existingUser) {
        return { message: "Invalid email or password." };
    }

    const passwordMatch = await verifyPassword(
        user.password,
        existingUser.password,
    );
    if (!passwordMatch) {
        return { message: "Invalid email or password." };
    }

    const cookieStore = await cookies();
    cookieStore.set("userId", String(existingUser.id));
    redirect("/dashboard");
}

export async function addExpense(prevState, formData) {
    const { getCurrentUser } = require("./auth");
    const user = await getCurrentUser();
    if (!user) redirect("/login");

    const expense = {
        user_id: user.id,
        title: formData.get("title"),
        amount: parseFloat(formData.get("amount")),
        category: formData.get("category"),
        date: formData.get("date"),
    };

    if (
        isInvalid(expense.title) ||
        isInvalid(expense.amount) ||
        isInvalid(expense.category) ||
        isInvalid(expense.date)
    ) {
        return { message: "Invalid input data!" };
    }

    await saveExpense(expense);
    revalidatePath("/dashboard");
    return { message: "Success!" };
}

export async function logout() {
    const cookieStore = await cookies();
    cookieStore.delete("userId");
    redirect("/login");
}
