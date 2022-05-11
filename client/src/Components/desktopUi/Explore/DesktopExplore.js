import React from "react";
import { useSelector } from "react-redux";

export default function DesktopExplore() {
  const data = useSelector((state) => state.dataExplore.data);
  console.log(data, " dataExplore");
  return (
    <section className="w-[80%] m-auto my-20 ">
      <section className="flex flex-wrap ">
        {data.map((item) => {
          return (
            <div className="m-[1vw]">
              <img
                src={item.img}
                className="w-[24.3vw] h-[40vw] object-cover rounded-[4px]"
              />
            </div>
          );
        })}
      </section>
    </section>
  );
}
