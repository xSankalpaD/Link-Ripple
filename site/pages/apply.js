import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import {toast} from 'react-toastify'
import Link from 'next/link'

const Apply = () => {
  
  const [handle, setHandle]= useState('');
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
  const [category, setCategory] = useState('');

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleRegister = (e) => {
    e.preventDefault();
    if(!category) return toast.error("Add a category.");
    //backend call
    toast('Successfully Registered!')
  }

  return (
    <>
      {/*we need the white space so that the styles are seperated by space*/}
      <section className={styles.background + " min-h-screen flex justify-center items-center"}>{/*min h cover whole screen and center it*/}
        <div className="main">
          <div className="content border px-4 py-8 rounded-2xl shadow-md bg-white">
            <h1 className="text-2xl font-bold text-center">Join the top 1% creators</h1>
            <p className="text-center">Create Linktree for your brand</p>
            <p className='text-center py-5 font-bold text-gray-500'>Start Building here</p>
            <form onSubmit={handleRegister} className="flex flex-col gap-4 text-lg mt-5">
              <input value={handle} onChange={e=>setHandle(e.target.value)} className="shadow-md border-2 px-3 py-2 rounded-md " type="text" placeholder="Social Handle" required/>
              <input value={email} onChange={e=>setEmail(e.target.value)} className="shadow-md border-2 px-3 py-2 rounded-md " type="email" placeholder="Enter your email" required/>
              <input value={password} onChange={e=>setPassword(e.target.value)} className="shadow-md border-2 px-3 py-2 rounded-md " type="password" placeholder= 'Set a password' required/>
              
              <h5 className='text-sm text-center'>Account Type:</h5>
              <span className="flex">
                <label className="flex flex-row mr-3">
                  <input type="checkbox" className="px-2" value="Creator" checked={category==='Creator'} onChange={handleCategoryChange}/>
                  <p className="pl-2">Creator</p>
                </label>
                <label className="flex flex-row mr-3">
                  <input type="checkbox" className="px-2" value="Agency" checked={category==='Agency'} onChange={handleCategoryChange}/>
                  <p className="pl-2">Agency</p>
                </label>
                <label className="flex flex-row mr-3">
                  <input type="checkbox" className="px-2" value="Brand" checked={category==='Brand'} onChange={handleCategoryChange}/>
                  <p className="pl-2">Brand</p>
                </label>
              </span>
              <input className="bg-indigo-600 text-white py-3 rounded-lg cursor-pointer" type="submit" value="Register" />
            </form>
          </div>
          <h4 className='text-center text-white pt-5'>Already have an account? <Link href="/login" className='font-bold'>Login </Link> </h4>
        </div>
      </section>
    </>    
  
  )
}

export default Apply