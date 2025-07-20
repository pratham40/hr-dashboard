"use client";
import { useSession } from "next-auth/react";
import { useBookmarks } from "@/context/BookmarkContext";
import UserCard from "@/components/UserCard";

export default function Bookmarks() {
  const { data: session, status } = useSession();
  const { bookmarks, removeBookmark } = useBookmarks();

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return <p className="p-6">You must sign in to view bookmarks.</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Bookmarked Employees</h1>
      {bookmarks.length === 0 ? <p>No bookmarks yet.</p> :
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bookmarks.map(user => (
            <div key={user.id}>
              <UserCard user={user} />
              <button onClick={() => removeBookmark(user.id)} className="mt-2 btn-secondary w-full">Remove</button>
            </div>
          ))}
        </div>}
    </div>
  );
}
