import { React, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import instugramText from "../../Assets/images/instugramText.png";
import homeDesktop from "../../Assets/svg/desktopUi/homeDesktop.svg";
import create from "../../Assets/svg/desktopUi/create.svg";
import exploredesktop from "../../Assets/svg/desktopUi/exploredesktop.svg";
import activity from "../../Assets/svg/MobileUi/likeActivity.svg";
import userIcone from "../../Assets/svg/MobileUi/editProfile.svg";
import ModalDesktopActivity from "../desktopUi/Activity/ModalDesktopActivity";
import ModalCreateNewPost from "../desktopUi/NewPost/ModalCreateNewPost";
import ModalProfile from "../desktopUi/Acount/ModalProfile";

export default function LayotDesktop() {
  const [searchValue, setSearchValue] = useState("");
  const [isOpenModalDesktopActivity, setIsOpenModalDesktopActivity] =
    useState(false);
  const [isOpenModalCreateNewText, setIsOpenModalCreateNewText] =
    useState(false);
  const [isOpenModalProfile, setIsOpenModalProfile] = useState(false);
  return (
    <>
      <ModalProfile
        isOpenModalProfile={isOpenModalProfile}
        setIsOpenModalProfile={setIsOpenModalProfile}
      />
      <ModalCreateNewPost
        isOpenModalCreateNewText={isOpenModalCreateNewText}
        setIsOpenModalCreateNewText={setIsOpenModalCreateNewText}
      />
      <ModalDesktopActivity
        isOpenModalDesktopActivity={isOpenModalDesktopActivity}
        setIsOpenModalDesktopActivity={setIsOpenModalDesktopActivity}
      />
      <header className=" w-full  bg-[#fff] z-10 fixed top-0">
        <section className=" w-[80%] h-[55px] m-auto flex items-center max-w-[900px] justify-between">
          <img src={instugramText} className="w-[130px] object-cover mr-10" />
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="search ..."
            className="mo:hidden sm:block  w-[50%] h-[30px] outline-none max-w-[300px] mx-5  rounded-[4px] bg-[#0000001e] px-5"
          />
          <div className="flex h-16 w-[230px] leading-7 justify-between items-center">
            <Link to="/">
              <img src={homeDesktop} className=" w-[25px] cursor-pointer" />
            </Link>
            <Link to="/explore">
              <img src={exploredesktop} className=" w-[25px] cursor-pointer" />
            </Link>
            <img
              onClick={() => setIsOpenModalCreateNewText(true)}
              src={create}
              className=" w-[25px] cursor-pointer"
            />
            <img
              onClick={() => setIsOpenModalDesktopActivity(!isOpenModalDesktopActivity)}
              src={activity}
              className=" cursor-pointer w-[25px]"
            />
            <img 
            onClick={() =>setIsOpenModalProfile(true)}
            src={userIcone} className=" cursor-pointer  w-[25px]" />
          </div>
        </section>
        <div className="w-full h-[1.5px] bg-[#00000021] mt-1"></div>
      </header>
    </>
  );
}
