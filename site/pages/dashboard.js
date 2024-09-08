import React, { useEffect, useState, useContext } from "react";
import LinkBox from "../components/LinkBox";
import UserHeader from "../components/UserHeader";
import { toast } from "react-toastify";
import UserContext from "../context/userContext";
 
const dashboard = () => {
  const [data, setData] = useState({});
  const { setUserData } = useContext(UserContext);
 
  useEffect(() => {
    if (!localStorage.getItem("LinkTreeToken"))
      return (window.location.href = "/login");
    fetch("https://link-ripple.vercel.app/data/dashboard", {
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
        if (data.status === "error") return toast.error("Error happened");
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
        <UserHeader  />
        <main className="flex flex-col justify-center">
          
          
          <section className="flex flex-row items-center justify-center pt-4">
            <LinkBox
              lbTitle="Links"
              lbNumber={data.links}
              lbSvg="url"
              lbTheme="red"
            />
          </section>
          <section></section>
        </main>
      </div>
    </>
  );
};
 
export default dashboard;