import React from "react";

export default function ShowStories({ ShowStorei, setShowStorei }) {
  return (
    <section className="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0">
      <section
        dir="rtl"
        onClick={() => setShowStorei(false)}
        className={`fixed top-0 bottom-0 left-0 right-0  z-50 bg-[#000000c7] transition-opacity duration-500 opacity-0  
      ${ShowStorei ? "opacity-100 " : "opacity-0 w-[0px] h-[0px] "}`}
      ></section>
      {/* <section
        className={` w-[400px] h-[400px] z-40 fixed  rounded-[8px] bg-[#fff] transition-opacity duration-500 opacity-0  "
      ${
        ShowStorei
          ? " opacity-100"
          : "opacity-0 w-[0px] h-[0px] duration-300   "
      }`}
      ></section> */}
    </section>
  );
}
