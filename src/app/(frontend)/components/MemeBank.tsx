"use client";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/meme-bazar.css";
import { useEffect, useState } from "react";
import {
  image_download_count,
  image_share_count,
  upload_count,
} from "../utils/common-functions";
import clsx from "clsx";
import MemeImage from "./swiper Slider/MemeImage";
import dynamic from "next/dynamic";

function MemeBank({ lang = "hi" }: { lang: string }) {
  const [slides, setSlides] = useState(4.7);
  const [openShareModal, setOpenShareModal] = useState(false);
  const [openUploadMemeModal, setopenUploadMemeModal] = useState(false);
  const [uploadfileName, setUploadfileName] = useState("फ़ाइल चयन करें");
  const [uploadFileError, setUploadFileError] = useState(false);
  const [openThankYouModal, setOpenThankYouModal] = useState(false);
  const [UPLOAD, setUPLOAD] = useState(false);

  const [whatsapp_link, setWhatsapp_link] = useState("");
  const [facebook_link, setFacebook_link] = useState("");
  const [twitter_link, setTwitter_link] = useState("");
  const [slideChanged, setSlideChanged] = useState(false);

  const LazyMemeImage = dynamic(() => import("./swiper Slider/MemeImage"), {
    ssr: false,
  });
  useEffect(() => {
    if (window.screen.width <= 640) {
      setSlides(1.7);
    }
  }, []);
  const images = [
    {
      src: "/assets/meme-bazar/1.webp",
      "data-url": "memes/1.jpg",
    },
    {
      src: "/assets/meme-bazar/2.webp",
      "data-url": "memes/2.jpg",
    },
    {
      src: "/assets/meme-bazar/3.webp",
      "data-url": "memes/3.jpg",
    },
    {
      src: "/assets/meme-bazar/4.webp",
      "data-url": "memes/4.jpg",
    },
    {
      src: "/assets/meme-bazar/5.webp",
      "data-url": "memes/5.jpg",
    },
    {
      src: "/assets/meme-bazar/6.webp",
      "data-url": "memes/6.jpg",
    },
    {
      src: "/assets/meme-bazar/7.webp",
      "data-url": "memes/7.jpg",
    },
    {
      src: "/assets/meme-bazar/8.webp",
      "data-url": "memes/8.jpg",
    },
    {
      src: "/assets/meme-bazar/9.webp",
      "data-url": "memes/9.jpg",
    },
    {
      src: "/assets/meme-bazar/10.webp",
      "data-url": "memes/10.jpg",
    },
    {
      src: "/assets/meme-bazar/11.webp",
      "data-url": "memes/11.jpg",
    },
    {
      src: "/assets/meme-bazar/12.webp",
      "data-url": "memes/12.png",
    },
    {
      src: "/assets/meme-bazar/13.webp",
      "data-url": "memes/13.png",
    },
    {
      src: "/assets/meme-bazar/14.webp",
      "data-url": "memes/14.png",
    },
    {
      src: "/assets/meme-bazar/15.webp",
      "data-url": "memes/15.png",
    },
    // "/assets/meme-bazar/16.webp",
  ];
  const downloadMeme = () => {
    const imgElement = document.querySelector(
      ".meme-bazar-swiper .swiper-slide-active > img"
    ) as HTMLImageElement;

    console.log("download meme image url", imgElement, imgElement.src);

    // Creating a anchor element
    const anchor = document.createElement("a");

    // Setting the download attribute with a desired filename
    anchor.download = "meme-image.jpg";

    // Creating a data URL from the image source
    const imageUrl = imgElement.src;
    anchor.href = imageUrl;
    anchor.click();

    image_download_count();
  };
  const previewFile = (e: any) => {
    setUploadFileError(false);
    console.log("preview", e.target.files[0]);
    setUploadfileName(e.target.files[0].name);
  };

  const uploadMeme = (e: any) => {
    e.preventDefault();
    console.log("ip", e.target[0].files, e.target[0].files.length === 0);
    if (e.target[0].files.length === 0) {
      //error
      setUploadFileError(true);
      return;
    }

    let body = new FormData();
    body.append("image", e.target[0].files[0]);
    fetch("https://mahathugbandhan.com/api/v1/upload_image/", {
      method: "POST",
      body,
    })
      .then((r) => r.json())
      .then((d) => {
        console.log("uploaded", d);
        if (d.status === 200) {
          upload_count();
          setopenUploadMemeModal(false);
          setOpenThankYouModal(true);
          // uploadfileName.innerText =
          //   lang === "en" ? "Click Here to Upload" : "फ़ाइल चयन करें";
          setUploadfileName("फ़ाइल चयन करें");
          e.target[0].value = "";
        }
      });
  };

  const generateShareLinks = () => {
    const imgElement = document.querySelector(
      ".meme-bazar-swiper .swiper-slide-active > img"
    ) as HTMLImageElement;
    const imageUrl = imgElement.getAttribute("data-url");
    console.log(imgElement, imgElement.getAttribute("data-url"));

    let l =
      "https://mahathugbandhan.com/api/v1/image_metamaker?name=" + imageUrl;
    console.log("url", l);
    let link = encodeURIComponent(l);
    let text = "";
    if (lang === "hi") {
      let first = encodeURIComponent("ये देखने के बाद आप भी हंस पड़ेंगे! 😂 ");
      text =
        first +
        link +
        `\n` +
        " पुरी " +
        "https://mahathugbandhan.com/" +
        " देखें!";
    } else {
      let first = encodeURIComponent("This is hilarious! 😂 ");
      let second = encodeURIComponent(" Check out ");
      text = first + link + `\n` + second + "https://mahathugbandhan.com/"; //%0A
    }
    console.log(text);

    // shares links
    let twitter_link =
      "https://twitter.com/intent/tweet?url=" + link + "&text=" + text;
    let facebook_link =
      "http://www.facebook.com/sharer/sharer.php?u=" + link + "&text=" + text;

    let whatsapp_link = "";
    if (screen.width > 750)
      whatsapp_link =
        "https://web.whatsapp.com/send?url=" + link + "&text=" + text;
    else whatsapp_link = "https://wa.me/?url=" + link + "&text=" + text;

    setTwitter_link(twitter_link);
    setFacebook_link(facebook_link);
    setWhatsapp_link(whatsapp_link);

    setSlideChanged(false);
  };

  return (
    <>
      <section
        id="meme-bazar"
        className="w-full h-fit py-5 bg-[#fec81d] "
        style={{
          backgroundImage: "url('/assets/meme-bazar/Bg.webp')",
        }}
      >
        <div className="flex flex-col gap-5 text-white  sm:py-4 px-5">
          <h2 className="flex flex-col items-center">
            <span
              className={clsx(
                "tracking-wider text-center text-[7vw] sm:text-[3vw] text-[red] ",
                {
                  "font-yatra": lang === "hi",
                  "font-dangerous": lang === "en",
                }
              )}
            >
              {lang === "hi" ? "मीम बैंक" : "Meme Bank"}
            </span>
            <div className="w-16 sm:w-32 h-[3px] bg-[blue]"></div>
          </h2>
        </div>

        {/* <!-- our meme slider --> */}
        <div
          id="meme-bazar"
          className="w-full h-full relative flex justify-center items-center overflow-hidden mt-2 pt-5 pb-10 md:pb-[50px]"
        >
          {/* <!-- Swiper --> */}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={slides}
            loop={true}
            autoplay={{
              delay: 500000,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            navigation={{
              nextEl: ".meme-bazar-swiper .swiper-button-next",
              prevEl: ".meme-bazar-swiper .swiper-button-prev",
              disabledClass: "hidden",
            }}
            className="meme-bazar-swiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <LazyMemeImage
                  image={image}
                  setSlideChanged={setSlideChanged}
                  // slideChanged={slideChanged}
                  // generateShareLinks={generateShareLinks}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-col gap-5 items-center mb-5">
          <div className="flex gap-5 flex-wrap justify-center">
            <a
              onClick={downloadMeme}
              download="meme"
              className={clsx(
                "w-[150px] bg-[rgb(255,0,0)] py-1  flex justify-center items-center rounded-md text-white font-bold cursor-pointer ",
                {
                  "font-yatra text-[1.2rem] px-0 gap-3": lang === "hi",
                  "px-4 gap-2": lang === "en",
                }
              )}
            >
              {/* <span className="material-symbols-outlined"> download </span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#fff"
                width={15}
                height={15}
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
              </svg>
              <span>{lang === "hi" ? "डाउनलोड करें" : "Download"}</span>
            </a>
            <a
              onClick={() => {
                generateShareLinks();
                setOpenShareModal(true);
              }}
              className={clsx(
                "w-[120px] bg-[rgb(255,0,0)] p-1  flex justify-center items-center  rounded-md text-white font-bold cursor-pointer ",
                {
                  "font-yatra text-[1.2rem] px-0 gap-3": lang === "hi",
                  "px-4 gap-2": lang === "en",
                }
              )}
            >
              {/* <span className="material-symbols-outlined"> share </span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#fff"
                width={20}
                height={20}
              >
                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z" />
              </svg>
              <span>{lang === "hi" ? "शेयर करें" : "Share"}</span>
            </a>
          </div>
          <button
            onClick={() => setopenUploadMemeModal(true)}
            type="button"
            className="w-[230px] sm:w-fit  px-5 py-[6px] sm:px-5  sm:py-2 bg-blue-950 text-yellow-500 flex items-center gap-2 font-bold rounded-md cursor-pointer"
          >
            <span
              className={clsx("text-center leading-5 ", {
                "font-yatra text-[1.2rem] pt-1": lang === "hi",
                "py-1": lang === "en",
              })}
            >
              {lang === "hi"
                ? "अपने मीम्स अपलोड करें और उसे प्रदर्शित करवाए"
                : "Upload Your Memes and Get it Featured"}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="#fff"
              width={30}
              height={30}
            >
              <path d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
            </svg>
            {/* <span className="material-symbols-outlined text-white"> upload </span> */}
          </button>
        </div>
      </section>

      {openShareModal && (
        <>
          {/* <!-- Share modal --> */}
          <div
            id="share-modal"
            className="flex overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
            style={{ backgroundColor: "#181844c0" }}
          >
            <div tabIndex={-1}>
              <div className="relative p-4 w-full max-w-[700px] max-h-[400px]">
                <div className="relative bg-yellow-600 rounded-lg shadow ">
                  <div className="p-10 px-16 md:p-20 text-center">
                    <h3
                      className={clsx("mb-5 text-[2rem]  text-white", {
                        "font-yatra": lang === "hi",
                        "font-dangerous": lang === "en",
                      })}
                    >
                      {lang === "hi" ? "शेयर" : "Share"}
                    </h3>

                    <div
                      id="share"
                      className="flex gap-5 sm:gap-[3vw] justify-center items-center flex-wrap pb-9"
                    >
                      <div
                        id="result-card-share"
                        className="text-white flex justify-center items-center gap-4 sm:gap-5"
                      >
                        <a
                          onClick={image_share_count}
                          className="flex flex-col justify-center items-center gap-2"
                          href={whatsapp_link}
                          target="_blank"
                          style={{ color: "black" }}
                        >
                          <Image
                            width={50}
                            height={50}
                            className="w-fit h-[10vw] sm:h-[50px]"
                            src="/assets/svg/whatsapp.svg"
                            alt="whatsapp logo"
                          />
                          {/* <span className="text-white font-yatra text-xl">
                          Whatsapp{" "}
                        </span> */}
                        </a>
                        <a
                          onClick={image_share_count}
                          className="flex flex-col justify-center items-center gap-2"
                          href={twitter_link}
                          style={{ color: "black" }}
                          target="_blank"
                        >
                          <Image
                            width={100}
                            height={50}
                            className="w-fit h-[10vw] sm:h-[50px]"
                            src="/assets/svg/twt-x-logo.svg"
                            alt="twitter logo"
                            style={{
                              backgroundColor: "black",
                              padding: "3px",
                              borderRadius: "50%",
                            }}
                          />
                          {/* <span className="text-white font-yatra text-xl">
                          Twitter
                        </span> */}
                        </a>
                        <a
                          onClick={image_share_count}
                          className="flex flex-col justify-center items-center gap-2"
                          href={facebook_link}
                          target="_blank"
                          style={{ color: "black" }}
                        >
                          <Image
                            width={100}
                            height={50}
                            className="w-fit h-[10vw] sm:h-[50px]"
                            src="/assets/svg/fb.svg"
                            alt="facebook logo"
                          />
                          {/* <span className="text-white font-yatra text-xl">
                          Facebook
                        </span> */}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => setOpenShareModal(false)}
                      data-modal-hide="popup-modal"
                      type="button"
                      className={clsx(
                        "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg text-base inline-flex items-center px-5  text-center me-2  font-book",
                        {
                          "font-yatra py-1 pt-2": lang === "hi",
                          "font-book py-2": lang === "en",
                        }
                      )}
                    >
                      {lang === "hi" ? "बंद करें" : "Close"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {openUploadMemeModal && (
        <>
          {/* <!-- Upload Meme modal --> */}
          <div
            id="upload-meme-modal"
            className=" flex overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
            style={{ backgroundColor: "#181844c0" }}
          >
            <div
              tabIndex={-1}
              className="h-full flex justify-center items-center"
            >
              <div className="relative p-4 w-full max-w-[700px] max-h-[400px]">
                <div className="relative bg-yellow-600 rounded-lg shadow ">
                  <div className="p-10 md:p-20 text-center flex gap-5 flex-col items-center">
                    <h3 className=" text-[2rem] font-yatra text-white">
                      अपलोड मीम्स
                    </h3>

                    <form
                      onSubmit={uploadMeme}
                      id=""
                      className="flex flex-col gap-5 justify-center items-center flex-wrap pb-9"
                    >
                      {/* <!-- <input className="block w-full  max-w-[300px] text-lg text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none " id="large_size" type="file" required placeholder="फ़ाइल चयन करें"> --> */}
                      <div className="w-full">
                        <label
                          htmlFor="upload-file"
                          id="upload-file-name"
                          className="text-black bg-white font-yatra text-center border-2 py-4 border-blue-500 rounded-md flex flex-col gap-3 justify-center items-center "
                        >
                          <span className="material-symbols-outlined text-blue-600">
                            cloud_upload
                          </span>
                          <span className="text-blue-600" id="file-name">
                            {/* फ़ाइल चयन करें */}
                            {uploadfileName}
                          </span>
                        </label>
                        <input
                          id="upload-file"
                          style={{ display: "none" }}
                          type="file"
                          onChange={previewFile}
                        />
                      </div>
                      <div
                        style={{
                          display: " flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        {uploadFileError && (
                          <p
                            id="upload-file-error"
                            style={{
                              display: "block",
                              color: "red",
                              textAlign: "center",
                              marginBlock: "-5px 5px",
                            }}
                          >
                            एक छवि चुनें
                          </p>
                        )}
                        <button
                          type="submit"
                          className="max-w-[250px] px-3 pl-2 py-1 pt-[6px] sm:w-fit sm:px-5 bg-blue-950 text-yellow-500 flex justify-center items-center gap-2 font-bold  rounded-md cursor-pointer font-yatra text-[1.2rem] sm:text-[1.5rem] text-center "
                        >
                          अपने मीम्स अपलोड करें
                        </button>
                      </div>
                    </form>
                    {/* <!-- <button
                onclick="closeUploadMemeModal(event)"
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2 mt-3"
              >
              बंद करें
              </button> --> */}
                    <span
                      onClick={() => setopenUploadMemeModal(false)}
                      className="material-symbols-outlined text-red-700 text-[7vw]   sm:text-[4vw] md:text-[2.5rem] absolute right-5 top-5 cursor-pointer"
                    >
                      cancel
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {openThankYouModal && (
        <>
          {/* <!-- Upload Meme Thank-you pop --> */}
          <div
            id="thank-you-meme-modal"
            className=" flex overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full"
            style={{ backgroundColor: "#181844c0" }}
          >
            <div
              tabIndex={-1}
              className="h-full flex justify-center items-center"
            >
              <div className="relative p-4 w-full max-w-[700px] max-h-[400px]">
                <div className="relative bg-yellow-600 rounded-lg shadow ">
                  <div className="p-10 md:p-20 text-center flex gap-5 flex-col items-center relative ">
                    <h3 className="text-[1.5rem] sm:text-[2.5rem] font-yatra text-white">
                      इमेज अपलोड करने के लिए धन्यवाद
                    </h3>
                    <span
                      onClick={() => setOpenThankYouModal(false)}
                      className="material-symbols-outlined text-red-700 text-[7vw]   sm:text-[4vw] md:text-[2.5rem] absolute right-5 top-5 cursor-pointer"
                    >
                      cancel
                    </span>
                    {/* <!-- <button
                  onclick="closeThankYouMemeModal(event)"
                  data-modal-hide="popup-modal"
                  type="button"
                  className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2 mt-3"
                >
                Close
                </button> --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default MemeBank;
