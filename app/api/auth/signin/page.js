"use client";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen">
        <button
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
            onClick={() => signIn("google")}
        >
            Sign in with Google
        </button>
    </div>
  );
}
