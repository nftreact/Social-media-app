import React from "react";
import Stories from "../Home/Stories";
import SuggestionForYou from "../Home/SuggestionForYou";
import UserPosts from "../Home/UserPosts";

export default function HomeDesktop() {
  return (
    <>
        <main className="w-[65%]  m-auto h-screen   sm:flex sm:justify-between ">
          <section className="w-[60%] mo:w-full h-screen">
            <Stories />
            <UserPosts />
          </section>
          <section className="w-[40%] hidden xlg:block">
            <SuggestionForYou />
          </section>
        </main>
    </>
  );
}
