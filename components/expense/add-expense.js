"use client";
import { useActionState } from "react";
import { useEffect, useState } from "react";
import { addExpense } from "@/lib/actions";
import classes from "./add-expense.module.css";

export default function AddExpense() {
    const [state, formAction] = useActionState(addExpense, { message: null });
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (state.message === "Success!") {
            setIsModalOpen(false);
        }
    }, [state.message]);

    return (
        <>
            <button
                className={classes.addBtn}
                onClick={() => setIsModalOpen(true)}
            >
                + Add Expense
            </button>

            {isModalOpen && (
                <div
                    className={classes.overlay}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className={classes.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal header */}
                        <div className={classes.modalHeader}>
                            <h3>Add Expense</h3>
                            <p>Track a new expense to your account.</p>
                        </div>

                        {/* Form */}
                        <form action={formAction}>
                            <div className={classes.field}>
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="e.g. Dinner at Meghana Foods"
                                    required
                                />
                            </div>

                            <div className={classes.fieldRow}>
                                <div className={classes.field}>
                                    <label htmlFor="amount">Amount (₹)</label>
                                    <input
                                        type="number"
                                        id="amount"
                                        name="amount"
                                        placeholder="0"
                                        required
                                    />
                                </div>
                                <div className={classes.field}>
                                    <label htmlFor="date">Date</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={classes.field}>
                                <label htmlFor="category">Category</label>
                                <select id="category" name="category">
                                    <option value="Food">🍔 Food</option>
                                    <option value="Transport">
                                        🚗 Transport
                                    </option>
                                    <option value="Bills">💡 Bills</option>
                                    <option value="Shopping">
                                        🛍️ Shopping
                                    </option>
                                    <option value="Other">📦 Other</option>
                                </select>
                            </div>

                            {state.message && state.message !== "Success!" && (
                                <p className={classes.error}>{state.message}</p>
                            )}

                            <div className={classes.actions}>
                                <button
                                    type="submit"
                                    className={classes.saveBtn}
                                >
                                    Save expense
                                </button>
                                <button
                                    type="button"
                                    className={classes.cancelBtn}
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
