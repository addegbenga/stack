import type { Metadata } from "next";
import { Raleway, Space_Grotesk } from "next/font/google";
import "../styles/global.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Mainstack | transactions",
  description: "Transactions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${space.variable} font-sans`}>
        <Sidebar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
