'use client'
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaBook, FaCar } from "react-icons/fa";



const AccountNavbar = () => {
    const { data: session, status } = useSession()
    const router = useRouter()


    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p>
            Access Denied
        </p>
    }
  return (
    <header className="flex justify-around items-center px-4">
      <h1 className="cursor-pointer">Hello, {session.user.email}!</h1>
      <nav className="flex">
      <Link className="text-sm mr-2 flex items-center px-2 py-3
          text-white bg-purple-400 rounded-sm hover:bg-purple-600 transition duration-300 ease-in-out"
       href="/account/bookings">
        <span className="mr-1 text-xl text-white"><FaBook  /></span>
        Bookings</Link>
      <Link className="text-sm mr-2 flex items-center px-2 py-3
       text-white bg-pink-400 rounded-sm hover:bg-purple-600 transition duration-300 ease-in-out"
      href="/account/ride">
       <span className="mr-1 text-xl text-white"><FaCar  /></span>
        Rides</Link>
      </nav>
    </header>
  )
}

export default AccountNavbar