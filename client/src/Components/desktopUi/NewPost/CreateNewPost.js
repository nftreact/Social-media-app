import React from "react";
import media from "../../../Assets/svg/desktopUi/media.svg";
import camera from "../../../Assets/svg/desktopUi/camera.svg";

export default function CreateNewPost() {
  return (
    <section>
      <header className="w-full text-center text-[14px] font-medium py-2">
        create new post
      </header>
      <div className="w-full bg-[#00000042] h-[2px]"></div>
      <div className="w-full h-[300px] flex flex-col justify-center items-center ">
        <img src={media} className="w-[50px] fixed mt-[-15px] h-[50px]" />
        <img src={camera} className="w-[50px] h-[50px] fixed ml-5" />
        <button className="h-[35px] w-[180px] mt-[100px] text-[14px] rounded-[4px] text-[#fff] bg-[#568EE6]">
          select from computer
        </button>
      </div>
    </section>
  );
}
