import React from "react";

export default function AddComent({
  isOpenModalAddComent,
  setIsOpenModalAddComent,
}) {
 
  return (
    <>
      <section
        onClick={() => setIsOpenModalAddComent(false)}
        className={`w-full  z-10 transition-opacity duration-500 opacity-0  bg-[#0000009f]
        ${
          isOpenModalAddComent
            ? "opacity-100 h-screen fixed top-0 "
            : "opacity-0"
        }`}
      ></section>
      <section
        className={`${
          isOpenModalAddComent
            ? "fixed z-10 flex justify-center items-center w-full top-[50%] "
            : "hidden"
        }`}
      >
        <div className="w-[90%] h-[70%] bg-[#fff] fixed rounded-[4px] "></div>
      </section>
    </>
  );
}
