import { useState, React } from "react";
import instugramtext from "../../Assets/images/instugramText.png";
import DirectIcon from "../../Assets/svg/MobileUi/send.svg";
import { useSelector, useDispatch } from "react-redux";
import like from "../../Assets/svg/MobileUi/likeBlackcolor.svg";
import coment from "../../Assets/svg/MobileUi/message.svg";
import sendNotBlack from "../../Assets/svg/MobileUi/sendNotBlack.svg";
import ModalViewAllComents from "../../Components/mobileUi/ModalViewAllComents";
import Message from "../../Components/mobileUi/Message";
import { useSwipeable } from "react-swipeable";
import SideMenu from "../../Components/mobileUi/SideMenu";

export default function UserPost() {
  const data = useSelector((state) => state.data.database);
  const post = data.postData;
  const [isOpenModalViewAllComents, setIsOpenModalViewAllComents] =
    useState(false);
  const [comentState, setComentState] = useState(null);
  const [isOpenModalMessage, setIsOpenModalMessage] = useState(false);

  const handleComent = (item) => {
    setIsOpenModalViewAllComents(true);
    setComentState(item);
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      setIsOpenModalMessage(true);
    },
  });
  return (
    <>
      <Message
        isOpenModalMessage={isOpenModalMessage}
        setIsOpenModalMessage={setIsOpenModalMessage}
      />
      <ModalViewAllComents
        isOpenModalViewAllComents={isOpenModalViewAllComents}
        setIsOpenModalViewAllComents={setIsOpenModalViewAllComents}
        comentState={comentState}
        setComentState={setComentState}
        setIsOpenModalMessage={setIsOpenModalMessage}
      />
      <SideMenu
        setIsOpenModalMessage={setIsOpenModalMessage}
        setIsOpenModalViewAllComents={setIsOpenModalViewAllComents}
      />
      <section
        {...handlers}
        className={`mo:hidden w-full h-screen bg-[#eff2f3] transition-all  fixed duration-500  overflow-auto
      ${isOpenModalMessage ? "mo:hidden left-[-25rem]" : "mo:hidden left-0"}`}
      >
        <div
          className=" fixed top-0 z-50  w-full m-auto pt-2 flex justify-between  items-center  
         px-5 bg-[#ffffffb0] "
        >
          <img src={instugramtext} className="w-[9.5rem] object-cover" />

          <img
            onClick={() => setIsOpenModalMessage(true)}
            src={DirectIcon}
            className="w-[2rem] "
          />
        </div>
        <section className="bg-[#C4C4C4] h-[500px] rounded-[25px] w-[90%] m-auto mt-[18vw]">
          {post.map((item, i) => {
            return (
              <section
                key={i}
                className="bg-[#C4C4C4] w-full rounded-[25px]  mb-4 mt-3 m-auto h-[500px] overflow-auto "
              >
                <div className="w-[90%]  m-auto flex items-center h-[80px]">
                  <img
                    src={data.user.img}
                    className="rounded-[50%] object-cover h-[65px] w-[65px]"
                  />
                  <div>
                    <p className="ml-3">{data.user.username}</p>
                    <p className="ml-3 text-[13px]">{data.user.email}</p>
                  </div>
                </div>
                <img
                  src={item.img}
                  className="w-[90%] h-[260px] object-cover rounded-[10px] m-auto"
                />
                <div className="w-[90%] h-[100px] mt-2 m-auto">
                  <p>{item.caption.substr(1, 90) + "...."}</p>
                  <div className="flex w-[16rem] justify-between mt-2">
                    <p>
                      {item.like} {""} likes
                    </p>
                    <p
                      onClick={() => handleComent(item)}
                      className="cursor-pointer "
                    >
                      View all {item.NumberOfComments} comments{" "}
                    </p>
                  </div>
                  <div className="flex w-[7rem] justify-between">
                    <img src={like} className=" w-[25px] mt-2" />
                    <img
                      onClick={() => handleComent(item)}
                      src={coment}
                      className=" w-[25px] mt-2 z-50"
                    />
                    <img src={sendNotBlack} className=" w-[24px] mt-2" />
                  </div>
                </div>
              </section>
            );
          })}
        </section>
      </section>
    </>
  );
}
