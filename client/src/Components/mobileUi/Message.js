import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSwipeable } from "react-swipeable";
import back from "../../Assets/svg/MobileUi/back.svg";
import MessageInbox from "./MessageInbox";

export default function Message({ isOpenModalMessage, setIsOpenModalMessage }) {
  const message = useSelector((state) => state.data.database.message);
  const [dynamicData, setDynamicData] = useState(null);
  const [isOpenModalMessageInbox, setIsOpenModalMessageInbox] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handlers = useSwipeable({
    onSwipedRight: (eventData) => {
      setIsOpenModalMessage(false);
    },
  });

  return (
    <>
      <MessageInbox
        isOpenModalMessageInbox={isOpenModalMessageInbox}
        setIsOpenModalMessageInbox={setIsOpenModalMessageInbox}
        dynamicData={dynamicData}
        setDynamicData={setDynamicData}
        setIsOpenModalMessage={setIsOpenModalMessage}
      />
      <section
        {...handlers}
        className={`mo:hidden right-0 transition-all fixed z-10 duration-500 w-full bg-[#eff2f3] h-screen
        ${isOpenModalMessage ? "" : "mo:hidden right-[-25rem]"}`}
      >
        <div className="w-full py-3 px-5 flex items-center bg-[#ffffffb0] rounded-[8px] ">
          <img
            src={back}
            onClick={() => setIsOpenModalMessage(false)}
            className="w-[2.5rem] object-cover  opacity-[90%] "
          />
        </div>
        <section className="w-[90%] m-auto ">
          <p className="text-[27px] mt-2 font-semibold">message</p>
          <div className="w-full flex justify-center my-2">
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="search ...."
              className="w-[80%] py-1.5 px-4 rounded-[4px] "
            />
          </div>
          <div className="mt-5">
            {message
              .filter((item) => {
                return item.username
                  .toLowerCase()
                  .includes(searchValue.toLowerCase());
              })
              .map((item, i) => {
                return (
                  <div
                    onClick={() => {
                      setIsOpenModalMessageInbox(true);
                      setDynamicData(item);
                    }}
                    key={i}
                    className="mb-4 flex w-full"
                  >
                    <img
                      src={item.img}
                      className="rounded-[50%] object-cover h-[22vw] w-[21vw]"
                    />
                    <div className="ml-3 mt-1">
                      <p className="font-medium">{item.username}</p>
                      <p className="opacity-70 text-[3.7vw]">
                        {item.message.map((item) => {
                          return <p>{item.title}</p>;
                        })}
                      </p>
                      <p className="opacity-70  mt-1 text-[3.5vw]">
                        {item.time}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      </section>
    </>
  );
}
