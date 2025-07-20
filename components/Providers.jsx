'use client';

import { BookmarkProvider } from "@/context/BookmarkContext";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }) {
    return (
        <SessionProvider>
            <BookmarkProvider>
                {children}
            </BookmarkProvider>
        </SessionProvider>
    )
}