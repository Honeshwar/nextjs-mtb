"use client";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Video } from "@splidejs/splide-extension-video";
// Default theme
import "@splidejs/react-splide/css";

import { useEffect, useRef, useState } from "react";
import {
  DelayContextProvider,
  useDelayContext,
} from "@/app/context/DelayContext";
export default function VideoSlider({
  title,
  lang,
}: {
  title: string;
  lang: string;
}) {
  // const [isMobile, setIsMobile] = useState(true);
  // useEffect(() => {
  //   if (window.screen.width > 768) {
  //     setIsMobile(false);
  //   } else {
  //     setIsMobile(true);
  //   }
  // }, []);

  return (
    <DelayContextProvider>
      <VideoSliderDescendant title={title} lang={lang} />
    </DelayContextProvider>
  );
}

function VideoSliderDescendant({
  title,
  lang,
}: // isMobile,
{
  title: string;
  lang: string;
  // isMobile: boolean;
}) {
  const MJH_Swiper = useRef<any>(null);
  const videoUrl = [
    [
      "/videos/why/1.mp4",
      `/videos/why/thumbnails/${lang === "en" ? "en/" : ""}Aastha.jpeg`,
    ],
    [
      "/videos/why/2.mp4",
      `/videos/why/thumbnails/${lang === "en" ? "en/" : ""}Infra.jpeg`,
    ],
    [
      "/videos/why/3.mp4",
      `/videos/why/thumbnails/${
        lang === "en" ? "en/" : ""
      }ThreeGeneration.jpeg`,
    ],
  ];

  const splideRef = useRef<any>(null);
  const { show } = useDelayContext();

  // useEffect(() => {
  //   if (splideRef.current) {
  //     splideRef.current.splide.on("mounted", (splide: any) => {
  //       console.log("splide mounted", splide);

  //     });
  //   }
  // // },[])
  function playVideo(event: any) {
    event.preventDefault();

    // console.log("splide_Why_modi", localStorage.getItem("splide_Why_modi"));
    // if (!localStorage.getItem("splide_Why_modi")) {
    //   localStorage.setItem(
    //     "splide_Why_modi",
    //     JSON.stringify(splideRef.current)
    //   );
    // }
    // console.log(
    //   "play video splideRef.current.splide",
    //   splideRef.current.splide,
    //   splideRef.current
    // );

    //stop autoplay, by using api
    const { Autoplay } = splideRef.current.splide.Components;
    Autoplay.pause();

    // stop already played videos
    (document.getElementById("kaamdhar_video") as HTMLVideoElement)!.load();

    const videoElement = event.target;
    videoElement.play();
    videoElement.controls = true;

    splideRef.current.splide.on("moved", (splide: any) => {
      console.log("splide move", splide);
      videoElement.controls = false;
      videoElement.paused();

      // console.log("pause video", splideRef.current);
      Autoplay.play();
      // splideRef.current.options.autoplay = true;
    });
  }
  const options = {
    type: "loop",
    perPage: 3,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    focus: "center",
    pagination: true,
    arrows: true,
    breakpoints: {
      1000: { perPage: 3 },
      768: { perPage: 1 },
      576: { perPage: 1, gap: "1rem", padding: "30px" },
    },
    // Register the onMoved event handler
    // onMoved: handleSlideChange,
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     const { Autoplay } = splideRef.current.splide.Components;
  //     Autoplay.pause();
  //   }, 5000);
  // });

  return (
    <>
      {show && (
        <section className="container-fluid mt-4" id="why_modi">
          <h3 className="head mb-4">{title}</h3>
          <Splide
            ref={splideRef}
            id="media"
            className="splide "
            role="group"
            aria-label="Splide Basic HTML Example"
            style={{ backgroundColor: "black" }}
            options={options}
          >
            {/* <div className="splide__arrows">
    <button className="splide__arrow splide__arrow--prev">Prev</button>
    <button className="splide__arrow splide__arrow--next">Next</button>
  </div> */}
            {/* <div className="splide__arrow">
              <button className="splide__arrow splide__arrow--prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 40 40"
                  width="40"
                  height="40"
                  focusable="false"
                >
                  <path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
                </svg>
              </button>
            </div> */}

            {videoUrl?.map((url: string[], index: number) => (
              <SplideSlide key={"why-" + (index + 1)}>
                <div className="media-card">
                  <div className="card-title text-center">
                    <video
                      onClick={playVideo}
                      src={url[0]}
                      preload="none"
                      poster={url[1]}
                      className="w-100  "
                      width="100%"
                      style={{ borderRadius: "18px" }}
                      height="100%"
                      // controls
                    ></video>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </section>
      )}
    </>
  );
}
/**
 *  function playMJHVideo(e: any) {
    const videoElementActive = document.querySelector(
      ".MJH_swiper .swiper-slide-active video"
    ) as HTMLVideoElement;
    const videoElement = e.target;
    console.log(
      videoElementActive.outerHTML,
      videoElement.outerHTML,
      videoElement === videoElementActive
    );
    if (
      videoElementActive.outerHTML === videoElement.outerHTML
      //    &&
      //   !MJHVideoIsPlaying
    ) {
      MJH_Swiper.current!.swiper.autoplay.stop();
      videoElement.load();
      videoElement.controls = true;

      // muted teasure video, when we play this video
      (document.getElementById(
        isMobile ? "video3" : "video2"
      ) as HTMLVideoElement)!.muted = true;
      document.getElementById("svg_mute")!.style.display = "inline";
      document.getElementById("svg_unmute")!.style.display = "none";
      //stop playing agenda video
      (document.querySelector(".AgendaSwiper") as any)!.swiper.slideNext();

      videoElement.play(); //play
      //   MJHVideoIsPlaying = true;

      // Listen for the slideChange event
      MJH_Swiper.current!.swiper.on("slideChange", function () {
        MJH_Swiper.current!.swiper.autoplay.start();
        videoElement.controls = false;
        videoElement.load(); //video load again and we will see poster img again
        // MJHVideoIsPlaying = false;
      });
    }
  }

 <section id="modi-zaroori-hain" className="mt-4 mt-md-5 pb-md-0 ">
          <h3
            className="head1 pb-1 pb-md-4"
            style={{ position: "relative", zIndex: "2" }}
          >
            {title}
          </h3>

          {/* mobile 
          <Swiper
            ref={MJH_Swiper}
            slidesPerView={1}
            spaceBetween={0}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".MJH_swiper .swiper-button-next",
              prevEl: ".MJH_swiper .swiper-button-prev",
              disabledClass: "hidden",
            }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Pagination, Autoplay]}
            className="MJH_swiper d-md-none d-block"
          >
            {videoUrl.map((url, index) => (
              <SwiperSlide key={"why-" + index}>
                <video
                  className="video"
                  onClick={playMJHVideo}
                  src={url}
                ></video>
              </SwiperSlide>
            ))}

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

          {/* desktop 
          <div className="container px-0 d-md-block d-none">
            <div className="row">
              <div className="col-4">
                <video
                  id=""
                  className="w-100  "
                  width="100%"
                  style={{ borderRadius: "18px" }}
                  height="100%"
                  controls
                >
                  <source src="/videos/why/1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="col-4">
                <video
                  id=""
                  className="w-100  "
                  width="100%"
                  style={{ borderRadius: "18px" }}
                  height="100%"
                  controls
                >
                  <source src="/videos/why/2.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="col-4">
                <video
                  id=""
                  className="w-100  "
                  width="100%"
                  style={{ borderRadius: "18px" }}
                  height="100%"
                  controls
                >
                  <source src="/videos/why/3.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </section> */
