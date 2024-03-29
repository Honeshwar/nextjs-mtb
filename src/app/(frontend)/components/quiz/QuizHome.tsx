"use client";
import Image from "next/image";
import "../../styles/quiz/home.css";
import { useState } from "react";
import QuizHomeModal from "./QuizHomeModal";
import Link from "next/link";
import clsx from "clsx";
import { useAppContext } from "../../context/appContext";
function QuizHome({
  setScreen,
  lang,
}: {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  lang: string;
}) {
  const [openModal, setOpenModal] = useState(false);
  const { isMobile } = useAppContext();
  return (
    <>
      <span id="home_nav" onClick={() => setOpenModal(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path d="M280.4 148.3L96 300.1V464a16 16 0 0 0 16 16l112.1-.3a16 16 0 0 0 15.9-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.6a16 16 0 0 0 16 16.1L464 480a16 16 0 0 0 16-16V300L295.7 148.3a12.2 12.2 0 0 0 -15.3 0zM571.6 251.5L488 182.6V44.1a12 12 0 0 0 -12-12h-56a12 12 0 0 0 -12 12v72.6L318.5 43a48 48 0 0 0 -61 0L4.3 251.5a12 12 0 0 0 -1.6 16.9l25.5 31A12 12 0 0 0 45.2 301l235.2-193.7a12.2 12.2 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0 -1.7-16.9z" />
        </svg>
      </span>
      <section id="start-container" className="w-100 section-container">
        <span id="language">
          <Link href={lang === "hi" ? "/en/quiz/" : "/quiz"}>
            {lang === "hi" ? "English" : "हिंदी"}
          </Link>
        </span>

        <div id="start-header">
          <Image
            width={1920}
            height={1080}
            src={`/assets/quiz/MTB Typo ${lang}.webp`}
            alt="logo"
            priority={true}
          />
          <Image
            width={1920}
            height={1080}
            id="line-wire"
            src="/assets/quiz/Line Break.webp"
            alt="line wire"
          />
        </div>

        <div id="header-end">
          {/* / className="bg-[#5d5ec7]"> */}
          {/* <Image
            width={1920}
            height={900}
            src={
              isMobile ? "/assets/quiz/ForeGround.webp" : "/assets/quiz/FG.webp"
            }
            alt="foreground"
            className="w-full object-contain absolute z-1"
            loading="eager"
            priority={true}
          /> */}
          {/* <Image
            width={300}
            height={300}
            src="/assets/quiz/Whole UI Bg.webp"
            alt="foreground"
            className="w-1/2 h-1/2 absolute z-0"
          /> */}
          <div className="relative z-10">
            <Image
              width={1920}
              height={1080}
              src="/assets/quiz/Take a Quiz Illustration.webp"
              alt="Quiz home image"
              priority={true}
              loading="eager"
            />
            <button
              id="start-btn"
              className={clsx("btn  col-8 mx-auto", {
                "top-[6%] right-[20%] md:top-[3%] md:right-[22%]":
                  lang === "hi",
                "top-[5.5%] right-[15.5%] md:top-[5%] md:right-[13.5%]":
                  lang === "en",
              })}
              onClick={() => setScreen(2)}
            >
              {lang === "hi" ? "क्विज़ खेलें!" : "Take the Quiz!"}
            </button>
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      {openModal && <QuizHomeModal setOpenModal={setOpenModal} lang={lang} />}
    </>
  );
}

export default QuizHome;
