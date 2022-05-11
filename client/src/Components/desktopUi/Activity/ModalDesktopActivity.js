import React from "react";
import DesktopActivity from "../Activity/DesktopActivity";

export default function ModalDesktopActivity({
  isOpenModalDesktopActivity,
  setIsOpenModalDesktopActivity,
}) {
  return (
    <>
      <div
        onClick={() => setIsOpenModalDesktopActivity(false)}
        className={`w-full h-screen fixed bottom-0 right-0 left-0 top-0 z-10   rounded-[8px] transition-opacity duration-500 
      ${
        isOpenModalDesktopActivity
          ? " opacity-100 "
          : "opacity-0 w-[0px] h-[0px]"
      }`}
      >
      </div>
      <div
        className={`w-[470px] h-[280px] fixed right-[10vw] top-14 z-10  rounded-[8px] transition-opacity duration-500 bg-[#fff] drop-shadow-xl
       ${
         isOpenModalDesktopActivity
           ? " opacity-100 "
           : "opacity-0 w-[0px] h-[0px]"
       }`}
      >
        <DesktopActivity />
      </div>
    </>
  );
}
