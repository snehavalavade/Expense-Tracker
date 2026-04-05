import MainHeader from "@/components/layout/main-header";
import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }) {
    const user = await getCurrentUser();
    if (!user) redirect("/login");
    return (
        <div>
            <MainHeader user={user} />
            {children}
        </div>
    );
}
