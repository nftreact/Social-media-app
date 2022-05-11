import { useState, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import like from "../../../Assets/svg/MobileUi/likeBlackcolor.svg";
import coment from "../../../Assets/svg/MobileUi/message.svg";
import sharePost from "../../../Assets/svg/MobileUi/sendNotBlack.svg";
import { updateShowMore } from "../../../Redux/Reducer";
import ModalViewAllComent from "../Home/ModalViewAllComent";
import ModalSharePost from "../Home/ModalSharePost";

export default function UserPosts() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.database);
  const post = data.postData;
  const [isOpenModalViewAllComents, setIsOpenModalViewAllComents] =
    useState(false);
  const [comentState, setComentState] = useState(null);
  const [isOpenModalMessage, setIsOpenModalMessage] = useState(false);
  const [isOpenModalSharePost, setIsOpenModalSharePost] = useState(false);

  const handleComent = (item) => {
    setIsOpenModalViewAllComents(true);
    setComentState(item);
  };

  const handleShowMore = (item) => {
    const id = item.id;
    const showMore = item.showMore;
    dispatch(updateShowMore({ id, showMore: !showMore }));
  };

  return (
    <>
      <ModalSharePost
        isOpenModalSharePost={isOpenModalSharePost}
        setIsOpenModalSharePost={setIsOpenModalSharePost}
      />
      <ModalViewAllComent
        isOpenModalViewAllComents={isOpenModalViewAllComents}
        setIsOpenModalViewAllComents={setIsOpenModalViewAllComents}
        comentState={comentState}
      />
      <main className="w-full  mt-[20px] bg-[#fff]">
        {post.map((item, i) => {
          return (
            <section
              key={i}
              className=" border-[1px] border-[#00000058] w-full  rounded-[4px]  mb-4 mt-3 m-auto py-5  "
            >
              <div className="w-[90%]  m-auto flex items-center pb-3">
                <img
                  src={data.user.img}
                  className="rounded-[50%] object-cover h-[50px] w-[50px]"
                />
                <div>
                  <p className="ml-3 text-[1.1vw] font-medium">
                    {data.user.username}
                  </p>
                  <p className="ml-3 text-[.9vw] ">{data.user.email}</p>
                </div>
              </div>
              <img
                src={item.img}
                className="w-[90%] h-[260px] object-cover rounded-[10px] m-auto"
              />
              <div className="w-[90%]  mt-2 m-auto  ">
                <div className="flex">
                  <p
                    className={`${
                      item.showMore === true ? " hidden " : "block text-[.9vw]"
                    }`}
                  >
                    {item.caption.substr(1, 70)}
                  </p>
                  <p
                    className={`${
                      item.showMore === true ? "block text-[.9vw]" : "hidden"
                    }`}
                  >
                    {item.caption}
                  </p>
                  <p
                    onClick={() => handleShowMore(item)}
                    className={`${
                      item.showMore === true
                        ? "hidden"
                        : "text-[.8vw] ml-2 mt-[2px] z-30 cursor-pointer text-[#000000aa]  "
                    }`}
                  >
                    show more
                  </p>
                </div>
                <div className="flex w-[12rem] justify-between mt-2 text-[.9vw]">
                  <p>
                    {item.like} {""} likes
                  </p>
                  <p
                    onClick={() => handleComent(item)}
                    className="cursor-pointer z-20 "
                  >
                    View all {item.NumberOfComments} comments{" "}
                  </p>
                </div>
                <div className="flex w-[7rem] justify-between">
                  <img src={like} className=" w-[22px] mt-2 cursor-pointer" />
                  <img
                    onClick={() => handleComent(item)}
                    src={coment}
                    className=" w-[22px] z-10 mt-2 cursor-pointer"
                  />
                  <img
                    onClick={() => setIsOpenModalSharePost(true)}
                    src={sharePost}
                    className=" w-[22px] z-10 mt-2.5 cursor-pointer  "
                  />
                </div>
              </div>
            </section>
          );
        })}
      </main>
    </>
  );
}
