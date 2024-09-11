"use client";

import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import UserHeader from '../parts/UserHeader';
import { useUser } from '@/contexts/userContext';
import { useRouter } from 'next/navigation';

const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;

const Links = () => {
  const router = useRouter()
  const { userData, setUserData } = useUser();

  const [links, setLinks] = useState([{ url: '', title: '' }]);
  const [title] = useState('');

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...links];
    const linkToUpdate = { ...updatedLinks[index], [field]: value };
    updatedLinks[index] = linkToUpdate;
    setLinks(updatedLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { url: "", title: "" }]);
  };

  const handleRemoveLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  const saveLinks = (event) => {
    event.preventDefault();
    const linksArray = Object.values(links);
    const titlesArray = Object.values(title);
    const linksData = linksArray.map((link, index) => ({
      link,
      title: titlesArray[index]
    }));

    fetch(`${backendLink}/save/links`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem("LinkTreeToken"),
        links: linksData
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setLinks(data.newLinks)
          toast.success("Links saved successfully");
        } else {
          setLinks([{ url: '', title: '' }]);
          toast.error(data.error);
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setLinks([{ url: '', title: '' }]);
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) {
      router.push("/login");
    }

    fetch(`${backendLink}/load/links`, {
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
          setLinks(userData.links);
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
            <h1 className="text-center font-bold text-xl text-gray-600 py-10">
              Add or Customize your Links
            </h1>
            <div>
              <form onSubmit={saveLinks}>
                {links.map((link, index) => (
                  <div
                    className="flex flex-row justify-evenly my-2"
                    key={index}
                  >
                    <label>
                      URL:
                      <input
                        className="outline-none border-2 border-gray-200 shadow-md rounded-md px-2 p-1 ml-2"
                        type="text"
                        value={link.url}
                        onChange={(e) =>
                          handleLinkChange(index, "url", e.target.value)
                        }
                      />
                    </label>
                    <label>
                      Title:
                      <input
                        className="outline-none border-2 border-gray-200 shadow-md rounded-md px-2 p-1 ml-2"
                        type="text"
                        value={link.title}
                        onChange={(e) =>
                          handleLinkChange(index, "title", e.target.value)
                        }
                      />
                    </label>
                    <button
                      className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm ml-3"
                      type="button"
                      onClick={() => {
                        handleRemoveLink(index);
                      }}
                    >
                      Remove Link
                    </button>
                  </div>
                ))}
                <div className="buttons flex flex-row gap-5 my-1 py-8 px-32">
                  <button
                    className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm w-full"
                    type="button"
                    onClick={handleAddLink}
                  >
                    Add link
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm w-full"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Links