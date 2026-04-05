"use client";
import { login } from "@/lib/actions";
import { useActionState } from "react";
import Link from "next/link";
import classes from "./login.module.css";

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(login, {
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
                        <h1>Welcome back</h1>
                        <p>Sign in to your account</p>
                    </div>

                    <form action={formAction}>
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
                                placeholder="••••••••"
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
                            {isPending ? "Signing in..." : "Sign in"}
                        </button>
                    </form>

                    <div className={classes.divider} />

                    <p className={classes.footer}>
                        Don&apos;t have an account?{" "}
                        <Link href="/signup">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
