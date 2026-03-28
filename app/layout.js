import "./globals.css";

export const metadata = {
    title: "SpendWise",
    description: "Track your daily expenses",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
