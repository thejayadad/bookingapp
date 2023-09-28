'use client'

import Link from 'next/link'
import React from 'react'
import { FaCar } from "react-icons/fa";

const Ride = () => {
  return (
    <section className='px-4 flex flex-col'>
    <div className="flex">
      <Link href="/account/new">
        <span className="flex items-center px-4 py-2 text-white bg-purple-400 rounded-sm hover:bg-purple-600 transition duration-300 ease-in-out">
          <FaCar className="mr-2" /> Add Ride
        </span>
      </Link>
    </div>
    </section>
  )
}

export default Ride