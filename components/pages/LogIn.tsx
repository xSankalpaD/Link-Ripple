"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

const backendLink = process.env.NEXT_PUBLIC_BACKEND_LINK;
 
const LogIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLogin = (event) => {
    event.preventDefault();

    fetch(`${backendLink}/auth/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast("You are Logged in");
          localStorage.setItem("LinkTreeToken", data.token);
          router.push("/dashboard");
        }
        else if (data.status === "not found") {
          toast.error("Try a different handle or password.");
        }
      })
      .catch((err) => {
        console.log(err)
        toast("Something went wrong.");
      });
  };

  return (
    <>
      <section className="background flex-grow w-full h-full flex items-center justify-center">
        <div className="main">
          <div className="content bg-white border-2 px-4 py-12 rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-center pb-5">
              Your next big move starts here
            </h1>
            <p className="text-center">Let’s get started!</p>
            
            <form
              onSubmit={handleLogin}
              className="flex flex-col gap-4 text-lg mt-5"
            >
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="shadow-md border-2 px-3 py-2 rounded-md focus:outline-none"
                type="email"
                placeholder="Enter your email"
                required
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="shadow-md border-2 px-3 py-2 rounded-md focus:outline-none"
                type="password"
                placeholder="Set a password"
                required
              />
              <input
                className="bg-indigo-600 text-white py-2 rounded-lg cursor-pointer"
                type="submit"
                value="Login"
              />
            </form>
          </div>
          <h4 className="text-center text-white pt-3">
            New Here?{" "}
            <Link className="font-bold text-purple-400" href="/register">
              Register
            </Link>
          </h4>
        </div>
      </section>
    </>
  );
};
 
export default LogIn;
