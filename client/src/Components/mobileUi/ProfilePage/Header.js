import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const userData = useSelector((state) => state.data.database.user);
  console.log(userData);
  return (
    <>
      <header className="mo:hidden w-full flex justify-between px-5">
        <section className="w-[40%] my-5 ">
          <img
            className="rounded-[50%] h-[22vw] w-[22vw] object-cover ml-3"
            src={userData.img}
          />
          <p className="mt-3 text-[3.5vw] font-medium ">{userData.name}</p>
        </section>
        <section className="w-[60%] mt-8 flex flex-col items-center">
          <p className="mt-3 text-[17px] font-medium ">{userData.username}</p>
          <Link to="/profile/editprofile">
            <button className="w-[50vw] py-2 bg-[#ffffff92] mt-3 text-[4.2vw] rounded-[4px]">
              Edit profile
            </button>
          </Link>
        </section>
      </header>
      <div className="w-full h-[.1px] bg-[#00000021]"></div>
    </>
  );
}
