import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className='absolute bottom-5 left-1/2 -translate-x-1/2'>
      <Link className="flex flex-row items-center " target="_blank" href="/">
        <img className='hover:scale-105 transition-all duration-400' src="/images/logo.png"/>
        <h5 className='text-indigo-400 pl-3 font-bold hover:text-indigo-300 transition-all duration-400 '>Try It </h5>
      </Link>
      
    </footer>
  )
}

export default Footer