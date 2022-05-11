import React from "react";
import { useSelector } from "react-redux";

export default function MobileExplore() {
  const data = useSelector((state) => state.dataExplore.data);

  return (
    <>
      <section className="mo:hidden w-full h-screen bg-[#eff2f3]">
        <header className="w-full py-2.5 flex justify-center">
          <input
            className="px-5 w-[90%] py-1 rounded-[8px] bg-[#ffffffe8] "
            placeholder="search ..."
          />
        </header>
        <section className="flex flex-wrap  ">
          {data.map((item) => {
            return (
              <div className="m-[1vw]">
                <img
                  src={item.img}
                  className="w-[47.7vw] h-[70vw] object-cover rounded-[4px]"
                />
              </div>
            );
          })}
        </section>
      </section>
    </>
  );
}
