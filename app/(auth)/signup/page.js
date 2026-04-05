"use client";
import { signup } from "@/lib/actions";
import { useActionState } from "react";
import Link from "next/link";
import classes from "./signup.module.css";

export default function SignupPage() {
    const [state, formAction, isPending] = useActionState(signup, {
        message: null,
    });

    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <Link href="/" className={classes.logo}>
                    <div className={classes.logoIcon}>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                        >
                            <path d="M12 2v20M2 12h20" />
                        </svg>
                    </div>
                    <span className={classes.logoText}>SpendWise</span>
                </Link>

                <div className={classes.card}>
                    <div className={classes.cardHeader}>
                        <h1>Create account</h1>
                        <p>Start tracking your expenses today</p>
                    </div>

                    <form action={formAction}>
                        <div className={classes.field}>
                            <label htmlFor="name">Full name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </div>

                        <div className={classes.field}>
                            <label htmlFor="email">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="sneha@example.com"
                                required
                            />
                        </div>

                        <div className={classes.field}>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Min 6 characters"
                                required
                            />
                        </div>

                        <div className={classes.field}>
                            <label htmlFor="confirmPassword">
                                Confirm password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Repeat password"
                                required
                            />
                        </div>

                        {state?.message && (
                            <p className={classes.error}>{state.message}</p>
                        )}

                        <button
                            type="submit"
                            className={classes.submitBtn}
                            disabled={isPending}
                        >
                            {isPending
                                ? "Creating account..."
                                : "Create account"}
                        </button>
                    </form>

                    <div className={classes.divider} />

                    <p className={classes.footer}>
                        Already have an account?{" "}
                        <Link href="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
