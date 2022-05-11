import React from "react";
import { useSelector, useDispatch } from "react-redux";
import mehranModiri from "../../../Assets/images/mehranModiri.jpg";

export default function SuggestionForYou() {
  const userData = useSelector((state) => state.data.database.user);

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
  return (
    <main className="w-[30vw] h-screen fixed -z-10 flex flex-col px-10   mt-16  top-18 text-[14px]  overflow-auto ">
      <section className=" h-[100px] w-full flex  justify-between ">
        <div className="flex">
          <img
            src={userData.img}
            className="rounded-[50%] object-cover h-[50px] w-[50px]"
          />
          <div className="ml-3 mt-1 ">
            <p>{userData.username}</p>
            <p className="text-[12px] mt-[2px]">{userData.name}</p>
          </div>
        </div>
        <p className="text-[#568EE6] ">switch</p>
      </section>
      <section className="">
        <p>suggestions for you</p>
        <div className="mt-5">
          {suggestions.map((item) => {
            return (
              <section className="flex justify-between items-center mt-3 ">
                <div className="flex items-center">
                  <img
                    className="rounded-[50%] object-cover h-[45px] w-[45px]"
                    src={item.img}
                  />
                  <p className="ml-3 ">{item.username}</p>
                </div>
                <p className="text-[#568EE6] cursor-pointer ">follow</p>
              </section>
            );
          })}
        </div>
      </section>
    </main>
  );
}
