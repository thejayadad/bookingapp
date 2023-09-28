'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import {signIn, signOut, useSession} from 'next-auth/react'

const Navbar = () => {
  const {data: session} = useSession()

  return (
    <div>
    <div className='flex justify-between py-12 px-4'>
      <h2 >
        <Link href="/">PimpTheRide</Link>
      </h2>
      <ul >
        {
          session?.user
            ? (
              <div>
                { (
                  <div >
                    <Link className='mr-4' href='/account'>Account</Link>
                    <button onClick={() => {signOut()}} >Logout</button>
                  </div>
                )}
              </div>
            )
            : (
              <>
              <Link href='/login'>Login</Link>
                <Link href='/register'>Register</Link>
              </>
            )
        }
      </ul>
    </div>
  </div>

  )
}

export default Navbar