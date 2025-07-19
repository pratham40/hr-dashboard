"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

function NavBar() {
    const { data: session } = useSession()

    return (
        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
            <div className="flex items-center gap-8">
                <Link href="/" className="text-2xl font-bold text-blue-700 tracking-tight hover:text-blue-900 transition">
                    HR Dashboard
                </Link>
                <div className="flex gap-6 ml-6">
                    <Link href="/bookmarks" className="text-gray-600 hover:text-blue-700 font-medium transition">
                        Bookmarks
                    </Link>
                    <Link href="/analytics" className="text-gray-600 hover:text-blue-700 font-medium transition">
                        Analytics
                    </Link>
                </div>
            </div>
            <div>
                {session ? (
                    <div className="flex items-center gap-4">
                        <span className="text-gray-700 font-semibold px-3 py-1 rounded bg-gray-100">
                            {session.user?.name}
                        </span>
                        {session.user?.image && (
                            <Image
                                src={session.user.image}
                                alt="User Avatar"
                                width={40}
                                height={40}
                                className="rounded-full"
                            />
                        )}
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                            onClick={() => signOut()}
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                        onClick={() => signIn("google")}
                    >
                        Sign In
                    </button>
                )}
            </div>
        </nav>
    )
}

export default NavBar