"use client";

import HomePage from "@/components/HomePage";
import { fetchUser } from "@/utils/fetchUser";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

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

  return (
    <HomePage users={users} page={page} onNext={handleNext} onPrev={handlePrev} />
  );
}
