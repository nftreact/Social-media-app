import React from "react";
import SharePost from "../Home/SharePost";

export default function ModalSharePost({
  isOpenModalSharePost,
  setIsOpenModalSharePost,
}) {
  return (
    <section className="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
      <section
        dir="rtl"
        onClick={() => setIsOpenModalSharePost(false)}
        className={`fixed top-0 bottom-0 left-0 right-0  z-20 bg-[#000000c7] transition-opacity duration-500 opacity-0  
      ${isOpenModalSharePost ? "opacity-100 " : "opacity-0 w-[0px] h-[0px] "}`}
      ></section>
      <section
        className={` w-[550px] h-[400px] z-40 fixed  rounded-[8px] bg-[#fff] transition-opacity duration-500 opacity-0  "
      ${
        isOpenModalSharePost
          ? " opacity-100"
          : "opacity-0 w-[0px] h-[0px] duration-300   "
      }`}
      >
        <SharePost
          isOpenModalSharePost={isOpenModalSharePost}
          setIsOpenModalSharePost={setIsOpenModalSharePost}
        />
      </section>
    </section>
  );
}
