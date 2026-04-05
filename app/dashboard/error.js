"use client";
import { useRouter } from "next/navigation";
import classes from "./error.module.css";

export default function Error() {
    const router = useRouter();

    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <div className={classes.iconWrapper}>⚠️</div>
                <h1 className={classes.title}>Something went wrong</h1>
                <p className={classes.message}>
                    We could not load your dashboard. Please try again.
                </p>
                <button
                    className={classes.retryBtn}
                    onClick={() => router.refresh()}
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
