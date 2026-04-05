import ExpenseSummary from "@/components/expense/expense-summary";
import ExpenseList from "@/components/expense/expense-list";
import AddExpense from "@/components/expense/add-expense";
import { getCurrentUser } from "@/lib/auth";
import { getExpenses } from "@/lib/expenses";
import { redirect } from "next/navigation";
import classes from "./page.module.css";

export default async function DashboardPage() {
    const user = await getCurrentUser();
    if (!user) {
        redirect("/login");
    }

    const expenses = getExpenses(user.id);

    return (
        <div className={classes.page}>
            <main className={classes.main}>
                <ExpenseSummary expenses={expenses} />
                <div className={classes.toolbar}>
                    <p className={classes.sectionTitle}>Your Expenses</p>
                    <AddExpense />
                </div>
                <ExpenseList expenses={expenses} />
            </main>
        </div>
    );
}
