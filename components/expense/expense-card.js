import { deleteExpense } from "@/lib/actions";
import classes from "@/app/dashboard/page.module.css";

const categoryConfig = {
    Food: { icon: "🍔", className: "iconFood" },
    Transport: { icon: "🚗", className: "iconTransport" },
    Bills: { icon: "💡", className: "iconBills" },
    Shopping: { icon: "🛍️", className: "iconShopping" },
    Other: { icon: "📦", className: "iconOther" },
};

export default function ExpenseCard({ id, title, date, category, amount }) {
    const cat = categoryConfig[category] || categoryConfig.Other;

    return (
        <div className={classes.expenseCard}>
            <div
                className={`${classes.categoryIcon} ${classes[cat.className]}`}
            >
                {cat.icon}
            </div>

            <div className={classes.expenseInfo}>
                <p className={classes.expenseTitle}>{title}</p>
                <p className={classes.expenseMeta}>
                    {category} · {date}
                </p>
            </div>

            <div className={classes.expenseRight}>
                <p className={classes.expenseAmount}>
                    ₹{Number(amount).toLocaleString()}
                </p>
                <form action={deleteExpense}>
                    <input type="hidden" name="id" value={id} />
                    <button type="submit" className={classes.deleteBtn}>
                        Delete
                    </button>
                </form>
            </div>
        </div>
    );
}
