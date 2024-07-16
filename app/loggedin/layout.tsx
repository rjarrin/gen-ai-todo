import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers";
import { useSession } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Master AI: Your Intelligent Personal Organizer",
  description: "Effortlessly manage your to-do list with cutting-edge artificial intelligence. This innovative app not only keeps your tasks neatly arranged but also anticipates your next moves, offering smart suggestions to boost your productivity.",
};

export default async function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth();
    return <Providers session={session}>{children}</Providers>
}
