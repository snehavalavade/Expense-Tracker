import ExpenseCard from "./expense-card";
import classes from "@/app/dashboard/page.module.css";

export default function ExpenseList({ expenses }) {
    if (expenses.length === 0) {
        return (
            <div className={classes.emptyState}>
                <p>No expenses yet. Add your first expense!</p>
            </div>
        );
    }

    return (
        <ul className={classes.expenseList}>
            {expenses.map((expense) => (
                <li key={expense.id}>
                    <ExpenseCard
                        id={expense.id}
                        title={expense.title}
                        date={expense.date}
                        category={expense.category}
                        amount={expense.amount}
                    />
                </li>
            ))}
        </ul>
    );
}
