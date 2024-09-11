import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;

const UserHeader = ({userData}) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("LinkTreeToken");
    router.push("/login");
  };

  return (
    <>
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row p-5">
          <Link href="/links">
            <button className="inline-flex w-full md:w-auto px-5 py-3 text-purple-500 font-bold hover:text-purple-700 hover:bg-purple-100 rounded-md mb-3 border-2 border-purple-500">
              <img src="/svg/url.svg" alt="url" className="w-6 mr-3" />
              Edit Links
            </button>
          </Link>
          <Link href="/profile">
            <button className="inline-flex w-full md:w-auto px-5 py-3 text-red-500 font-bold hover:text-red-700 hover:bg-red-100 rounded-md mb-3 border-2 border-red-500 md:ml-4">
              <img src="/svg/user.svg" alt="user" className="w-6 mr-3" />
              Edit profile
            </button>
          </Link>
          <div onClick={handleLogout}>
            <button className="inline-flex w-full md:w-auto px-5 py-3 text-yellow-500 font-bold hover:text-yellow-700 hover:bg-yellow-100 rounded-md mb-3 border-2 border-yellow-500 md:ml-4">
              <img src="/svg/logout.svg" alt="logout" className="w-6 mr-3" />
              Logout
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Link href={`${backendLink}/${userData?.handle}`}>
            <div className="flex flex-row">
              <div className="inline-flex mr-5 text-right items-center bg-gray-200 px-5 py-2 rounded-lg">
                <div className="text-xs md:text-md flex flex-col flex-wrap">
                  <span className="font-bold">{userData?.handle}</span>
                  <span>{userData?.role}</span>
                </div>
                <div className="user-img">
                  <img className="w-10 ml-5 rounded-full" src={userData?.avatar} alt="avatar"/>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </header>
      <h1 className="w-full text-center pt-8 text-5xl font-bold text-indigo-600">
        Welcome to your dashboard!
      </h1>
      <div className="w-full text-center pt-8 pb-12">
        <Link href={`${backendLink}/${userData?.handle}`}>
          <button className="bg-red-900 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg">
            Access your profile
          </button>
        </Link>
      </div>
    </>
  );
};

export default UserHeader