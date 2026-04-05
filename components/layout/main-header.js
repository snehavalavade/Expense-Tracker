import Link from "next/link";
import { logout } from "@/lib/actions";
import classes from "@/app/dashboard/page.module.css";

export default function MainHeader({ user }) {
    return (
        <header className={classes.header}>
            <Link href="/dashboard" className={classes.logo}>
                <div className={classes.logoIcon}>
                    <svg
                        width="16"
                        height="16"
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

            <div className={classes.headerRight}>
                <span className={classes.welcomeText}>Hi, {user.name}</span>
                <form action={logout}>
                    <button type="submit" className={classes.logoutBtn}>
                        Logout
                    </button>
                </form>
            </div>
        </header>
    );
}
