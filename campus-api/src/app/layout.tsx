import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Campus API | Plateforme Intelligente d'Assistance Académique",
  description: "Plateforme moderne d'assistance académique basée sur l'IA - ENSA Tétouan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.className}>
      <body className="antialiased selection:bg-secondary selection:text-black">
        {/* Background Decorative Orbs */}
        <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-900/20 blur-[120px] -z-10 animate-pulse-glow pointer-events-none"></div>
        <div className="fixed bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] rounded-full bg-secondary/10 blur-[100px] -z-10 animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
        <div className="fixed top-[40%] right-[20%] w-[15vw] h-[15vw] rounded-full bg-danger/10 blur-[80px] -z-10 animate-float pointer-events-none"></div>
        
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-64 p-8 relative overflow-hidden min-h-screen">
            <div className="max-w-7xl mx-auto backdrop-blur-sm">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
