import React from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';


const ShareButton = () => {
    const router = useRouter();
    const copyLink = () => {
        //its part of JS clipboard API
        navigator.clipboard.writeText(`https://link-ripple-backend.onrender.com/${router.query.handle}`);
        toast('Copied to Clipboard')
    }
    
    return (
        <>
        <div className="absolute cursor-pointer bottom-10 left-10 bg-indigo-200 p-2 rounded-md z-10 shadow-md border-2 border-indigo-400 flex items-center gap-2" 
         onClick={copyLink}>
      <img className="w-4" src="/svg/share.svg" alt="share" /> 
      <span className="text-black">Share!</span>
    </div>
        </>
  )
}

export default ShareButton