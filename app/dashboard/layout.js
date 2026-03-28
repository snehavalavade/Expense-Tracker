import MainHeader from "@/components/layout/main-header";

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
