import React from "react";
import Header from "../Components/mobileUi/ProfilePage/Header";
import ProfileActivity from "../Components/mobileUi/ProfilePage/ProfileActivity";
import SharePost from "../Components/mobileUi/ProfilePage/SharePost";
import DesktopProfile from "../Components/desktopUi/Acount/DesktopProfile";

export default function Profile() {
  return (
    <>
      <section className="mo:hidden w-full h-screen bg-[#eff2f3]">
        <Header />
        <ProfileActivity />
        <SharePost />
      </section>
      <DesktopProfile />
    </>
  );
}
