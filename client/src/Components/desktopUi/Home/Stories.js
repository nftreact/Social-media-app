import React, { useRef, useState } from "react";
import newPost from "../../../Assets/images/newPost.jpg";
import Slider from "react-slick";
import next from "../../../Assets/svg/desktopUi/next.svg";
import previous from "../../../Assets/svg/desktopUi/previous.svg";
import ShowStories from "../Home/ShowStories";
import "../../../copySlick.css";
import "../../../copythemSlick.css";

export default function Stories() {
  const refState = useRef(null);
  const [ShowStorei, setShowStorei] = useState(false);

  const boxStories = [
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
    {
      img: newPost,
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <ShowStories ShowStorei={ShowStorei} setShowStorei={setShowStorei} />
      <main className="w-full  h-[80px] border-[1px] relative z-10  border-[#00000058] rounded-[4px] mt-[20px] bg-[#fff] ">
        <Slider
          ref={refState}
          {...settings}
          style={{
            width: "100%",
            position: "absolute",
            overflow: "auto",
            overflow: "hidden",
            padding: "9px 20px 10px 10px",
          }}
        >
          {boxStories.map((item) => {
            return (
              <section
                onClick={() => setShowStorei(true)}
                className="backgroundStoreis"
                // c="cursor-pointer relative w-[40px] h-[60px] mr-2 rounded-[50%] bg-gradient-to-r  from-[#feda75] via-[#fa7e1e] via-[#962fbf] via-[#4f5bd5] to-[#d62976]"
              >
                <img
                  className="StoriesStyle"
                  src={item.img}
                  // lassName="w-[50px] h-[60px] absolute bg-white cursor-pointer  rounded-[50%]  object-cover"
                />
              </section>
            );
          })}
        </Slider>

        <div className="relative  left-[5px] top-[25px] bg-[#fff] rounded-[50%]  z-30 w-[25px]  h-[25px] cursor-pointer ">
          <img
            onClick={() => refState.current.slickPrev()}
            src={previous}
            className="absolute z-30 w-[25px]  h-[25px] cursor-pointer "
          />
        </div>
        <div
          onClick={() => refState.current.slickNext()}
          className="absolute right-[2%] top-[25px] z-30 w-[25px] bg-[#fff] rounded-[50%] h-[25px] cursor-pointer "
        >
          <img
            className={`absolute  z-30 w-[25px]  h-[25px] cursor-pointer`}
            src={next}
          />
        </div>
      </main>
    </>
  );
}
