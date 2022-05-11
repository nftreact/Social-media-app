import React from "react";
import camera from "../../../Assets/svg/MobileUi/camera.svg";

export default function SharePost() {
  return (
    <section className="mo:hidden w-full ">
      <div className="full flex flex-col items-center mt-8">
        <img src={camera} className="w-12" />
        <p className="text-[3.7vw] mt-3">
          when you share photos, they will appear on your profile
        </p>
        <p className="text-[14px]  text-[blue] mt-1">share your first photo</p>
      </div>
    </section>
  );
}
