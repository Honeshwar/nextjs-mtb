"use client";
import { useEffect, useState } from "react";
// import { Autoplay, EffectCube, Pagination, Scrollbar } from "swiper/modules";
// import { Swiper } from "swiper/react";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function MediaCoverage() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    if (window.screen.width > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  const media = {
    mobile: [
      [
        "/assets/media-coverage/mobile/m1.webp",
        "https://www.aajtak.in/business/news/story/india-top-10-big-famous-start-ups-come-during-pm-modi-government-and-create-history-unicorn-tutk-1395435-2022-01-19",
      ],
      [
        "/assets/media-coverage/mobile/m2.webp",
        "https://www.tv9hindi.com/photo-gallery/knowledge-photos/religious-places-development-in-narendra-modi-period-which-will-be-known-for-new-development-au121-1500877.html",
      ],
      [
        "/assets/media-coverage/mobile/m3.webp",
        "https://hindi.news18.com/news/nation/pm-narendra-modi-made-india-superpower-in-world-trade-empowered-common-man-5173107.html",
      ],
    ],
    desktop: [
      [
        "/assets/media-coverage/desktop/m1.webp",
        "https://www.aajtak.in/business/news/story/india-top-10-big-famous-start-ups-come-during-pm-modi-government-and-create-history-unicorn-tutk-1395435-2022-01-19",
      ],
      [
        "/assets/media-coverage/desktop/m2.webp",
        "https://www.tv9hindi.com/photo-gallery/knowledge-photos/religious-places-development-in-narendra-modi-period-which-will-be-known-for-new-development-au121-1500877.html",
      ],
      [
        "/assets/media-coverage/desktop/m3.webp",
        "https://hindi.news18.com/news/nation/pm-narendra-modi-made-india-superpower-in-world-trade-empowered-common-man-5173107.html",
      ],
    ],
  };
  return (
    <div className="container-fluid">
      <h3 className="head mb-1 mt-5 mb-md-4">मीडिया</h3>
      <div
        id="media"
        className="splide "
        role="group"
        aria-label="Splide Basic HTML Example"
        style={{ backgroundColor: "black" }}
      >
        <Splide hasTrack={false}>
          {isMobile
            ? media.mobile.map((item, index) => (
                <SplideSlide key={"media-coverage-" + index}>
                  {/* <div className="media-card">
                    <div className="card-title text-center"> */}
                  <a href={item[1]}>
                    <img
                      className=""
                      loading="lazy"
                      src={item[0]}
                      // srcset="img/mobile/Media Coverage (Hindi) 1.webp 600w, img/desktop/m1.webp 1600w"
                      sizes="(min-width: 768px) 768px,50vw"
                      alt="vikshit_bharat"
                      width={"100%"}
                      // width={320}
                      // height={190}
                    />
                  </a>
                  {/* </div>
                    </div> */}
                </SplideSlide>
              ))
            : media.desktop.map((item, index) => (
                <SplideSlide
                  key={"media-coverage-" + index}
                  // style={{ maxHeight: "200px" }}
                >
                  {/* <div className="media-card">
                <div className="card-title text-center"> */}
                  <a href={item[1]}>
                    <img
                      className=""
                      loading="lazy"
                      src={item[0]}
                      // srcset="img/mobile/Media Coverage (Hindi) 1.webp 600w, img/desktop/m1.webp 1600w"
                      sizes="(min-width: 768px) 768px,50vw"
                      alt="vikshit_bharat"
                      width={"100%"}
                      // height={200}
                    />
                  </a>
                  {/* </div>
              </div> */}
                </SplideSlide>
              ))}

          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>
    </div>
  );
}
