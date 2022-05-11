import React from "react";
import { Outlet, Link } from "react-router-dom";
import BottomNavigationBar from "../Components/mobileUi/BottomNavigationBar";
import LayotDesktop from "../Components/desktopUi/LayotDesktop";

export default function LayotPage() {
  return (
    <>
      <div className="hidden  mo:block">
        <LayotDesktop />
      </div>
      <BottomNavigationBar />
      <Outlet />
    </>
  );
}
