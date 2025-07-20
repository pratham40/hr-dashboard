"use client";
import { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (user) => {
    setBookmarks((prev) => {
        return [...prev,user]
    });
  };

  const removeBookmark = (id) => {
    setBookmarks(prev => prev.filter(u => u.id !== id));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
}

export const useBookmarks = () => useContext(BookmarkContext);
