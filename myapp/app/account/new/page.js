'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineFileImage } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSession } from 'next-auth/react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Create = () => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState("Suv")
    const [imageUrl, setImageUrl] = useState('')
    const [extraInfo, setExtraInfo] = useState('')
    const [price, setPrice] = useState('')
    const [pickUpDate, setPickUpDate] = useState(null);
    const [dropOffDate, setDropOffDate] = useState(null);
    const [seats, setSeats] = useState('')

    const { data: session, status } = useSession()
    const router = useRouter()

    if (status === 'loading') {
        return <p>Loading...</p>
    }

    if (status === 'unauthenticated') {
        return <p className={classes.accessDenied}>
            Access Denied
        </p>
    }
    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!imageUrl || !title || !category || !desc){
            toast.error("All fields are required")
            return
        }

        try {

          const res = await fetch(`http://localhost:3000/api/ride`, {
            headers: {
               'Content-Type': 'application/json',
               'Authorization': `Bearer ${session?.user?.accessToken}`
            },
            method: 'POST',
            body: JSON.stringify({title,desc,category,imageUrl, extraInfo, price, pickUp: pickUpDate.toString(), dropOff: dropOffDate.toString(), seats, username: session?.user?.email})
          })

          if(!res.ok){
            throw new Error("Error occured")
          }

          const ride = await res.json()

          router.push(`/`)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <section>
        <h2>Add Ride</h2>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            onChange={(e) => setDesc(e.target.value)}
            required
          />
        </div>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Suv">Suv</option>
                <option value="Sports">Sports</option>
                <option value="Luxury">Luxury</option>
                <option value="Sedan">Sedan</option>
                <option value="Electric">Electric</option>
            </select>

            <div>
          <label>Image URL:</label>
          <input
            type="text"
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>ExtraInfo:</label>
          <textarea
            onChange={(e) => setExtraInfo(e.target.value)}
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Seats:</label>
          <input
            type="number"
            onChange={(e) => setSeats(e.target.value)}
            required
          />
        </div>
        <div>
        <label>Pickup Date:</label>
        <DatePicker
            selected={pickUpDate}
            onChange={(date) => setPickUpDate(date)}
            showTimeSelect
            type="text"
            timeIntervals={15}
            dateFormat="MMMM d"
        />
        </div>
        <div>
        <label>Dropoff Date:</label>
        <DatePicker
            selected={dropOffDate}
            type="text"
            onChange={(date) => setDropOffDate(date)}
            showTimeSelect
            timeIntervals={15}
            dateFormat="MMMM d"
        />
        </div>


        <button type='submit'>Add Ride</button>
        </form>
                    <ToastContainer />

    </section>
  )
}

export default Create