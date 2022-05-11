import React, { useState } from "react";
import mehranModiri from "../../../Assets/images/mehranModiri.jpg";
import select from "../../../Assets/svg/desktopUi/selected.svg";

const suggestions = [
  {
    img: mehranModiri,
    name: "mehran Modiri",
    username: "mehran_modiri",
  },
  {
    img: mehranModiri,
    name: "mehran Modiri",
    username: "mehran_modiri",
  },
  {
    img: mehranModiri,
    name: "mehran Modiri",
    username: "mehran_modiri",
  },
];

export default function SharePost({
  isOpenModalSharePost,
  setIsOpenModalSharePost,
}) {
  const [selected, setSelected] = useState(false);
  return (
    <main>
      <p className="text-center relative py-2">SharePost</p>
      <div className="bg-[#0000003e] w-full h-[1.5px]"></div>
      <section className="w-[90%] m-auto    ">
        <div className="flex py-3">
          <p>To : </p>
          <input
            className="px-5 ml-1 w-[70%] text-[12px] outline-none"
            placeholder="Search ..."
          />
        </div>
      </section>
      <div className="bg-[#0000003e] w-full h-[1.4px]"></div>
      <section className="w-[90%] m-auto py-3">
        <p>Suggested</p>
        <section className="mt3">
          {suggestions.map((item) => {
            return (
              <section className="flex justify-between items-center mt-3 ">
                <div className="flex items-center">
                  <img
                    className="rounded-[50%] object-cover h-[45px] w-[45px]"
                    src={item.img}
                  />
                  <p className="ml-3 text-[14px] ">{item.username}</p>
                </div>
                <p
                  onClick={() => setSelected(!selected)}
                  className={`${
                    !selected
                      ? "cursor-pointer   w-[25px] h-[25px] rounded-[50%] border-[2px] border-[#000]"
                      : "hidden"
                  }`}
                ></p>
                <img
                  onClick={() => setSelected(!selected)}
                  src={select}
                  className={`${
                    selected ? "w-[25px] h-[25px] cursor-pointer " : "hidden"
                  }`}
                />
              </section>
            );
          })}
        </section>
      </section>
      <section className=" absolute bottom-0 h-[60px]  w-full flex flex-col justify-center items-center">
        <div className="bg-[#0000003e] w-full h-[1px]"></div>
        <button
          onClick={() => setIsOpenModalSharePost(false)}
          className="bg-[#568EE6] w-[400px] h-[35px] rounded-[4px] m-auto font-medium text-[14px] text-[#fff]"
        >
          Send
        </button>
      </section>
    </main>
  );
}
