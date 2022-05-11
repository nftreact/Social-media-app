import React from "react";
import back from "../../../Assets/svg/MobileUi/back.svg";
import { Link } from "react-router-dom";

export default function HeaderEditProfile() {
  return (
    <>
      <section className="mo:hidden w-full px-6 py-1 flex items-center">
        <Link to="/profile">
          <img src={back} className="w-[9.5vw] object-cover opacity-[90%]" />
        </Link>
        <p className="ml-24 text-[4.5vw] font-medium">Edit Profile</p>
      </section>
      <div className="w-full h-[.1px] bg-[#00000021] mt-1"></div>
    </>
  );
}
