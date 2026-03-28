"use client";
import { useActionState } from "react";
import { useEffect, useState } from "react";
import { addExpense } from "@/lib/actions";
import Modal from "../ui/modal";

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
            <button onClick={() => setIsModalOpen(true)}>Add Expense</button>

            {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                    <header>
                        <h3>Add Expense</h3>
                        <p>Track a new expense to your account.</p>
                    </header>
                    <main>
                        <form action={formAction}>
                            <p>
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                />
                            </p>
                            <p>
                                <label htmlFor="amount">Amount</label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    required
                                />
                            </p>
                            <p>
                                <label htmlFor="category">Category</label>
                                <select name="category">
                                    <option value="Food">Food</option>
                                    <option value="Transport">Transport</option>
                                    <option value="Bills">Bills</option>
                                    <option value="Shopping">Shopping</option>
                                    <option value="Other">Other</option>
                                </select>
                            </p>
                            <p>
                                <label htmlFor="date">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                />
                            </p>
                            {state.message && state.message !== "Success!" && (
                                <p>{state.message}</p>
                            )}
                            <div>
                                <button type="submit">Save expense</button>
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </main>
                </Modal>
            )}
        </>
    );
}
