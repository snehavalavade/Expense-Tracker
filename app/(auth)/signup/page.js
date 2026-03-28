"use client";
import { signup } from "@/lib/actions";
import { useActionState } from "react";

export default function SignupPage() {
    const [state, formAction, isPending] = useActionState(signup, {
        message: null,
    });

    return (
        <>
            <header>
                <h1>Sign Up</h1>
            </header>
            <main>
                <form action={formAction}>
                    <div>
                        <p>
                            <label htmlFor="name">name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
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
                        <p>
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                            />
                        </p>
                    </div>
                    {state?.message && <p>{state.message}</p>}
                    <div>
                        <button>Sign up</button>
                    </div>
                </form>
            </main>
        </>
    );
}
