"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ResultComponent from "../components/ctm/ResultComponent";
import SubmitFormToSeeResult from "../components/SubmitFormToSeeResult";
import { CTMContextProvider, useCTMContext } from "../context/ctmContext";
import CTMPage from "../components/ctm/CTMPage";

function CorruptionTellerMachine({ lang = "hi" }: { lang: string }) {
  const [select, setSelect] = useState("");
  const [error, setError] = useState(false);
  const { screen, setScreen, setParty_name } = useCTMContext();

  const selectHandler = (party_name: string) => {
    setError(false);
    setSelect(party_name);
  };
  const printCorruptionCurrency = () => {
    if (select === "") {
      setError(true);
      return;
    }
    setParty_name(select);
    if (localStorage.getItem("mobile_ctm")) {
      setScreen(3);
    } else {
      setScreen(2);
    }
    console.log("first", select);
    //reset
    setSelect("");
  };

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
        href="/"
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
          href="/en/ctm"
          className="absolute z-1 bg-[#4656e8] px-5 py-[7px] rounded-[20px] text-white font-bold decoration-none text-[.8rem] sm:text-[1rem] lg:text-[1.2rem] top-[10px] right-3 sm:top-4 sm:right-4  lg:top-5 lg:right-7"
        >
          English
        </Link>
      </span>
      {/* <!-- ctm section, --> */}
      <section
        id="ctm"
        className="flex h-full w-full  bg-no-repeat bg-cover bg-center flex-col items-center justify-start gap-7 pt-5 sm:pt-[25px] lg:pt-5 lg:pb-10 lg:justify-center lg:gap-[4.8vh]"
        // style={{ backgroundImage: "url('/assets/ctm/BG.png')" }}
      >
        <h1
          className="h-fit w-[80%] text-center  bg-no-repeat bg-contain bg-center font-yatra text-white text-[1.5rem] mt-[30px] sm:m-0 sm:text-[2rem]  pt-1 lg:w-[470px] lg:text-[2rem]"
          style={{
            backgroundImage: "url('/assets/ctm/Lipstick Splash.png')",
          }}
        >
          घोटालेबाज का चयन करें
        </h1>
        <ul className=" min-h-fit  w-[80%] max-w-[270px] sm:max-w-[fit-content] sm:w-[370px] flex flex-wrap justify-between content-center  gap-x-2 gap-y-5 lg:w-[470px] sm:pt-[10px] lg:pt-[0px]">
          <li
            onClick={() => selectHandler("INC")}
            className="h-fit w-fit relative cursor-pointer"
          >
            {/* <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/INC.png" alt=""> --> */}
            <div
              className={`party flex justify-center items-center h-[60px] w-[120px] text-center pt-1  text-white  font-yatra text-[1.2rem] ${
                select === "INC" ? "bg-[#ce3939]" : "bg-[#252D90]"
              } rounded-md px-5  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem]`}
            >
              कांग्रेस
            </div>
            <Image
              width={50}
              height={80}
              className="w-fit h-[80px] absolute   top-[-20px] left-[-5px] sm:h-[100px] sm:top-[-38px] sm:left-[-5px] lg:h-[120px] lg:top-[-55px] lg:left-[-10px]"
              src="/assets/ctm/Rahul12.png"
              alt="Rahul Gandhi"
            />
          </li>
          <li
            onClick={() => selectHandler("AAP")}
            className="h-fit w-fit relative cursor-pointer"
          >
            {/* <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/AAP.png" alt=""> --> */}
            <div
              className={`party flex justify-center items-center h-[60px] w-[120px] text-center pt-1  text-white  font-yatra text-[1.2rem] ${
                select === "AAP" ? "bg-[#ce3939]" : "bg-[#252D90]"
              } rounded-md px-5  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem]`}
              style={{ wordSpacing: "2px" }}
            >
              आम आदमी पार्टी
              {/* <!-- आप --> */}
            </div>
            <Image
              width={50}
              height={80}
              className="w-fit h-[80px] absolute   top-[-22px] right-[-15px] sm:h-[95px] sm:top-[-35px] sm:right-[-15px] lg:top-[-40px] lg:right-[-10px]"
              src="/assets/ctm/Kejriwal16.png"
              alt="Kejriwal"
            />
          </li>
          <li
            onClick={() => selectHandler("SP")}
            className="h-fit w-fit relative cursor-pointer"
          >
            <div
              className={`party flex justify-center items-center h-[60px] w-[120px] text-center pt-1  text-white  font-yatra text-[1.2rem] ${
                select === "SP" ? "bg-[#ce3939]" : "bg-[#252D90]"
              } rounded-md px-5  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem]`}
              style={{ wordSpacing: "2px" }}
            >
              समाजवादी पार्टी
            </div>
            <Image
              width={50}
              height={80}
              className="w-fit h-[70px] absolute   top-[11px] left-[-30px] z-[1] sm:h-[90px] sm:top-[-9px] sm:left-[-35px] lg:top-[-10px] lg:left-[-35px]"
              src="/assets/ctm/Akhilesh5.png"
              alt="Akhilesh Yadav"
            />
            {/* <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/SP.png" alt=""> --> */}
          </li>
          <li
            onClick={() => selectHandler("RJD")}
            className="h-fit w-fit relative cursor-pointer"
          >
            <div
              className={`party flex justify-center items-center h-[60px] w-[120px] text-center pt-1  text-white  font-yatra text-[1.2rem] ${
                select === "RJD" ? "bg-[#ce3939]" : "bg-[#252D90]"
              } rounded-md px-5  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem]`}
              style={{ wordSpacing: "2px" }}
            >
              राष्ट्रीय जनता दल
            </div>
            <Image
              width={50}
              height={80}
              className="w-fit h-[55px] absolute   top-[0px] right-[-28px] sm:h-[85px] sm:top-[-20px] sm:right-[-52px] lg:h-[90px] lg:top-[-30px] lg:right-[-55px]"
              src="/assets/ctm/Layer 3.png"
              alt="RJD"
            />
            {/* <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/RJD.png" alt=""> --> */}
          </li>
          <li
            onClick={() => selectHandler("TMC")}
            className="h-fit w-fit relative cursor-pointer"
          >
            {/* <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/TMC.png" alt=""> --> */}
            <div
              className={`party flex justify-center items-center h-[60px] w-[120px] text-center pt-1  text-white  font-yatra text-[1.2rem] ${
                select === "TMC" ? "bg-[#ce3939]" : "bg-[#252D90]"
              } rounded-md px-5  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem] leading-[1.5rem] sm:leading-[1.7rem]`}
              style={{ wordSpacing: "2px" }}
            >
              तृणमूल कांग्रेस
            </div>
            <Image
              width={50}
              height={80}
              className="w-fit h-[55px] absolute   top-[5px] right-[-13px] sm:h-[80px] sm:top-[-20px] sm:right-[-35px] lg:h-[80px] lg:top-[-20px] lg:right-[-30px]"
              src="/assets/ctm/Mamata10.png"
              alt="Mamata Banerjee"
            />
          </li>
          <li
            onClick={() => selectHandler("DMK")}
            className="h-fit w-fit relative cursor-pointer"
          >
            <div
              className={`party flex justify-center items-center h-[60px] w-[120px] text-center pt-1  text-white  font-yatra text-[1.2rem] ${
                select === "DMK" ? "bg-[#ce3939]" : "bg-[#252D90]"
              } rounded-md px-5  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem]`}
            >
              डी.एम.के
            </div>
            <Image
              width={50}
              height={80}
              className="w-fit h-[65px] absolute   top-[-10px] right-[-20px] sm:h-[90px] sm:top-[-22px] sm:right-[-40px] lg:h-[90px] lg:top-[-32px] lg:right-[4px]"
              src="/assets/ctm/Stalin1.png"
              alt="Stalin"
            />
            {/* <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/DMK.png" alt=""> --> */}
          </li>
          <li
            onClick={() => selectHandler("NCP")}
            className="h-fit w-fit relative cursor-pointer"
          >
            <div
              className={`party flex justify-center items-center h-[60px] w-[120px] text-center pt-1  text-white  font-yatra text-[1.2rem] ${
                select === "NCP" ? "bg-[#ce3939]" : "bg-[#252D90]"
              } rounded-md px-5 sm:justify-center  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem] lg:justify-center`}
            >
              एन.सी.पी.
            </div>
            <Image
              width={50}
              height={80}
              className="w-fit h-[50px] absolute   top-[8px] left-[-25px] sm:h-[80px] sm:top-[-20px] sm:left-[-52px] lg:h-[80px] lg:top-[-21px] lg:left-[-35px]"
              src="/assets/ctm/Sharad yadav1.png"
              alt="Sharad pawar"
            />
            {/* <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/NCP.png" alt=""> --> */}
          </li>
          <li
            onClick={() => selectHandler("Shiv Sena (UBT)")}
            className="h-fit w-fit relative cursor-pointer"
          >
            <div
              className={`party flex justify-center flex-col items-center h-[60px] w-[120px] text-center   text-white  font-yatra text-[1.2rem] ${
                select === "Shiv Sena (UBT)" ? "bg-[#ce3939]" : "bg-[#252D90]"
              } rounded-md px-0  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem] pt-3 pb-1`}
              style={{ wordSpacing: "2px" }}
            >
              शिव सेना
              {/* <!-- <br> --> */}
              <span className="text-[1rem] sm:text-[1rem] lg:text-[1.2rem] ">
                {" "}
                (यूबीटी){" "}
              </span>
            </div>
            <Image
              width={50}
              height={80}
              className="w-fit h-[55px] absolute   top-[30px] right-[-28px] z-[1] sm:h-[80px] sm:top-[5px] sm:right-[-76px] lg:h-[90px] lg:top-[5px] lg:right-[-50px]"
              src="/assets/ctm/Uddav.png"
              alt="Shiv Sena"
            />
            {/* <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/SS.png" alt=""> --> */}
          </li>
          <li
            onClick={() => selectHandler("JMM")}
            className="h-fit w-fit relative cursor-pointer"
          >
            <div
              className={`party flex justify-center items-center h-[60px] w-[120px] text-center pt-1  text-white  font-yatra text-[1.2rem] ${
                select === "JMM" ? "bg-[#ce3939]" : "bg-[#252D90]"
              } rounded-md px-5  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem] `}
              style={{ wordSpacing: "2px" }}
            >
              झारखंड मुक्ति मोर्चा
            </div>
            {/* <!-- <Image width={50} height={80} className="h-[20vw] absolute   top-[-4vw] left-[-10px]" src="/assets/ctm/Akhilesh5.png" alt=""> --> */}
            {/* <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/JMM.png" alt=""> --> */}
          </li>
          <li
            onClick={() => selectHandler("National Conference")}
            className="h-fit w-fit relative cursor-pointer"
          >
            <div
              className={`party flex  justify-center flex-col items-center h-[60px] w-[120px] text-center  text-white  font-yatra text-[1.2rem] ${
                select === "National Conference"
                  ? "bg-[#ce3939]"
                  : "bg-[#252D90]"
              } rounded-md px-5  sm:w-[150px] sm:h-[60px] sm:text-[1.5rem]  lg:w-[200px] lg:h-[60px] lg:text-[1.7rem] pt-3 pb-1  leading-[1.4rem] sm:leading-[1.6rem]`}
              style={{ wordSpacing: "2px" }}
            >
              नेशनल
              {/* <!-- <br> --> */}
              {/* <!-- <span className="  text-[5vw] sm:text-[2rem] lg:text-[2rem]">  --> */}
              कांफ्रेंस
              {/* <!-- </span> --> */}
            </div>
            {/* <!-- <Image width={50} height={80} className="h-[20vw] absolute   top-[-4vw] left-[-10px]" src="/assets/ctm/Uddav.png" alt=""> -->
                <!-- <Image width={50} height={80} className="w-[32vw] sm:w-[30vw]" src="/assets/ctm/NC.png" alt=""> --> */}
          </li>
        </ul>
        <div className="flex flex-col items-center gap-1 relative w-full">
          {error && (
            <div className="flex text-[red]  font- text-[.8rem] sm:text-[1rem] lg:text-[1.1rem] absolute -bottom-[27px] md:bottom-[-30px] lg:bottom-[-34px] text-center">
              आगे बढ़ने के लिए चयन करें
            </div>
          )}
          <button
            onClick={() => printCorruptionCurrency()}
            className="text-blue-700 bg-yellow-500 font-yatra text-[1.3rem] mx-auto w-[150px] sm:text-[1.5rem]  pt-1 rounded-md lg:w-[200px] lg:h-[60px] lg:text-[1.72rem]"
          >
            प्रिंट
          </button>
        </div>
        <Image
          width={50}
          height={80}
          className="h-fit w-[70px] absolute bottom-0 left-[10px] sm:w-[100px] sm:left-[30px] lg:w-[150px] xl:left-[60px]"
          src="/assets/ctm/Laloo3.png"
          alt="Laloo3"
        />
        <Image
          width={50}
          height={80}
          className="h-fit w-[50px] absolute bottom-0 right-[10px] sm:w-[80px]  sm:right-[30px] lg:w-[110px] xl:right-[60px]"
          src="/assets/ctm/Sonia2.png"
          alt="Sonia2"
        />
      </section>

      {/* <!-- phone number submit popup --> */}
      {screen === 2 && <SubmitFormToSeeResult lang="hi" />}

      {/* <!--Result popup  --> */}
      {screen === 3 && <ResultComponent lang="hi" />}
    </div>
  );
}

export default function CTM_Wrapper() {
  return (
    <CTMContextProvider>
      <CTMPage lang="hi" />
    </CTMContextProvider>
  );
}
