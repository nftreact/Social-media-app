import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function DesktopActivity() {
  const userData = useSelector((state) => state.data.database);
  return (
    <main className="w-full h-full flex justify-center items-center ">
      <section className="w-[80%] h-[80%]">
        {userData.message.map((item, i) => {
          return (
            <section
              key={i}
              className="mb-4 flex justify-between items-center w-full "
            >
              <div className="flex items-center ">
                <img
                  src={item.img}
                  className="rounded-[50%] cursor-pointer object-cover h-[45px] w-[45px]"
                />
                <div className="flex">
                  <p className="font-medium ml-3 mt-1 text-[12px]">
                    {item.username}
                  </p>
                  <p className="font-medium ml-2 mt-1 text-[11px] text-[#00000091]">start following you</p>
                </div>
              </div>
              <button className="px-[15px] h-[35px] text-[12px] rounded-[4px] border-[#000] border-[2px]">
                following
              </button>
            </section>
          );
        })}
      </section>
    </main>
  );
}
