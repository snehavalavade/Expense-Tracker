"use client";
import { login } from "@/lib/actions";
import { useActionState } from "react";

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(login, {
        message: null,
    });
    return (
        <>
            <header>
                <h1>Login</h1>
            </header>
            <main>
                <form action={formAction}>
                    <div>
                        <p>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </p>
                        <p>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                            />
                        </p>
                    </div>
                    {state?.message && <p>{state.message}</p>}
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </main>
        </>
    );
}
