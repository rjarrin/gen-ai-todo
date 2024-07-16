"use client";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import Tasks from "@/components/taskmaster/tasks";
import { signInAction } from "@/actions/auth-action";
import UserProfile from "@/components/taskmaster/userprofile";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Task Master AI</h1>
      <UserProfile />
      <Tasks />
    </main>
  );
}
