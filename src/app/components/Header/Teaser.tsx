"use client"; //directives we say to this , special type of statement or rule
import { useEffect, useRef, useState } from "react";
import Swiper from "swiper";

export default function Teaser({ lang }: { lang: string }) {
  // const [toggleMute, setToggleMute] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    if (window.screen.width > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);
  //   use ref we can without rendering we can manipulate dom elements
  const teaserMobileRef = useRef<HTMLVideoElement>(null);
  const teaserDesktopRef = useRef<HTMLVideoElement>(null);

  const handleToggleMute = (playing: boolean) => {
    console.log(teaserDesktopRef.current, teaserMobileRef.current);
    // const MJH_Swiper = document.querySelector(".MJH_swiper") as any; //html element inside prototype swiper
    // MJH_Swiper?.swiper.slideNext();
    //stop playing agenda and MJH video
    (document.querySelector(".MJH_swiper") as any)?.swiper?.slideNext();
    (document.querySelector(".AgendaSwiper") as any)?.swiper?.slideNext();
    // const iframeYtStreamVideo = document.querySelector(
    //   "#bjp_live_iframe"
    // ) as HTMLVideoElement;
    // console.log("iframe", iframeYtStreamVideo);
    // if (iframeYtStreamVideo) {
    //   const videoElement = iframeYtStreamVideo.querySelector(".video-stream");
    //   console.log("video element", videoElement);
    //   //@ts-ignore
    //   videoElement && videoElement.pause();
    // }

    if (teaserMobileRef.current) {
      teaserMobileRef.current.muted = playing;
    } else {
      teaserDesktopRef.current!.muted = playing;
    }
    // setToggleMute(playing);
    if (!playing) {
      document.getElementById("svg_mute")!.style.display = "none";
      document.getElementById("svg_unmute")!.style.display = "inline";
    } else {
      document.getElementById("svg_mute")!.style.display = "inline";
      document.getElementById("svg_unmute")!.style.display = "none";
    }
  };
  return (
    <>
      {/* {toggleMute ? ( */}
      <svg
        id="svg_mute"
        onClick={() => handleToggleMute(false)}
        className="svg_mute"
        style={{
          position: "absolute",
          top: "15%",
          left: "3.5%",
          zIndex: "9999",
          // display: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="30"
        viewBox="0 0 576 512"
      >
        <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
      </svg>
      {/* ) : ( */}
      <svg
        id="svg_unmute"
        onClick={() => handleToggleMute(true)}
        className="svg_unmute"
        style={{
          position: "absolute",
          top: "15%",
          left: "3.5%",
          zIndex: "9999",
          display: "none",
        }}
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        width="30"
        viewBox="0 0 320 512"
      >
        <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z" />
      </svg>
      {/* )} */}
      <>
        {!isMobile ? (
          <video
            ref={teaserDesktopRef}
            id="video2"
            className="d-none d-md-block"
            width="100%"
            style={{ minHeight: "600px", backgroundColor: "#ff7801" }}
            src={
              lang === "hi" ? "/videos/teaser/d.mp4" : "/videos/teaser/en_d.mp4"
            }
            autoPlay
            playsInline
            muted
            preload="true"
            loop //this is not present in actual code
          >
            <track
              src="captions_en.vtt"
              kind="captions"
              srcLang="hi"
              label="hindi_captions"
            />
          </video>
        ) : (
          <video
            ref={teaserMobileRef}
            id="video3"
            className="d-block d-md-none"
            width="100%"
            style={{ minHeight: "600px", backgroundColor: "#ff7801" }}
            src={
              lang === "hi" ? "/videos/teaser/m.mp4" : "/videos/teaser/en_m.mp4"
            }
            autoPlay
            playsInline
            muted
            preload="true"
            loop //this is not present in actual code
          ></video>
        )}
      </>
      <div
        className="d-md-none d-block"
        style={{
          position: "absolute",
          bottom: "0",
          height: "100%",
          width: "100%",
          background:
            "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 40%, rgba(48,45,87,1) 100%,  rgba(124,121,124,1) 100%)",
        }}
      ></div>
    </>
  );
}
