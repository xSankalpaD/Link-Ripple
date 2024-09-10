"use client";

import Link from 'next/link'
import React, { useState } from 'react'

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <>
      <nav className=" border-gray-200 bg-black h-[125px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-8">
          <Link href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              className="h-8 sm:h-14"
              alt="Company Logo"
            />
          </Link>
          <button
            onClick={toggleMobileMenu}
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`${
              mobileMenuOpen ? "block bg-gray-800 shadow-lg rounded-md p-4 z-10" : "hidden"
            } w-full md:block md:w-auto focus:outline-none transition-all duration-300 ease-in-out`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
              <li>
                <Link
                  href="/"
                  className="text-xl block py-2 pl-3 pr-4 text-white rounded md:p-0 hover:text-indigo-300"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-xl block py-2 pl-3 pr-4 text-white rounded md:border-0 hover:text-indigo-300 md:p-0"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-xl block py-2 pl-3 pr-4 text-white rounded md:border-0 hover:text-indigo-300 md:p-0 "
                >
                  Log In
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-xl block py-2 pl-3 pr-4 text-white rounded md:border-0 hover:text-indigo-300 md:p-0 "
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar