"use client";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Button } from "@/components/ui/button";
import Tasks from "@/components/taskmaster/tasks";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Some Header</h1>
      <Button>Hi</Button>
      <Tasks />
    </main>
  );
}
