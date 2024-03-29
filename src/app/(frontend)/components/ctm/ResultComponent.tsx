"use client";
import Image from "next/image";
import RedirectToMainSite from "./RedirectToMainSite";
import { useState } from "react";
import { useCTMContext } from "../../context/ctmContext";
import {
  generateShareLinks,
  image_download_count,
  image_share_count,
} from "../../utils/common-functions";
import Link from "next/link";
import clsx from "clsx";

function ResultComponent({ lang = "hi" }: { lang: string }) {
  const CTM_data = [
    {
      id: 0,
      party_name: "INC",
      imgUrl1: `/assets/ctm/result-cards/a1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/a2.webp`,
      previewImgUrl: `ctm_cards/1.png`,
    },
    {
      id: 1,
      party_name: "AAP",
      imgUrl1: `/assets/ctm/result-cards/b1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/b2.webp`,
      previewImgUrl: `ctm_cards/2.png`,
    },
    {
      id: 2,
      party_name: "SP",
      imgUrl1: `/assets/ctm/result-cards/c1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/c2.webp`,
      previewImgUrl: `ctm_cards/3.png`,
    },
    {
      id: 3,
      party_name: "RJD",
      imgUrl1: `/assets/ctm/result-cards/d1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/d2.webp`,
      previewImgUrl: `ctm_cards/4.png`,
    },
    {
      id: 4,
      party_name: "TMC",
      imgUrl1: `/assets/ctm/result-cards/e1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/e2.webp`,
      previewImgUrl: `ctm_cards/5.png`,
    },
    {
      id: 5,
      party_name: "DMK",
      imgUrl1: `/assets/ctm/result-cards/f1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/f2.webp`,
      previewImgUrl: `ctm_cards/6.png`,
    },
    {
      id: 6,
      party_name: "NCP",
      imgUrl1: `/assets/ctm/result-cards/g1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/g2.webp`,
      previewImgUrl: `ctm_cards/7.png`,
    },
    {
      id: 7,
      party_name: "Shiv Sena (UBT)",
      imgUrl1: `/assets/ctm/result-cards/h1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/h2.webp`,
      previewImgUrl: `ctm_cards/8.png`,
    },
    {
      id: 8,
      party_name: "JMM",
      imgUrl1: `/assets/ctm/result-cards/i1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/i2.webp`,
      previewImgUrl: `ctm_cards/9.png`,
    },
    {
      id: 9,
      party_name: "National Conference",
      imgUrl1: `/assets/ctm/result-cards/j1.webp`,
      // imgUrl2: `/assets/ctm/result-cards/j2.webp`,
      previewImgUrl: `ctm_cards/10.png`,
    },
  ];
  const { party_name } = useCTMContext();
  const [result] = useState(
    CTM_data.find((item) => item.party_name === party_name)! || CTM_data[0]
  );
  const [showRedirectModal, setShowRedirectModal] = useState(false);
  let link = encodeURIComponent(
    "https://mahathugbandhan.com/api/v1/image_metamaker?name=" +
      result.previewImgUrl
  );
  let text = "";
  if (lang === "hi") {
    text =
      "महाठगबंधन मतलब भ्रष्टाचार!" +
      " %0A" +
      "आइए हम सब अपने भारत को इन ठगों से बचायें!" +
      " %0A" +
      "अभी https://mahathugbandhan.com/ देखें!";
  } else {
    text =
      "Mahathugbandhan means corruption!" +
      " %0A" +
      "Let us all save Bharat from these thugs!" +
      " %0A" +
      "Check out https://mahathugbandhan.com/ now!";
  }

  const {
    w: whatsapp_link,
    t: twitter_link,
    f: facebook_link,
  } = generateShareLinks(link, text);

  return (
    <>
      <div
        id="ctm-resultPopup"
        className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex-col justify-center items-center w-full md:inset-0 h-screen max-h-full bg-[#1a1a18eb]"
      >
        <div className="w-full h-full shape  rounded-[20px] flex flex-col justify-center items-center  gap-7 overflow-visible relative ">
          <div className="w-[100vw] flex flex-col sm:flex-row justify-center items-center relative gap-[5vw] sm:gap-5 lg:gap-20 ">
            <div className="h-full w-[85%] sm:w-[45%] flex flex-col  gap-5 ">
              <Image
                width={1920}
                height={1080}
                id="ctm-result-popup-img1"
                className="h-full w-full    object-contain "
                src={result.imgUrl1}
                alt="ctm result card "
              />
              {/* <!-- <Image width={50} height={80}
                id="ctm-result-popup-img2"
                className="h-full w-full    object-contain "
                src="/assets/ctm/result-card/hindi/a2.webp"
                alt="ctm card 2"
              /> --> */}
            </div>
            <div className=" h-full w-full sm:w-[30%]  text-white flex flex-col justify-center items-center gap-5 sm:gap-[3vw] ">
              <div className="flex flex-col justify-center items-center gap-[1vw] ">
                <h3
                  className={clsx(
                    "text-[9vw] sm:text-[2rem] font-dangerous text-white ",
                    {
                      "font-yatra ": lang === "hi",
                      "font-dangerous ": lang === "en",
                    }
                  )}
                >
                  {lang === "hi" ? "शेयर" : "share"}
                </h3>
                <div
                  id="ctm-result-card-share"
                  className="text-white flex justify-center items-center gap-4 sm:gap-5"
                >
                  <Link
                    className="flex flex-col justify-center items-center gap-0 text-black"
                    onClick={image_share_count}
                    href={whatsapp_link}
                    target="_blank"
                  >
                    <Image
                      width={50}
                      height={50}
                      className="h-[10vw] sm:h-[50px]"
                      src="/assets/svg/whatsapp.svg"
                      alt="whatsapp logo"
                    />
                    {/* <span className="text-white font-bold text-[2vw] sm:text-[1vw]">
                      Whatsapp{" "}
                    </span> */}
                  </Link>
                  <Link
                    className="flex flex-col justify-center items-center gap-0 text-black"
                    onClick={image_share_count}
                    href={twitter_link}
                    target="_blank"
                  >
                    <Image
                      width={50}
                      height={50}
                      className="w-[11vw] h-[11vw] sm:w-[55px] sm:h-[55px] bg-black p-[5px] rounded-[50%]"
                      src="/assets/svg/twt-x-logo.svg"
                      alt="twitter logo"
                    />
                    {/* <span className="text-white font-bold text-[2vw] sm:text-[1vw]">
                      Twitter
                    </span> */}
                  </Link>
                  <Link
                    className="flex flex-col justify-center items-center gap-0  text-black"
                    onClick={image_share_count}
                    href={facebook_link}
                    target="_blank"
                  >
                    <Image
                      width={50}
                      height={50}
                      className="h-[10vw] sm:h-[50px]"
                      src="/assets/svg/fb.svg"
                      alt="facebook logo"
                    />
                    {/* <span className="text-white font-bold text-[2vw] sm:text-[1vw]">
                      Facebook
                    </span> */}
                  </Link>
                </div>
              </div>
              <a
                id="ctm-result-card-download"
                href={result.imgUrl1}
                download={result.party_name}
                onClick={image_download_count}
                className="w-fit max-w-[200px] bg-[rgb(255,0,0)] py-1 px-4 flex justify-center items-center gap-3 rounded-md text-white font-bold cursor-pointer "
              >
                {/* <span className="material-symbols-outlined"> download </span> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="white"
                  className="w-5 h-5"
                >
                  <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
                </svg>
                <span
                  className={clsx(
                    "w-fit text-[1.2rem] sm:text-[1.5rem] pt-[2px]",
                    {
                      "font-yatra ": lang === "hi",
                      "font-book text-[1rem] sm:text-[1.2rem]": lang === "en",
                    }
                  )}
                >
                  {lang === "hi" ? "डाउनलोड" : "Download"}
                </span>
              </a>
            </div>
            {/* <span
              onClick={() => setShowRedirectModal(true)}
              title="close result card"
              className="material-symbols-outlined text-red-700 text-[10vw]   sm:text-[4vw] md:text-[3rem] absolute top-[-15vw]  right-[2vw] sm:right-[5vw] sm:top-[-15vw] lg:right-[6vw] lg:top-[-12vw] xl:top-[-8vw] cursor-pointer"
            >
              cancel
            </span> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              // className="material-symbols-outlined fill-red-700 w-[6.5vw]  sm:w-[4vw]  lg:w-[2.6vw] absolute top-[-6.2vw]  right-[-2.7vw] sm:right-[-1.7vw] sm:top-[-5.7vw] lg:right-[-.7vw] lg:top-[-4.2vw] cursor-pointer"
              className="material-symbols-outlined fill-red-700 w-[10vw]   sm:w-[3rem] lg:w-[3.5rem] absolute top-[-15vw]  right-[.8rem] sm:right-[4.5vw] sm:top-[-15vw] lg:right-[5.5vw] lg:top-[-12vw] xl:top-[-8vw] cursor-pointer"
              onClick={() => setShowRedirectModal(true)}
            >
              <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* <!-- redirect popup --> */}
      {showRedirectModal && <RedirectToMainSite lang={lang} />}
    </>
  );
}

export default ResultComponent;
