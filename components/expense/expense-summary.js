export default function ExpenseSummary({ expenses }) {
    const result = expenses.reduce(
        (acc, expense) => {
            acc.totalExpense += expense.amount;
            acc.count = expenses.length;
            return acc;
        },
        { totalExpense: 0, count: 0 },
    );
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const monthlyExpenses = expenses
        .filter((expense) => {
            const expenseDate = new Date(expense.date);
            return (
                expenseDate.getMonth() === currentMonth &&
                expenseDate.getFullYear() === currentYear
            );
        })
        .reduce((sum, expense) => (sum += expense.amount), 0);

    return (
        <>
            <div>
                <p>Total Expense: {result.totalExpense}</p>
                <p>Expenses: {result.count}</p>
                <p>Monthly Expenses: {monthlyExpenses}</p>
            </div>
        </>
    );
}
