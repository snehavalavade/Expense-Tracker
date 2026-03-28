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
