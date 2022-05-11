import React from "react";
import MainSection from "../Components/mobileUi/ActivityMobileUi/MainSection";
import ModalDesktopActivity from "../Components/desktopUi/Activity/ModalDesktopActivity";

export default function Activity() {
  return (
    <>
      <section className="hidden  mo:block">
        <ModalDesktopActivity />
      </section>
      <MainSection />
    </>
  );
}
