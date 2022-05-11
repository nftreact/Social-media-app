import { React, useEffect, useState } from "react";
import back from "../../Assets/svg/MobileUi/back.svg";
import SendIcone from "../../Assets/svg/MobileUi/SendIcone.svg";
import { useSelector, useDispatch } from "react-redux";
import { updateMessage } from "../../Redux/Reducer";

export default function MessageInbox({
  isOpenModalMessageInbox,
  setIsOpenModalMessageInbox,
  dynamicData,
  setDynamicData,
  setIsOpenModalMessage,
}) {
  const [valueMessage, setValueMessage] = useState("");
  const dispatch = useDispatch();

  const addMessage = () => {
    if (!valueMessage) {
      alert("please enter somthing");
      return;
    }
    const cloneArray = JSON.parse(JSON.stringify(dynamicData));
    cloneArray.message.push({
      title: valueMessage,
      id: Math.floor(Math.random() * 100000000),
    });
    setDynamicData(cloneArray);
    const id = dynamicData.id;
    dispatch(updateMessage({ id, title: valueMessage }));
    setValueMessage("");
  };

  return (
    <>
      <section
        className={`${
          isOpenModalMessageInbox
            ? "mo:hidden fixed z-20 duration-500 w-full bg-[#eff2f3] top-0 bottom-0"
            : "hidden"
        }`}
      >
        <div className="w-full py-3 px-5 flex justify-between items-center bg-[#ffffffb0] rounded-[8px] ">
          <section className="flex">
            <img
              className="rounded-[50%] object-cover h-[16vw] w-[19.5vw]"
              src={dynamicData?.img}
            />
            <div className="ml-3 mt-2">
              <p>{dynamicData?.username}</p>
              <p className="opacity-70   text-[3.5vw]">
                last seen {dynamicData?.time}
              </p>
            </div>
          </section>
          <img
            src={back}
            onClick={() => {
              setIsOpenModalMessageInbox(false);
            }}
            className="w-[2.5rem] object-cover  opacity-[90%] "
          />
        </div>
        <div className="mt-10 mr-7 ">
          {dynamicData?.message.map((item, i) => {
            return (
              <p
                key={i}
                className="bg-[#fff] px-3 my-4   py-4 rounded-[20px] rounded-bl-none"
              >
                {item?.title}
              </p>
            );
          })}
        </div>
        <div className="mt-10 ml-7 flex justify-end">
          <div className="bg-[#5790DF]  px-3 py-4 text-[#fff] rounded-[20px] rounded-br-none">
            Come on in. Take a seat. Would you like anything to drink? I have
            Sprite and Miranda.
          </div>
        </div>
        <section className="w-full h-[5rem]  fixed bottom-0 flex justify-end items-center pr-5 ">
          <input
            placeholder="message"
            value={valueMessage}
            onChange={(e) => setValueMessage(e.target.value)}
            className="w-[90%] px-5   h-[11vw] rounded-[20px]"
          />
          <div
            onClick={() => addMessage()}
            className="bg-[#5790DF] w-[11vw] h-[11vw] rounded-[50%] fixed"
          >
            <img className="w-[21px] fixed right-7 mt-2.5" src={SendIcone} />
          </div>
        </section>
      </section>
    </>
  );
}
