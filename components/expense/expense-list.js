import ExpenseCard from "./expense-card";

export default function ExpenseList({ expenses }) {
    return (
        <>
            {expenses.length === 0 && (
                <p>No expenses yet. Add your first expense!</p>
            )}
            <div>
                {expenses.map((expense) => (
                    <ul>
                        <li key={expense.id}>
                            <ExpenseCard
                                title={expense.title}
                                date={expense.date}
                                category={expense.category}
                                amount={expense.amount}
                            />
                        </li>
                    </ul>
                ))}
            </div>
        </>
    );
}
