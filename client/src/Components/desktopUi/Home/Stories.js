import React from "react";
import newPost from "../../../Assets/images/newPost.jpg";
import next from "../../../Assets/svg/desktopUi/next.svg";
import previous from "../../../Assets/svg/desktopUi/previous.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import "../../../App.css";
import { useSwiper } from "swiper/react";

export default function Stories() {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const swiper = useSwiper();

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

  return (
    <main className="w-full h-[80px] border-[1px] relative z-10  border-[#00000058] rounded-[4px] mt-[20px] bg-[#fff] ">
      <Swiper
        slidesPerView={7}
        spaceBetween={10}
        slidesPerGroup={7}
        loop={false}
        loopFillGroupWithBlank={false}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
          clickable: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onSlideChange={(swiper) => {
          console.log(swiper.slidesPerView, "onSlideChange");
        }}
        onSwiper={(swiper) => console.log(swiper, "onSwiper")}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 7,
            width: "640px",
          },
          // when window width is >= 768px
            // 768: {
            //   slidesPerView: 2,
            //   width: "768px",
            // },
            // 800: {
            //   slidesPerView: 10,
            //   width: "800px",
            // },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {boxStories.map((item) => {
          return (
            <SwiperSlide className="cursor-pointer w-[60px] h-[60px] mr-2 rounded-[50%] bg-gradient-to-r p-[3px] from-[#feda75] via-[#fa7e1e] via-[#962fbf] via-[#4f5bd5] to-[#d62976]">
              <img
                src={item.img}
                className="w-[50px] h-full bg-white cursor-pointer  rounded-[50%]  object-cover"
              />
            </SwiperSlide>
          );
        })}

        <div className="fixed left-[18vw] top-[100px] bg-[#fff] rounded-[50%]  z-20 w-[25px]  h-[25px] cursor-pointer "></div>
        <img
          src={previous}
          className="fixed left-[18vw] top-[100px]  z-20 w-[25px]  h-[25px] cursor-pointer "
          ref={navigationNextRef}
        />
      </Swiper>
      <div className="absolute right-[2%] top-[30%] z-30 w-[25px] bg-[#fff] rounded-[50%] h-[25px] cursor-pointer "></div>
      <img
        ref={navigationPrevRef}
        className="absolute right-[2%] top-[30%] z-30 w-[25px]  h-[25px] cursor-pointer "
        src={next}
      />
    </main>
  );
}
