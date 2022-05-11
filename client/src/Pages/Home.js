import { React } from "react";
import UserPost from "../Components/mobileUi/UserPost";
import HomeDesktop from "../Components/desktopUi/Home/HomeDesktop";

export default function Home() {
  return (
    <>
      <section className="hidden mo:block w-full  mt-14 ">
        <HomeDesktop />
      </section>
      <section className="mo:hidden sd:block">
        <UserPost />
      </section>
    </>
  );
}
