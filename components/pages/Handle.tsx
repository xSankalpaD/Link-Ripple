"use client";

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { toast } from 'react-toastify'
import ShareButton from '../parts/ShareButton';
import LinkTree from '../parts/LinkTree';
import SocialTree from '../parts/SocialTree';

const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;

const Handle = ({ handle }: { handle: string }) => {

  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);

  const [social, setSocial] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    github: ""
  })

  useEffect(() => {
    if (handle) {
      fetch(`${backendLink}/get/${handle}`)
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success') {
            setData(data.userData);
            setSocial(data.socials)
            setUserFound(true);
          } else if (data.status === 'error') {
            toast.error(data.error);
          }
        })
        .catch(err => {
          console.log(err);
          toast("Something went wrong.")
        })
    }
  }, [handle])


  if (!userFound) {
    return (
      <div className="flex justify-center items-center flex-grow">
        <div className="flex justify-center items-center flex-col px-3 ">
          <h1 className="font-bold text-lg">User Not found 🙁</h1>
          <p>If you're looking for a page, double check the spelling.</p>
          <p>
            To create your own Link Ripple click the link below.
            
          </p>
          <Link
            className="bg-indigo-600 p-2 m-4 rounded-lg text-white hover:bg-indigo-400 transition-all duration-500"
            href="/register"
          >
            Create Link Ripple
          </Link>

        </div>
      </div>
    );
  }

  return (
    <div>
      <ShareButton handle={handle} />
      <LinkTree data={data} />
      <SocialTree social={social} />
    </div>
  )
}

export default Handle

