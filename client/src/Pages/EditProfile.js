import React from "react";
import HeaderEditProfile from "../Components/mobileUi/EditProfile/HeaderEditProfile";
import MainSection from "../Components/mobileUi/EditProfile/MainSection";

export default function EditProfile() {
  return (
    <section className="w-full h-screen bg-[#eff2f3]">
      <HeaderEditProfile />
      <MainSection />
    </section>
  );
}
