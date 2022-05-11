import React from "react";
import ProfileDesktop from "../Acount/ProfileDesktop";

export default function ModalProfile({
  isOpenModalProfile,
  setIsOpenModalProfile,
}) {
  return (
    <>
      <div
        onClick={() => setIsOpenModalProfile(false)}
        className={`w-full h-screen fixed bottom-0  right-0 left-0 top-0 z-20  rounded-[8px] transition-opacity duration-500 
      ${isOpenModalProfile ? " opacity-100 " : "opacity-0 w-[0px] h-[0px]"}`}
      ></div>
      <div
        className={`w-[250px] h-[180px] fixed right-[10vw] top-14 z-20  rounded-[8px] transition-opacity duration-500 bg-[#fff] drop-shadow-xl
       ${isOpenModalProfile ? " opacity-100 " : "hidden"}`}
      >
        <ProfileDesktop
          isOpenModalProfile={isOpenModalProfile}
          setIsOpenModalProfile={setIsOpenModalProfile}
        />
      </div>
    </>
  );
}
