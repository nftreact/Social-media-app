import React from "react";

export default function ViewAllComent({
  comentState,
  isOpenModalViewAllComents,
}) {
  console.log(comentState, "comentState");

  if (!isOpenModalViewAllComents) {
    return;
  }

  return (
    <main className="w-full h-full flex justify-between rounded-[4px]">
      <section className="w-[40%] bg-[#000] rounded-[4px]  ">
        <div className="flex justify-center items-center w-full h-full  ">
          <img
            className="w-full h-full object-cover  "
            src={comentState?.img}
          />
        </div>
      </section>
      <section className=" relative w-[60%] bg-[#fff] rounded-[4px] ">
        <div className="flex justify-center w-[90%] m-auto mt-10">
          <img
            src={comentState?.user.img}
            className="rounded-[50%] object-cover h-[4vw] w-[4.5vw]"
          />
          <div className=" w-full h-full ml-3">
            <p className="mt-2 text-[1.1vw]">{comentState?.user.username}</p>
            <p className="w-[90%] text-justify mt-2 text-[.9vw]">
              {comentState?.caption}
            </p>
          </div>
        </div>
        <p className="w-full h-[1px] bg-[#0000001e] my-[15px]"></p>
        <section className="w-[90%] m-auto">
          {comentState?.coment.map((item, i) => {
            return (
              <section key={i} className="mb-3">
                <div className="flex">
                  <img
                    className="rounded-[50%] object-cover h-[3vw] w-[3.2vw]"
                    src={item.img}
                  />
                  <div className="mt-1 text-[.8vw]">
                    <p className="ml-2">{item.username}</p>
                    <p className="ml-2">{item.caption}</p>
                  </div>
                </div>
              </section>
            );
          })}
        </section>
        <section className="w-full absolute bottom-0 h-[50px] flex justify-center items-center  bg-[#00000009]">
          <div className="flex justify-between w-[80%] m-auto">
            <input
              placeholder="Add a coment ..."
              className="w-[80%] h-[35px] text-[1vw] placeholder:text-[1vw] px-5 bg-[#fff0] outline-none "
            />
            <p className="text-[#568EE6] cursor-pointer text-[1vw] w-[5%]">
              post
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
