import db from "./db";

export function getExpenses(userId) {
    return db.prepare("SELECT * FROM expenses WHERE user_id = ?").all(userId);
}

export async function saveExpense(expense) {
    return db
        .prepare(
            `
        INSERT INTO expenses
        (user_id, title, amount, category, date) 
        VALUES(@user_id, @title, @amount, @category, @date)`,
        )
        .run(expense);
}

export function deleteUserExpense(id, userId) {
    db.prepare("DELETE FROM expenses WHERE id = ? AND user_id = ?").run(
        id,
        userId,
    );
}
