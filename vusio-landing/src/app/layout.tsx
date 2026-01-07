import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vusio | Sovereign Grid Resilience",
  description:
    "Vusio aggregates idle battery storage and flexible compute into virtual power plants for sovereign grid resilience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="relative min-h-screen overflow-hidden bg-slate-950">
          {children}
        </div>
      </body>
    </html>
  );
}
