"use client";

import HomePage from "@/components/HomePage";
import { fetchUser } from "@/utils/fetchUser";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const data = await fetchUser();
      if (!data || data.length === 0) {
        toast.error("No users found");
        setUsers([]);
        return;
      }
      setUsers(data);
      toast.success("Users loaded successfully");
      
    }
    loadUsers();
  }, []);

  return (
    <HomePage users={users} />
  );
}
