import React, { useState } from 'react'
import styles from '../styles/apply.module.css'
import {toast} from 'react-toastify'
import Link from 'next/link'

const Apply = () => {
    
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');  
    
    const handleLogin = (e) => {
        e.preventDefault();

        //backend call
        toast('Login Successful!')  
        
        //set it back later afetr deployment
        //setEmail('');
        //setPassword(''); 
    }

    return (
        <>
        {/*we need the white space so that the styles are seperated by space*/}
        <section className={styles.background + " min-h-screen flex justify-center items-center"}>{/*min h cover whole screen and center it*/}
            <div className="main">
            <div className="content border px-4 py-8 rounded-2xl shadow-md bg-white">
                <h1 className="text-2xl font-bold text-center">You're now among the top creators</h1>
                <p className="text-center">Access your Dashboard</p>
                <p className='text-center py-5 font-bold text-gray-500'>Start Building here</p>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 text-lg mt-5">
                <input value={email} onChange={e=>setEmail(e.target.value)} className="shadow-md border-2 px-3 py-2 rounded-md " type="email" placeholder="Enter your email" required/>
                <input value={password} onChange={e=>setPassword(e.target.value)} className="shadow-md border-2 px-3 py-2 rounded-md " type="password" placeholder= 'Enter your password' required/>
                <input className="bg-indigo-600 text-white py-3 rounded-lg cursor-pointer" type="submit" value="Login" />
                </form>
                
            </div>
            <h4 className='text-center text-white pt-5'>New here? <Link href="/apply" className='font-bold'>Apply </Link> </h4>
            </div>
        </section>
        </>    
    
    )
}

export default Apply