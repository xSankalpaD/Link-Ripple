"use client";

import React, { useEffect, useState, useContext } from "react";
import { toast } from "react-toastify";
import UserHeader from "../parts/UserHeader";
import LinkBox from "../parts/LinkBox";
import { useUser } from "@/contexts/userContext";

const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;

const Dashboard = () => {
  const [data, setData] = useState<any>({});
  const { userData, setUserData } = useUser();

  useEffect((): any => {
    // if (!localStorage.getItem("LinkTreeToken")) {
    //   return (window.location.href = "/login");
    // }
      
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
        if (data.status === "error") {
          return toast.error("Error happened");
        }
        setData(data.userData);
        setUserData(data.userData);
        localStorage.setItem("userHandle", data.userData.handle);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <div className="w-full h-full flex flex-col flex-grow">
        <UserHeader userData={userData} />
        <main className="flex flex-col justify-center">
          <section className="flex flex-row items-center justify-center pt-4">
            <LinkBox
              lbTitle="Links"
              lbNumber={data?.links}
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