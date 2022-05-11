import React from "react";
import likeActivity from "../../../Assets/svg/MobileUi/likeActivity.svg";

export default function MainSection() {
  return (
    <section className="mo:hidden">
      <header className=" w-full py-3 flex justify-center items-center ">
        <p>Activity</p>
      </header>
      <div className="w-full h-[.1px] bg-[#00000021] "></div>
      <main className="w-full flex flex-col  mt-16 overflow-auto ">
        <section className="w-full h-60 flex flex-col items-center px-5 ">
          <img src={likeActivity} className="w-[15vw]" />
          <p className="text-[4.5vw]">Activity on your posts</p>
          <p className="text-center text-[3.5vw] pt-1">
            when some one likes or coments on one of your posts, you will see it
            heare
          </p>
        </section>
        <div className="w-full h-[.1px] bg-[#00000021] "></div>
        <section className=" px-5 w-full h-30 mt-4">
          <p className="text-[4.5vw]">suggestions for you</p>
          <p className="text-[4.5vw] text-[#0000009a] text-center mt-10">
            there is no suggestions for you
          </p>
          <p className="text-[4.5vw] text-[blue] mt-5 fixed bottom-24 right-[30%]">
            see All suggestions
          </p>
        </section>
      </main>
    </section>
  );
}
