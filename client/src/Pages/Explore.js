import React from "react";
import MobileExplore from "../Components/mobileUi/MobileExplore";
import DesktopExplore from "../Components/desktopUi/Explore/DesktopExplore";

export default function Explore() {
  return (
    <>
      <div className="hidden  mo:block">
        <DesktopExplore />
      </div>
      <section className="mo:hidden sd:block">
        <MobileExplore />;
      </section>
    </>
  );
}
