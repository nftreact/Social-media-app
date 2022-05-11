import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoimg from "../Assets/images/logoimg.jpeg";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="w-full h-[100vh] flex justify-center items-center bg-[#3F5A9E]">
      <div className="w-[80%] h-[120vw] bg-[#F6F6F6]  rounded-[30px] ">
        <img
          src={logoimg}
          className="w-[70vw] h-[150px] object-cover m-auto mt-[5vw]"
        />
        <section className="w-full mt-[7vw]">
          <div className="flex w-full  justify-center my-[4vw]">
            <p className="text-[#000] mr-3  font-bold">username</p>
            <input
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="w-[45vw] rounded-[4px] px-4  h-[30px] bg-[#00000020]"
            />
          </div>
          <div className="flex  w-full  justify-center">
            <p className="text-[#000] mr-3 font-bold">password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              className="w-[45vw] rounded-[4px] px-4 h-[30px] bg-[#00000020]"
            />
          </div>
        </section>
        <div className="w-full flex justify-center mt-5">
          <Link to="/">
            <button className="text-[#000] bg-[#fff] m-auto bg-[#00000020] font-bold rounded-[4px] h-[40px] w-[100px] my-5  ">
              login
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
