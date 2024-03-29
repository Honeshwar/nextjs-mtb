"use client";
import Image from "next/image";
import Link from "next/link";
import ResultComponent from "./ResultComponent";
import SubmitFormToSeeResult from "../SubmitFormToSeeResult";
import { CTMContextProvider, useCTMContext } from "../../context/ctmContext";
import SelectParty from "./SelectParty";

function CTMPage({ lang = "hi" }: { lang: string }) {
  const { screen } = useCTMContext();

  return (
    <div className="overflow-hidden h-screen bg-blue-900">
      <Image
        src="/assets/ctm/BG.png"
        alt="ctm"
        fill
        className="object-cover object-position-center"
        quality={100}
        // priority={true}
        // loading="lazy"
      />
      <Link
        href={lang === "hi" ? "/" : "/en"}
        id="home_nav"
        className="absolute z-1 text-[.8rem] sm:text-[1rem] lg:text-[1.2rem] top-[10px] left-3 sm:top-4 sm:left-4  lg:top-5 lg:left-7"
      >
        <svg
          className="text-[rgb(70, 86, 232)] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] lg:w-[45px] lg:h-[45px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
            fill="#4656e8"
          ></path>
        </svg>
      </Link>

      <span id="language">
        <Link
          href={lang === "hi" ? "/en/ctm" : "/ctm"}
          className="absolute z-1 bg-[#4656e8] px-6 pt-2 pb-1 rounded-[20px] text-white font-bold decoration-none text-[.8rem] sm:text-[1rem] lg:text-[1.2rem] top-[10px] right-3 sm:top-4 sm:right-4  lg:top-5 lg:right-7"
        >
          {lang === "hi" ? "English" : "हिंदी"}
        </Link>
      </span>
      {/* <!-- ctm section, --> */}
      <SelectParty lang={lang} />

      {/* <!-- phone number submit popup --> */}
      {screen === 2 && <SubmitFormToSeeResult lang={lang} />}

      {/* <!--Result popup  --> */}
      {screen === 3 && <ResultComponent lang={lang} />}
    </div>
  );
}

export default CTMPage;
