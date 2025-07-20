"use client";

import HomePage from "@/components/HomePage";
import { fetchUser } from "@/utils/fetchUser";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const session = useSession();


  useEffect(() => {
    async function loadUsers() {
      const data = await fetchUser(page);
      if (!data || data.length === 0) {
        toast.error("No users found");
        setUsers([]);
        return;
      }
      setUsers(data);
      toast.success("Users loaded successfully");

    }
    loadUsers();
  }, [page]);

  function handleNext() {
    setPage((prev) => prev + 1);
  }

  function handlePrev() {
    setPage((prev) => (prev > 1 ? prev - 1 : 1));
  }

  return session.status === "unauthenticated" ? (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Please log in to view this content</h1>
    </div>
  ) : (
    <HomePage
      users={users}
      page={page}
      onNext={handleNext}
      onPrev={handlePrev}
      session={session}
    />
  );
}
