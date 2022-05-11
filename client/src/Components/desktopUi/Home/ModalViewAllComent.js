import React from "react";
import ViewAllComent from "../../desktopUi/Home/ViewAllComent";

export default function ModalViewAllComent({
  isOpenModalViewAllComents,
  setIsOpenModalViewAllComents,
  comentState,
}) {
  return (
    <>
      <section
        onClick={() => setIsOpenModalViewAllComents(false)}
        className={`fixed top-0 bottom-0 left-0 right-0  z-20 bg-[#000000aa] transition-opacity duration-500 opacity-100  
        ${
          isOpenModalViewAllComents
            ? "opacity-100 duration-1000"
            : "opacity-0 w-[0px] h-[0px] "
        }`}
      ></section>
      <section
        className={`w-[80%] h-[80%] z-40 fixed top-[10%] right-[10%]  rounded-[8px]  bg-[#fff] transition-opacity duration-500 opacity-100  "
        ${
          isOpenModalViewAllComents
            ? " opacity-100"
            : "opacity-0 w-[0px] h-[0px]  "
        }`}
      >
        <ViewAllComent
          comentState={comentState}
          isOpenModalViewAllComents={isOpenModalViewAllComents}
        />
      </section>
    </>
  );
}
