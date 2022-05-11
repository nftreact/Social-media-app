import React from "react";
import CreateNewPost from "../../desktopUi/NewPost/CreateNewPost";
import close from "../../../Assets/svg/desktopUi/close.svg";

export default function ModalCreateNewPost({
  isOpenModalCreateNewText,
  setIsOpenModalCreateNewText,
}) {
  return (
    <section className="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
      <section
        dir="rtl"
        onClick={() => setIsOpenModalCreateNewText(false)}
        className={`fixed top-0 bottom-0 left-0 right-0  z-20 bg-[#000000c7] transition-opacity duration-500 opacity-0  
      ${
        isOpenModalCreateNewText ? "opacity-100 " : "opacity-0 w-[0px] h-[0px] "
      }`}
      >
        <img 
        onClick={() =>setIsOpenModalCreateNewText(false)}
        src={close} className="w-[20px] h-[20px] fixed right-3 top-3 cursor-pointer" />
      </section>
      <section
        className={` w-[400px] h-[400px] z-40 fixed  rounded-[8px] bg-[#fff] transition-opacity duration-500 opacity-0  "
      ${
        isOpenModalCreateNewText
          ? " opacity-100"
          : "opacity-0 w-[0px] h-[0px] duration-300   "
      }`}
      >
        <CreateNewPost />
      </section>
    </section>
  );
}
