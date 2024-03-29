"use client";
import { useEffect } from "react";

export default function TeaserVideo({
  // isMobile,
  lang,
}: {
  // isMobile: boolean;
  lang: string;
}) {
  useEffect(() => {
    // console.log("video mounted", isMobile);
    // let videoElement = document.getElementById(
    //   "teaser-video"
    // ) as HTMLVideoElement;
    // let sourceElement = document.getElementById(
    //   "source-of-teaser-video"
    // ) as HTMLSourceElement;
    // if (window.screen.width > 640) {
    //   // videoElement.setAttribute("poster", "/assets/teaser/poster_hd.webp");
    //   // videoElement.style.objectFit = "contain";
    //   // videoElement.style.objectPosition = "0px";
    //   sourceElement.setAttribute(
    //     "src",
    //     `/assets/teaser/teaser_${lang === "hi" ? "hd" : "ed"}.mp4`
    //   );
    // } else {
    //   // videoElement.setAttribute("poster", "/assets/teaser/poster_hm.webp");
    //   // videoElement.style.objectFit = "auto";
    //   // videoElement.style.objectPosition = "0px"; //-20px
    //   // videoElement.style.objectFit = "fill";
    //   // videoElement.style.objectPosition = "auto";
    //   sourceElement.setAttribute(
    //     "src",
    //     `/assets/teaser/teaser_${lang === "hi" ? "hm" : "em"}.mp4`
    //   );
    // }
    // videoElement.load();
    // Show loading animation.
    // var playPromise = video.play();
    // let playPromise =
    // console.log("playPromise", playPromise);
    // if (playPromise !== undefined) {
    //   videoElement.play();
    // }
  }, []);

  const toggleMute = () => {
    let videoElement = document.getElementById(
      "teaser-video"
    ) as HTMLVideoElement;
    if (videoElement.muted) {
      videoElement.muted = false;
      (document.getElementById("svg_mute") as HTMLElement).style.display =
        "none";
      (document.getElementById("svg_unmute") as HTMLElement).style.display =
        "block";
      // pledgeSwiper.slideNext(); // Assuming pledgeSwiper is defined elsewhere
    } else {
      videoElement.muted = true;
      console.log("dddd");
      (document.getElementById("svg_unmute") as HTMLElement).style.display =
        "none";
      (document.getElementById("svg_mute") as HTMLElement).style.display =
        "block";
    }
  };
  return (
    <>
      <svg
        id="svg_mute"
        onClick={toggleMute}
        className="absolute top-28 left-6 text-[3rem] sm:top-10 sm:left-12 z-[2]  sm:text-[4vw] cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="30"
        viewBox="0 0 576 512"
      >
        <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
      </svg>
      <svg
        id="svg_unmute"
        onClick={toggleMute}
        className="absolute top-28 left-6 text-[3rem] sm:top-10 sm:left-12 z-[2]  sm:text-[4vw] cursor-pointer hidden"
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="30"
        viewBox="0 0 320 512"
      >
        <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z" />
      </svg>

      {/* <!-- video --> */}
      {/* <div
        id="header-video"
        className="relative w-full h-full bg-black flex justify-center items-center"
        style={{ minHeight: "600px" }}
      > */}
      <video
        id="teaser-video"
        preload="true"
        autoPlay
        playsInline
        muted
        loop
        className="relative w-full h-full bg-black hidden md:flex justify-center items-center   object-cover z-[1]   sm:object-cover sm:w-full  md:absolute md:top-[0]"
        style={{ minHeight: "600px" }}
      >
        <source
          id="source-of-teaser-video"
          src={
            lang === "hi"
              ? "/assets/teaser/teaser_hd.mp4"
              : "/assets/teaser/teaser_ed.mp4"
          }
          type="video/mp4"
        />
      </video>
      <video
        id="teaser-video"
        preload="true"
        autoPlay
        playsInline
        muted
        loop
        className="relative w-full h-full bg-black flex md:hidden justify-center items-center   object-cover z-[1]   sm:object-cover sm:w-full  md:absolute md:top-[0]"
        style={{ minHeight: "600px" }}
      >
        <source
          id="source-of-teaser-video"
          src={
            lang === "hi"
              ? "/assets/teaser/teaser_hm.mp4"
              : "/assets/teaser/teaser_em.mp4"
          }
          type="video/mp4"
        />
      </video>
      {/* </div> */}
    </>
  );
}
