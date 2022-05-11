import { React, useState } from "react";
import plusButton from "../../Assets/svg/MobileUi/plusButton.svg";
import home from "../../Assets/svg/MobileUi/home.svg";
import search from "../../Assets/svg/MobileUi/search.svg";
import activity from "../../Assets/svg/MobileUi/like.svg";
import userIcone from "../../Assets/svg/MobileUi/userIcone.svg";
import { Link } from "react-router-dom";
import SideMenu from "./SideMenu";

export default function BottomNavigationBar() {
  const [isOpenModalSideMenu, setIsOpenModalSideMenu] = useState(false);
  return (
    <>
      <SideMenu
        isOpenModalSideMenu={isOpenModalSideMenu}
        setIsOpenModalSideMenu={setIsOpenModalSideMenu}
      />
      <section className="mo:hidden fixed bottom-0 w-full z-10  bg-[#eff2f3] ">
        <div className="fixed bottom-0 w-full blur-[1px] opacity-[90%] bg-[#4a5e96] h-[18vw] rounded-[4px]  "></div>
        {/* <img
        src={plusButton}
        className="fixed right-[5vw] w-[17vw] bottom-[9vw] opacity-[90%] "
      /> */}
        <div className="flex justify-between px-6 mb-3 w-full h-[50px] fixed -bottom-2">
          <Link className="mt-3" to="/">
            <img src={home} className=" w-[7vw]" />
          </Link>
          <Link className="mt-3" to="/explore">
            <img src={search} className=" w-[7vw]" />
          </Link>
          <Link className="mt-3" to="/activity">
            <img src={activity} className=" w-[7vw]" />
          </Link>
          <img
            onClick={() => setIsOpenModalSideMenu(true)}
            src={userIcone}
            className=" w-[7vw]"
          />
        </div>
      </section>
    </>
  );
}
