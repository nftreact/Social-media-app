import React from "react";
import { Link } from "react-router-dom";
import profileIcone from "../../../Assets/svg/MobileUi/profileIcone.svg";
import save from "../../../Assets/svg/MobileUi/save.svg";
import setting from "../../../Assets/svg/MobileUi/setting.svg";

export default function ProfileDesktop({
  isOpenModalProfile,
  setIsOpenModalProfile,
}) {
  return (
    <section className="w-full m-auto h-full">
      <div className="flex flex-col justify-between py-3 text-[14px]  h-full">
        <section className="px-5 flex flex-col py-2 justify-around  h-full">
          <Link onClick={() => setIsOpenModalProfile(false)} to="/Profile">
            <div className="flex cursor-pointer">
              <img className="w-[20px] h-[20px] mr-2" src={profileIcone} />
              <p>Profile</p>
            </div>
          </Link>
          <div className="flex items-center cursor-pointer">
            <img className="w-[15px] h-[15px] mr-2 ml-1" src={save} />
            <p>Save</p>
          </div>
          <div className="flex items-center cursor-pointer">
            <img className="w-[20px] h-[20px] mr-2" src={setting} />
            <p>Settings</p>
          </div>
        </section>
        <div className="">
          <p className="w-full h-[1.5px]  bg-[#0000003c]"></p>
          <p className="ml-5 flex mt-1  cursor-pointer">Log Out</p>
        </div>
      </div>
    </section>
  );
}
