"use client";

import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import { useUser } from '@/contexts/userContext';
import UserHeader from '../parts/UserHeader';
import { useRouter } from 'next/navigation';

const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;

const Profile = () => {
  const router = useRouter();
  const { userData, setUserData } = useUser();

  const [social, setSocial] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    linkedin: "",
    github: ""
  })

  const [currentName, setCurrentName] = useState("");
  const [currentBio, setCurrentBio] = useState("");
  const [currentAvatar, setCurrentAvatar] = useState(
    "https://cdn-icons-png.flaticon.com/128/10542/10542486.png"
  );

  const handleSocial = (event) => {
    setSocial({
      ...social,
      [event.target.id]: event.target.value
    })
  }

  const saveProfile = (event) => {
    event.preventDefault();
    fetch(`${backendLink}/save/profile`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
        name: currentName,
        bio: currentBio,
        avatar: currentAvatar
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          return toast.error(data.error);
        }
        setUserData(data.user);
        toast.success("Profile saved successfully");
      });
  };

  const saveSocials = (event) => {
    event.preventDefault();
    fetch(`${backendLink}/save/socials`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
        socials: social
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          return toast.error(data.error);
        }
        setUserData(data.user);
        toast.success("Socials saved successfully");
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) {
      return router.push("/login");
    }

    fetch(`${backendLink}/load/user-data`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken")
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          const userData = data.user;
          setUserData(userData)
          if (userData) {
            if (userData.name) {
              setCurrentName(userData.name);
            }
            if (userData.bio) {
              setCurrentBio(userData.bio);
            }
            if (userData.avatar) {
              setCurrentAvatar(userData.avatar);
            }
          }
        } else {
          return toast.error(data.error);
        }
      });
  }, [setUserData, router]);

  

  return (
    <>
      <div>
        <UserHeader userData={userData} />
        <main>
          <section>
            <div>
              <h4 className="font-bold text-center mb-5">Edit profile</h4>
              <div>
                <form
                  onSubmit={saveProfile}
                  className="flex flex-col justify-center items-center"
                >
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/user.svg" alt="" />
                    <input
                      value={currentName}
                      onChange={(e) => setCurrentName(e.target.value)}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Set a Name"
                      required
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/bio.svg" alt="" />
                    <input
                      value={currentBio}
                      onChange={(e) => setCurrentBio(e.target.value)}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter a bio"
                      required
                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/img.svg" alt="" />
                    <input
                      value={currentAvatar}
                      onChange={(e) => setCurrentAvatar(e.target.value)}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Image link for Profile Picture"

                    />
                    <img
                      className="w-10 rounded-full border-2 border-white shadow-md"
                      src={currentAvatar}
                      alt="avatar"
                    />
                  </span>
                  <input
                    className="bg-green-500 w-32 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer text-white"
                    type="submit"
                    value="Save Profile"
                  />
                </form>
              </div>
            </div>
            <div className="mt-14">
              <h4 className="font-bold text-center mb-5">Edit Socials</h4>
              <div>
                <form
                  onSubmit={saveSocials}
                  className="flex flex-col justify-center items-center"
                >
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/facebook.svg" alt="" />
                    <input
                      id="facebook"
                      value={social?.facebook}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Facebook ID"

                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/insta.svg" alt="" />
                    <input
                      id="instagram"
                      value={social?.instagram}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Instagram ID"

                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/twitter.svg" alt="" />
                    <input
                      id="twitter"
                      value={social?.twitter}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Twitter ID"

                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/linkedin.svg" alt="" />
                    <input
                      id="linkedin"
                      value={social?.linkedin}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Linkedin ID"

                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/git.svg" alt="" />
                    <input
                      id="github"
                      value={social?.github}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter Github ID"

                    />
                  </span>
                  <span className="flex flex-row mb-3 w-11/12 m-auto shadow-md border-2 px-3 py-2 rounded-md focus:outline-none">
                    <img className="w-6 mr-2" src="/svg/youtube.svg" alt="" />
                    <input
                      id="youtube"
                      value={social?.youtube}
                      onChange={handleSocial}
                      className="focus:outline-none w-full"
                      type="text"
                      placeholder="Enter YouTube ID @"

                    />
                  </span>
                  <input
                    className="bg-green-500 w-32 px-4 py-2 rounded-md border-2 border-green-800 shadow-md cursor-pointer mb-10 text-white"
                    type="submit"
                    value="Save Socials"
                  />
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Profile;