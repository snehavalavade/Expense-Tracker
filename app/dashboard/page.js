import ExpenseSummary from "@/components/expense/expense-summary";
import { getCurrentUser } from "@/lib/auth";
import { getExpenses } from "@/lib/expenses";
import AddExpense from "@/components/expense/add-expense";
import { redirect } from "next/dist/server/api-utils";

export default async function DashboardPage() {
    const user = await getCurrentUser();
    if (!user) redirect("/login");
    const expenses = getExpenses(user.id);

    return (
        <>
            <header>
                <h1>Welcome {user.name}!</h1>
            </header>
            <main>
                <ExpenseSummary expenses={expenses} />
                <div>
                    <AddExpense />
                </div>
            </main>
        </>
    );
}
