"use client";

import clsx from "clsx";
import "../styles/achievement.css";
import dynamic from "next/dynamic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import { useAppContext } from "../context/appContext";
import { useEffect, useState } from "react";
const LazySwiperImage = dynamic(() => import("./swiper Slider/Achievement"));
import SwiperImage from "./swiper Slider/Achievement";

function Achievement({
  title = "हमारी उपलब्धियाँ",
  lang = "hi",
}: {
  title: string;
  lang: string;
}) {
  const { isMobile } = useAppContext();
  // const images = [
  //   `/assets/achievement section/${lang}/3 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/4 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/5 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/6 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/7 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/8 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/9 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/10 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   // `/assets/achievement section/${lang}/11 - ${isMobile? "Mobile" : "Desktop"}.webp`,
  //   `/assets/achievement section/${lang}/12 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/13 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  //   `/assets/achievement section/${lang}/14 - ${
  //     isMobile ? "Mobile" : "Desktop"
  //   }.webp`,
  // ];
  const data = {
    mobile: {
      hi: [
        "/assets/achievement section/hi/3 - Mobile.webp",
        "/assets/achievement section/hi/4 - Mobile.webp",
        "/assets/achievement section/hi/5 - Mobile.webp",
        "/assets/achievement section/hi/6 - Mobile.webp",
        "/assets/achievement section/hi/7 - Mobile.webp",
        "/assets/achievement section/hi/8 - Mobile.webp",
        "/assets/achievement section/hi/9 - Mobile.webp",
        "/assets/achievement section/hi/10 - Mobile.webp",
        "/assets/achievement section/hi/12 - Mobile.webp",
        "/assets/achievement section/hi/13 - Mobile.webp",
        "/assets/achievement section/hi/14 - Mobile.webp",
      ],
      en: [
        "/assets/achievement section/en/3 - Mobile.webp",
        "/assets/achievement section/en/4 - Mobile.webp",
        "/assets/achievement section/en/5 - Mobile.webp",
        "/assets/achievement section/en/6 - Mobile.webp",
        "/assets/achievement section/en/7 - Mobile.webp",
        "/assets/achievement section/en/8 - Mobile.webp",
        "/assets/achievement section/en/9 - Mobile.webp",
        "/assets/achievement section/en/10 - Mobile.webp",
        "/assets/achievement section/en/12 - Mobile.webp",
        "/assets/achievement section/en/13 - Mobile.webp",
        "/assets/achievement section/en/14 - Mobile.webp",
      ],
    },
    desktop: {
      hi: [
        "/assets/achievement section/hi/3 - Desktop.webp",
        "/assets/achievement section/hi/4 - Desktop.webp",
        "/assets/achievement section/hi/5 - Desktop.webp",
        "/assets/achievement section/hi/6 - Desktop.webp",
        "/assets/achievement section/hi/7 - Desktop.webp",
        "/assets/achievement section/hi/8 - Desktop.webp",
        "/assets/achievement section/hi/9 - Desktop.webp",
        "/assets/achievement section/hi/10 - Desktop.webp",
        "/assets/achievement section/hi/12 - Desktop.webp",
        "/assets/achievement section/hi/13 - Desktop.webp",
        "/assets/achievement section/hi/14 - Desktop.webp",
      ],
      en: [
        "/assets/achievement section/en/3 - Desktop.webp",
        "/assets/achievement section/en/4 - Desktop.webp",
        "/assets/achievement section/en/5 - Desktop.webp",
        "/assets/achievement section/en/6 - Desktop.webp",
        "/assets/achievement section/en/7 - Desktop.webp",
        "/assets/achievement section/en/8 - Desktop.webp",
        "/assets/achievement section/en/9 - Desktop.webp",
        "/assets/achievement section/en/10 - Desktop.webp",
        "/assets/achievement section/en/12 - Desktop.webp",
        "/assets/achievement section/en/13 - Desktop.webp",
        "/assets/achievement section/en/14 - Desktop.webp",
      ],
    },
  } as any;
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(data[isMobile ? "mobile" : "desktop"][lang]);
  }, [isMobile, lang]);
  console.log(images, isMobile, lang);

  // const [delay, setDelay] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setDelay(true);
  //   }, 2000);
  // }, []);
  return (
    // <!-- Achievement section -->
    <section
      id="achievement"
      className="w-full h-fit pt-1 sm:pt-[3rem] bg-black mt-[0vw] sm:mt-[0vw] relative z-[0]"
    >
      <div
        className={clsx("flex flex-col gap-10 text-white py-4 px-[18vw]", {
          "pb-6": lang === "en",
        })}
      >
        <div className="flex flex-col items-center gap-0">
          <span
            className={clsx(
              "tracking-wider text-center text-[7vw] sm:text-[3vw]  max-w-[200px] sm:max-w-fit",
              {
                "font-yatra": lang === "hi",
                "font-dangerous": lang === "en",
              }
            )}
          >
            {title}
          </span>
          <div className="w-16 sm:w-24 h-[2px] sm:h-[3px] bg-yellow-600"></div>
        </div>
      </div>
      <div className="w-full  min-h-fit bg-black sm:h-screen max-h-fit sm:mt-[50px] ">
        {/* swiper slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 700000,
            disableOnInteraction: false,
          }}
          className="achievement-swiper  h-fit w-full"
        >
          {images.map((src: string, index: number) => (
            <SwiperSlide key={index} className="h-fit w-full ">
              <LazySwiperImage isMobile={isMobile} src={src} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Achievement;
