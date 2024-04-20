"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useEffect, useState } from "react";
export default function ImageSlider({ imgUrl }: { imgUrl: string[][] }) {
  // const imgUrl = [
  //   ["/assets/sanathan/desktop/s1.webp", "/assets/sanathan/mobile/s1.webp"],
  //   ["/assets/sanathan/desktop/s2.webp", "/assets/sanathan/mobile/s2.webp"],
  //   ["/assets/sanathan/desktop/s3.webp", "/assets/sanathan/mobile/s3.webp"],
  //   ["/assets/sanathan/desktop/s6.webp", "/assets/sanathan/mobile/s6.webp"],
  //   ["/assets/sanathan/desktop/s5.webp", "/assets/sanathan/mobile/s5.webp"],
  // ];
  console.log("imgUrl", imgUrl);

  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    if (window.screen.width > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  return (
    <Swiper
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={0}
      loop={true}
      navigation={{
        nextEl: ".Sanathan_Swiper .swiper-button-next",
        prevEl: ".Sanathan_Swiper .swiper-button-prev",
        disabledClass: "hidden",
      }}
      modules={[Navigation, Autoplay]}
      className="Sanathan_Swiper"
    >
      <>
        {isMobile
          ? imgUrl.map((url, index) => (
              <SwiperSlide key={"santhan-" + index}>
                <Image
                  width={375}
                  height={375}
                  className="w-100"
                  style={{ height: "fit-content" }}
                  loading="lazy"
                  src={url[1]}
                  // srcSet={`${url[0]} 600w, ${url[1]} 1600w`}
                  sizes="(min-width: 768px) 768px,50vw"
                  alt="vikshit_bharat"
                  placeholder="blur"
                  blurDataURL={url[2]}
                />
              </SwiperSlide>
            ))
          : imgUrl.map((url, index) => (
              <SwiperSlide key={"santhan-" + index}>
                <Image
                  width={1920}
                  height={1040}
                  className="w-100"
                  style={{ width: "fit-content", height: "fit-content" }}
                  loading="lazy"
                  src={url[0]}
                  // srcSet={`${url[0]} 600w, ${url[1]} 1600w`}
                  sizes="(min-width: 768px) 768px,50vw"
                  alt="vikshit_bharat"
                  placeholder="blur"
                  blurDataURL={url[2]}
                />
              </SwiperSlide>
            ))}
      </>
      <div className="swiper-button-next">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          //   width="40"
          //   height="40"
          focusable="false"
        >
          <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
        </svg>
      </div>
      <div className="swiper-button-prev">
        <svg
          style={{ transform: "rotate(180deg)" }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
          //   width="40"
          //   height="40"
          focusable="false"
        >
          <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
        </svg>
      </div>
    </Swiper>
  );
}
