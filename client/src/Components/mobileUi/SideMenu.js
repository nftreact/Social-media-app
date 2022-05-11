import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import exit from "../../Assets/svg/MobileUi/exit.svg";
import favorites from "../../Assets/svg/MobileUi/SideMenu/favorites.svg";
import home from "../../Assets/svg/MobileUi/SideMenu/home.svg";
import message from "../../Assets/svg/MobileUi/SideMenu/message.svg";
import profile from "../../Assets/svg/MobileUi/SideMenu/profile.svg";
import setting from "../../Assets/svg/MobileUi/SideMenu/setting.svg";
import signOut from "../../Assets/svg/MobileUi/SideMenu/signOut.svg";

export default function SideMenu({
  isOpenModalSideMenu,
  setIsOpenModalSideMenu,
  setIsOpenModalMessage,
  setIsOpenModalViewAllComents,
}) {
  const data = useSelector((state) => state.data.database.user);

  return (
    <section
      className={`mo:hidden w-[80%] overflow-auto h-screen transition-all z-20 duration-500 fixed right-0 top-0 rounded-[5px]  bg-[#3f5a9e]
    ${isOpenModalSideMenu ? "mo:hidden right-0" : "mo:hidden right-[-100%]"}`}
    >
      <div
        onClick={() => setIsOpenModalSideMenu(false)}
        className={`${
          isOpenModalSideMenu
            ? "bg-[#ffffffa4] w-[9vw] h-[9vw] rounded-[50%] fixed right-5 top-4"
            : "hidden"
        }`}
      >
        <img className="w-[4.5vw] h-[4.5vw] fixed right-7 top-6" src={exit} />
      </div>
      <div
        className="w-full flex flex-col items-center mt-14"
        onClick={() => setIsOpenModalSideMenu(false)}
      >
        <img
          className="rounded-[50%] h-[35vw] w-[35vw] object-cover"
          src={data.img}
        />
        <p className="text-[#fff] mt-2 text-[6vw]">{data.username}</p>
        <p className="text-[#ffffffdc] mt-1 text-[5vw] ">{data.email}</p>
      </div>
      <section dir="rtl" className="mt-1">
        <Link to="/profile">
          <div
            onClick={() => setIsOpenModalSideMenu(false)}
            className="flex h-16 items-center w-full px-8"
          >
            <img src={profile} className="w-[25px] ml-8" />
            <p className="text-[#ffffffdb] ">profile</p>
          </div>
        </Link>
        <section className="w-[70%] h-1 my-1 bg-[#364C86] rounded-[80%] m-auto text-[4vw]"></section>
        <Link onClick={() => setIsOpenModalSideMenu(false)} to="/">
          <div className="flex  h-16 items-center w-full px-8">
            <img src={home} className="w-[25px] ml-8" />
            <p className="text-[#ffffffdb] ">home</p>
          </div>
        </Link>
        <section className="w-[70%] h-1 my-1 bg-[#364C86] rounded-[80%] m-auto"></section>
        <Link onClick={() => setIsOpenModalSideMenu(false)} to="/activity">
          <div className="flex h-16 items-center w-full px-8">
            <img src={favorites} className="w-[25px] ml-8" />
            <p className="text-[#ffffffdb] ">favorites</p>
          </div>
        </Link>
        <section className="w-[70%] h-1 my-1 bg-[#364C86] rounded-[80%] m-auto"></section>
        <div className="flex h-16 items-center w-full px-8">
          <img src={signOut} className="w-[25px] ml-8" />
          <p className="text-[#ffffffdb] ">signOut</p>
        </div>
      </section>
    </section>
  );
}
