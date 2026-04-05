import classes from "@/app/dashboard/page.module.css";

export default function ExpenseSummary({ expenses }) {
    const totalExpense = expenses.reduce(
        (acc, expense) => acc + expense.amount,
        0,
    );

    const now = new Date();
    const monthlyExpense = expenses
        .filter((expense) => {
            const d = new Date(expense.date);
            return (
                d.getMonth() === now.getMonth() &&
                d.getFullYear() === now.getFullYear()
            );
        })
        .reduce((acc, expense) => acc + expense.amount, 0);

    const categoryTotals = expenses.reduce((acc, expense) => {
        acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
        return acc;
    }, {});

    const topCategory =
        Object.keys(categoryTotals).length > 0
            ? Object.keys(categoryTotals).reduce((a, b) =>
                  categoryTotals[a] > categoryTotals[b] ? a : b,
              )
            : "—";

    return (
        <div className={classes.summaryGrid}>
            <div className={classes.summaryCard}>
                <p className={classes.summaryLabel}>Total spent</p>
                <p className={classes.summaryValue}>
                    ₹{totalExpense.toLocaleString()}
                </p>
            </div>
            <div className={classes.summaryCard}>
                <p className={classes.summaryLabel}>This month</p>
                <p className={classes.summaryValue}>
                    ₹{monthlyExpense.toLocaleString()}
                </p>
            </div>
            <div className={classes.summaryCard}>
                <p className={classes.summaryLabel}>Expenses</p>
                <p className={classes.summaryValue}>{expenses.length}</p>
            </div>
            <div className={classes.summaryCard}>
                <p className={classes.summaryLabel}>Top category</p>
                <p className={classes.summaryValue}>{topCategory}</p>
            </div>
        </div>
    );
}
