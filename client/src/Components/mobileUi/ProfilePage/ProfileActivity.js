import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ProfileActivity() {
  const userData = useSelector((state) => state.data.database.user);
  return (
    <>
      <section className="mo:hidden w-full px-10 py-4">
        <ul className="flex w-full justify-between  text-[4.6vw]">
          <li className="flex flex-col items-center">
            <p>{userData.post}</p>
            <p>post</p>
          </li>
          <li className="flex flex-col items-center">
            <p>{userData.followers}</p>
            <p>followers</p>
          </li>
          <li className="flex flex-col items-center">
            <p>{userData.following}</p>
            <p>following</p>
          </li>
        </ul>
      </section>
      <div className="w-full h-[.1px] bg-[#00000021] my-1"></div>
    </>
  );
}
