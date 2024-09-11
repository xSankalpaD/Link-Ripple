"use client";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import UserHeader from "../parts/UserHeader";
import LinkBox from "../parts/LinkBox";
import { useUser } from "@/contexts/userContext";
import { useRouter } from "next/navigation";

const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;

const Dashboard = () => {
  const router = useRouter()

  const [links, setLinks] = useState(0);
  const { userData, setUserData } = useUser();

  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken")) {
      router.push("/login");
      toast("You must be logged in to access the dashboard.");
      return;
    }

    fetch(`${backendLink}/get/dashboard`, {
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
          const userData = data.user
          setUserData(userData);
          setLinks(userData?.links.length);
          localStorage.setItem("userHandle", data.userData.handle);
        } else {
          return toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [router, setUserData]);


  return (
    <>
      <div className="w-full h-full flex flex-col flex-grow">
        <UserHeader userData={userData} />
        <main className="flex flex-col justify-center">
          <section className="flex flex-row items-center justify-center pt-4">
            <LinkBox
              lbTitle="Links"
              lbNumber={links}
              lbSvg="url"
              lbTheme="red"
            />
          </section>
        </main>
      </div>
    </>
  );
};

export default Dashboard;