import { React, useState } from "react";
import SendIcone from "../../Assets/svg/MobileUi/SendIcone.svg";
import back from "../../Assets/svg/MobileUi/back.svg";
import { useSelector, useDispatch } from "react-redux";
import { addComent } from "../../Redux/Reducer";
import saberAbar from "../../Assets/images/saberAbar.jpg";

export default function ModalViewAllComents({
  isOpenModalViewAllComents,
  setIsOpenModalViewAllComents,
  comentState,
  setComentState,
  setIsOpenModalMessage,
}) {
  const dispatch = useDispatch();
  const arrayComent = comentState?.coment;
  const [comentValue, setComentValue] = useState("");

  const addComents = () => {
    if (!comentValue) {
      alert("please enter somthing");
      return;
    }
    const cloneArray = JSON.parse(JSON.stringify(comentState));
    cloneArray.coment.push({
      caption: comentValue,
      id: Math.floor(Math.random() * 100000000),
      img: saberAbar,
      username: "aliHasani",
    });
    setComentState(cloneArray);
    const id = comentState.id;
    const caption = comentValue;
    dispatch(addComent({ id: id, caption: caption }));
    setComentValue("");
  };
  return (
    <section
      className={`mo:hidden w-full top-0 bottom-0 bg-[#eff2f3] z-10 fixed transition-all right-0   duration-500
        ${isOpenModalViewAllComents ? "" : "mo:hidden right-[-25rem]"}`}
    >
      <div
        className="  w-full m-auto py-2 flex justify-between  items-center
         px-5 bg-[#ffffffe6] "
      >
        <img
          src={back}
          onClick={() => setIsOpenModalViewAllComents(false)}
          className="w-[2.5rem] object-cover opacity-[90%] "
        />
      </div>
      <section className="w-[90%] h-[80%] mt-4 m-auto overflow-auto">
        <div className="flex items-center">
          <img
            src={comentState?.user.img}
            className="rounded-[50%] object-cover h-[70px] w-[70px]"
          />
          <p className="ml-4">{comentState?.user.username}</p>
        </div>
        <p className="text-justify my-4">{comentState?.caption}</p>
        <section className="mt-5">
          {arrayComent?.map((item, i) => {
            return (
              <section key={i} className="mb-3">
                <div className="flex">
                  <img
                    className="rounded-[50%] object-cover h-[70px] w-[70px]"
                    src={item.img}
                  />
                  <div className="mt-2">
                    <p className="ml-4">{item.username}</p>
                    <p className="ml-4">{item.caption}</p>
                  </div>
                </div>
              </section>
            );
          })}
        </section>{" "}
      </section>
      <section
        className={`${
          isOpenModalViewAllComents
            ? "w-full h-[20vw] fixed bottom-0 flex justify-end items-center pr-5 "
            : "hidden"
        }`}
      >
        <input
          placeholder="add a new coment"
          value={comentValue}
          onChange={(e) => setComentValue(e.target.value)}
          className="w-[90%] px-5 h-[11vw] rounded-[20px]"
        />
        <div
          onClick={() => addComents()}
          className="bg-[#5790DF] w-[11vw] h-[11vw] rounded-[50%] fixed"
        >
          <img
            className="w-[21px] fixed right-[7.5vw] mt-2.5"
            src={SendIcone}
          />
        </div>
      </section>
    </section>
  );
}
