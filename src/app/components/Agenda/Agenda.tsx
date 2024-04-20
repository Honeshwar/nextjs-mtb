"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import swiper from "swiper";

export default function Agenda() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    if (window.screen.width > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  const AgendaSwiperRef = useRef<any>(null);
  const [videoIsPlaying, setVideoIsPlaying] = useState(false);

  const videoUrl = [
    ["/assets/agenda/videos/1.mp4", "/assets/agenda/thumbnails/t1.webp"],
    ["/assets/agenda/videos/2.mp4", "/assets/agenda/thumbnails/t2.webp"],
    ["/assets/agenda/videos/3.mp4", "/assets/agenda/thumbnails/t3.webp"],
    ["/assets/agenda/videos/4.mp4", "/assets/agenda/thumbnails/t4.webp"],
    ["/assets/agenda/videos/5.mp4", "/assets/agenda/thumbnails/t5.webp"],
    ["/assets/agenda/videos/6.mp4", "/assets/agenda/thumbnails/t6.webp"],
    ["/assets/agenda/videos/7.mp4", "/assets/agenda/thumbnails/t7.webp"],
    ["/assets/agenda/videos/8.mp4", "/assets/agenda/thumbnails/t8.webp"],
    ["/assets/agenda/videos/9.mp4", "/assets/agenda/thumbnails/t9.webp"],
    ["/assets/agenda/videos/10.mp4", "/assets/agenda/thumbnails/t10.webp"],
    ["/assets/agenda/videos/11.mp4", "/assets/agenda/thumbnails/t11.webp"],
    ["/assets/agenda/videos/12.mp4", "/assets/agenda/thumbnails/t12.webp"],
    ["/assets/agenda/videos/13.mp4", "/assets/agenda/thumbnails/t13.webp"],
  ];
  function playVideo(e: any) {
    e.preventDefault();
    const videoElementActive = document.querySelector(
      ".AgendaSwiper .swiper-slide-active video"
    ) as HTMLVideoElement;
    const videoElement = e.target;
    console.log(
      videoElementActive.outerHTML,
      videoElement.outerHTML,
      videoElement === videoElementActive
    );
    if (
      videoElementActive.outerHTML === videoElement.outerHTML &&
      !videoIsPlaying
    ) {
      AgendaSwiperRef.current!.swiper.autoplay.stop();
      //   videoElement.load();
      //   videoElement.controls = true;

      // muted teasure video, when we play this video
      (document.getElementById(
        isMobile ? "video3" : "video2"
      ) as HTMLVideoElement)!.muted = true;
      document.getElementById("svg_mute")!.style.display = "inline";
      document.getElementById("svg_unmute")!.style.display = "none";
      //stop playing MJH video
      (document.querySelector(".MJH_swiper") as any)!.swiper.slideNext();

      videoElement.play(); //play
      setVideoIsPlaying(true);

      // Listen for the slideChange event
      AgendaSwiperRef.current!.swiper.on("slideChange", function () {
        AgendaSwiperRef.current!.swiper.autoplay.start();
        // videoElement.controls = false;
        videoElement.load(); //video load again and we will see poster img again

        setVideoIsPlaying(false);
      });
    }
  }
  return (
    <section id="agenda" className="mt-5">
      <div className="container agenda">
        <h3 className="head1">देश और दुनिया की आवाज़</h3>
        <section className=" m-auto">
          <Swiper
            ref={AgendaSwiperRef}
            slidesPerView={1}
            spaceBetween={0}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".AgendaSwiper .swiper-button-next",
              prevEl: ".AgendaSwiper .swiper-button-prev",
            }}
            modules={[Autoplay, Navigation]}
            className="AgendaSwiper"
          >
            {videoUrl.map((url, index) => (
              <SwiperSlide
                key={"Agenda-Video" + index}
                className="testi videos"
                style={{ backgroundColor: "black" }}
              >
                <video
                  onCanPlay={playVideo}
                  id="vtest_video1"
                  poster={url[1]}
                  preload="none"
                  width="100%"
                  height="100%"
                  controls
                >
                  <source
                    id="test_video1"
                    width="100%"
                    height="100%"
                    src={url[0]}
                    type="video/mp4"
                  />
                </video>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ backgroundColor: "white", borderRadius: "90%" }}
                height="30"
                width="30"
                viewBox="0 0 512 512"
              >
                <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
              </svg>

              <span className="visually-hidden"></span>
            </div>
            <div className="swiper-button-next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ backgroundColor: "white", borderRadius: "90%" }}
                height="30"
                width="30"
                viewBox="0 0 512 512"
              >
                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
              </svg>
            </div>
          </Swiper>
        </section>
      </div>
    </section>
  );
}
