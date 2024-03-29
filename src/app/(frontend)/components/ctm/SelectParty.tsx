import Image from "next/image";
import { useState } from "react";
import { useCTMContext } from "../../context/ctmContext";
import clsx from "clsx";

function SelectParty({ lang = "hi" }: { lang: string }) {
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
  // english page tha yah phela
  return (
    <section
      id="ctm"
      className={clsx(
        "flex w-full h-full flex-col items-center justify-start gap-7 pt-5 sm:pt-[0px] lg:pt-3 lg:pb-10 lg:justify-center lg:gap-[5vh] ",
        {
          "sm:pt-[25px]": lang === "hi",
          "sm:pt-[0px]": lang === "en",
        }
      )}
    >
      <div className="mt-[30px]  pt-1 lg:m-[0px] z-10 relative flex justify-center items-center">
        <Image
          src="/assets/ctm/Lipstick Splash.png"
          alt="ctm"
          width={500}
          height={125}
          className="h-fit w-[80%] object-contain object-position-center  text-[1.7rem] sm:w-[300px]  lg:w-[420px] "
        />
        <h1
          className={clsx(
            "w-fit h-fit text-center text-white absolute text-[1.7rem] ",
            {
              "font-yatra  sm:text-[1.9rem] lg:text-[2.5rem] top-1 ":
                lang === "hi",
              "font-dangerous  sm:text-[1.7rem] lg:text-[2.3rem] top-[5px]":
                lang === "en",
            }
          )}
        >
          {lang === "hi" ? "घोटालेबाज का चयन करें" : "SELECT THE SCAMMER"}
        </h1>
      </div>
      <ul
        className={clsx(
          " min-h-fit  w-[80%]  sm:max-w-[fit-content] sm:w-[370px] flex flex-wrap justify-between content-center  gap-x-2 gap-y-5  ",
          {
            "max-w-[270px]  lg:w-[470px] sm:pt-[10px] lg:pt-[0px]":
              lang === "hi",
            "max-w-[300px] lg:w-[490px]  sm:pt-[0px]": lang === "en",
          }
        )}
      >
        <li
          onClick={() => selectHandler("INC")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex justify-center items-center w-[120px] text-center pt-1  text-white  bg-[#252D90] rounded-md px-5  sm:w-[150px] sm:h-[60px] lg:h-[60px]",
              {
                "bg-[#ce3939]": select === "INC",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem]":
                  lang === "hi",
                "font-dangerous text-[2.3rem] sm:text-[2rem] lg:w-[220px] lg:text-[2.5rem]":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? "कांग्रेस" : "INC"}
          </div>
          <Image
            width={180}
            height={180}
            className={clsx(
              "w-fit h-[80px] absolute top-[-20px] sm:h-[100px] sm:top-[-38px] lg:left-[-10px] z-20 lg:h-[100px] lg:top-[-40px]",
              {
                "left-[-5px] ": lang === "hi",
                "left-[-10px]  ": lang === "en",
              }
            )}
            src="/assets/ctm/Rahul12.png"
            alt="Rahul Gandhi"
          />
        </li>
        <li
          onClick={() => selectHandler("AAP")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex justify-center items-center w-[120px] text-center pt-1  text-white bg-[#252D90] rounded-md px-5  sm:w-[150px] sm:h-[60px]   lg:h-[60px] ",
              {
                "bg-[#ce3939]": select === "AAP",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem] [word-spacing:2px]":
                  lang === "hi",
                "font-dangerous text-[2.3rem] sm:text-[2rem] lg:w-[220px] lg:text-[2.5rem]":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? "आम आदमी पार्टी" : "AAP"}
          </div>
          <Image
            width={150}
            height={180}
            className={clsx("w-fit h-[80px] absolute", {
              "top-[-22px] right-[-15px] sm:h-[95px] sm:top-[-35px] sm:right-[-15px] lg:top-[-40px] lg:right-[-10px]":
                lang === "hi",
              "top-[-20px] right-[-10px] sm:h-[90px] sm:top-[-30px] sm:right-[-5px] lg:h-[100px] lg:top-[-41px] lg:right-[2px]":
                lang === "en",
            })}
            src="/assets/ctm/Kejriwal16.png"
            alt="Kejriwal"
          />
        </li>
        <li
          onClick={() => selectHandler("SP")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex justify-center items-center w-[120px] text-center pt-1  text-white  bg-[#252D90] rounded-md px-5  sm:w-[150px] sm:h-[60px]  lg:h-[60px]",
              {
                "bg-[#ce3939]": select === "SP",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem] [word-spacing:2px]":
                  lang === "hi",
                "font-dangerous text-[2.3rem] sm:text-[2rem] lg:w-[220px] lg:text-[2.5rem]":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? "समाजवादी पार्टी" : "SP"}
          </div>
          <Image
            width={180}
            height={180}
            className={clsx("w-fit  absolute  z-[1] sm:h-[90px] ", {
              "h-[70px] top-[11px] left-[-30px]  sm:top-[-9px] sm:left-[-35px] lg:top-[-10px] lg:left-[-35px]":
                lang === "hi",
              "h-[90px] top-[-10px] left-[-25px] sm:top-[-7px] sm:left-[-22px] lg:h-[100px] lg:top-[-19px] lg:left-[-11px]":
                lang === "en",
            })}
            src="/assets/ctm/Akhilesh5.png"
            alt="Akhilesh Yadav"
          />
        </li>
        <li
          onClick={() => selectHandler("RJD")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex justify-center items-center w-[120px] text-center pt-1  text-white  bg-[#252D90] rounded-md px-5  sm:w-[150px] sm:h-[60px]   lg:h-[60px] ",
              {
                "bg-[#ce3939]": select === "RJD",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem] [word-spacing:2px]":
                  lang === "hi",
                "font-dangerous text-[2.3rem] sm:text-[2rem] lg:w-[220px] lg:text-[2.5rem]":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? "राष्ट्रीय जनता दल" : "RJD"}
          </div>
          <Image
            width={180}
            height={180}
            className={clsx("w-fit absolute sm:top-[-20px]", {
              " h-[55px] top-[0px] right-[-28px] sm:h-[85px] sm:right-[-52px] lg:h-[90px] lg:top-[-30px] lg:right-[-55px]":
                lang === "hi",
              " h-[60px] top-[-5px] right-[-20px] sm:h-[80px] sm:right-[-30px] lg:h-[80px] lg:top-[-32px] lg:right-[-5px]":
                lang === "en",
            })}
            src="/assets/ctm/Layer 3.png"
            alt="RJD"
          />
        </li>
        <li
          onClick={() => selectHandler("TMC")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex justify-center items-center w-[120px] text-center pt-1  text-white   bg-[#252D90] rounded-md px-5  sm:w-[150px] sm:h-[60px] lg:h-[60px]",
              {
                "bg-[#ce3939]": select === "TMC",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem] leading-[1.5rem] sm:leading-[1.7rem] [word-spacing:2px]":
                  lang === "hi",
                "font-dangerous text-[2.3rem] sm:text-[2rem] lg:w-[220px] lg:text-[2.5rem]":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? " तृणमूल कांग्रेस" : "TMC"}
          </div>
          <Image
            width={180}
            height={180}
            className={clsx(
              "w-fit absolute sm:h-[80px] sm:top-[-20px] sm:right-[-35px] lg:h-[80px]",
              {
                "h-[55px] top-[5px] right-[-13px] lg:top-[-20px] lg:right-[-30px]":
                  lang === "hi",
                "h-[60px] top-[0px] right-[-15px] lg:top-[-21px] lg:right-[-20px]":
                  lang === "en",
              }
            )}
            src="/assets/ctm/Mamata10.png"
            alt="Mamata banerjee"
          />
        </li>
        <li
          onClick={() => selectHandler("DMK")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex justify-center items-center w-[120px] text-center pt-1  text-white   bg-[#252D90] rounded-md px-5  sm:w-[150px] sm:h-[60px] lg:h-[60px]",
              {
                "bg-[#ce3939]": select === "DMK",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem]":
                  lang === "hi",
                "font-dangerous text-[2.3rem] sm:text-[2rem] lg:w-[220px] lg:text-[2.5rem]":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? "डी.एम.के" : "DMK"}
          </div>
          <Image
            width={180}
            height={180}
            className={clsx("w-fit absolute sm:top-[-22px]", {
              "h-[65px] top-[-10px] right-[-20px] sm:h-[90px] sm:right-[-40px] lg:h-[90px] lg:top-[-32px] lg:right-[4px]":
                lang === "hi",
              "h-[80px] top-[-20px] right-[-25px] sm:h-[80px] sm:right-[-20px] lg:h-[100px] lg:top-[-45px] lg:right-[-0px]":
                lang === "en",
            })}
            src="/assets/ctm/Stalin1.png"
            alt="Stalin"
          />
        </li>
        <li
          onClick={() => selectHandler("NCP")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex justify-center items-center w-[120px] text-center pt-1  text-white bg-[#252D90] rounded-md px-5  sm:w-[150px] sm:h-[60px] lg:h-[60px]",
              {
                "bg-[#ce3939]": select === "NCP",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem]":
                  lang === "hi",
                "font-dangerous text-[2.3rem] sm:text-[2rem] lg:w-[220px] lg:text-[2.5rem]":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? " एन.सी.पी." : "NCP"}
          </div>
          <Image
            width={180}
            height={180}
            className={clsx(
              "w-fit absolute left-[-25px] lg:h-[80px] lg:top-[-21px]",
              {
                "h-[50px] top-[8px] sm:h-[80px] sm:top-[-20px] sm:left-[-52px] lg:left-[-35px]":
                  lang === "hi",
                "h-[55px] top-[5px] sm:h-[70px] sm:top-[-10px] sm:left-[-32px] lg:left-[-20px]":
                  lang === "en",
              }
            )}
            src="/assets/ctm/Sharad yadav1.png"
            alt="Sharad pawar"
          />
        </li>
        <li
          onClick={() => selectHandler(" Shiv Sena (UBT)")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex flex-col justify-center items-center w-[120px] text-center   text-white bg-[#252D90] rounded-md px-0  sm:w-[150px] sm:h-[60px] lg:h-[60px]  pt-3 pb-1 ",
              {
                "bg-[#ce3939]": select === " Shiv Sena (UBT)",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem] [word-spacing:2px]":
                  lang === "hi",
                "font-dangerous text-[1.3rem] sm:text-[1.2rem] lg:w-[220px] leading-tight sm:p-0":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? "शिव सेना" : " Shiv Sena"}
            <br />
            <span
              className={clsx("text-[1rem] lg:text-[1.2rem] ", {
                // "": lang === "hi",
                "sm:text-[1.2rem] ": lang === "en",
              })}
            >
              {lang === "hi" ? "(यूबीटी)" : "(UBT)"}
            </span>
          </div>
          <Image
            width={180}
            height={180}
            className={clsx(
              "w-fit absolute  top-[30px] z-[1] sm:h-[80px] sm:top-[5px]",
              {
                "h-[55px] right-[-28px] sm:right-[-76px] lg:h-[90px] lg:top-[5px] lg:right-[-50px]":
                  lang === "hi",
                "h-[60px] right-[-31px] sm:right-[-66px] lg:h-[80px] lg:top-[10px] lg:right-[-30px]":
                  lang === "en",
              }
            )}
            src="/assets/ctm/Uddav.png"
            alt="Shiv Sena"
          />
        </li>
        <li
          onClick={() => selectHandler("JMM")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex justify-center items-center w-[120px] text-center pt-1 text-white bg-[#252D90] rounded-md px-5  sm:w-[150px] sm:h-[60px] lg:h-[60px] ",
              {
                "bg-[#ce3939]": select === "JMM",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem] [word-spacing:2px]":
                  lang === "hi",
                "font-dangerous text-[2.3rem] sm:text-[2rem] lg:w-[220px] lg:text-[2.5rem]":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? "झारखंड मुक्ति मोर्चा" : "JMM"}
          </div>
        </li>
        <li
          onClick={() => selectHandler("Natianal Conference")}
          className="h-fit w-fit relative cursor-pointer"
        >
          <div
            className={clsx(
              "party flex flex-col justify-center items-center w-[120px] text-center  text-white   bg-[#252D90] rounded-md px-5  sm:w-[150px] sm:h-[60px]  lg:h-[60px] pt-3 pb-1 ",
              {
                "bg-[#ce3939]": select === "Natianal Conference",
                "h-[60px] font-yatra text-[1.2rem] sm:text-[1.5rem] lg:w-[200px] lg:text-[1.7rem] leading-[1.4rem] sm:leading-[1.6rem] [word-spacing:2px]":
                  lang === "hi",
                "font-dangerous text-[1.3rem] sm:text-[1.2rem] lg:w-[220px] leading-tight sm:p-0":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? (
              "नेशनल कांफ्रेंस"
            ) : (
              <>
                National
                <br />
                <span className="  text-[1rem] sm:text-[1.2rem] lg:text-[1.2rem]">
                  Conference
                </span>
              </>
            )}
          </div>
        </li>
      </ul>
      <div className="flex flex-col items-center gap-1 lg:h-fit w-full relative">
        {error && (
          <div
            id="err-msg"
            className={clsx(
              "text-[red] text-[.8rem] sm:text-[1rem] lg:text-[1.1rem] absolute text-center",
              {
                "-bottom-[27px] md:bottom-[-30px] lg:bottom-[-34px]":
                  lang === "hi",
                "-bottom-[23px] md:bottom-[-27px] lg:bottom-[-30px]":
                  lang === "en",
              }
            )}
          >
            {lang === "hi" ? "आगे बढ़ने के लिए चयन करें" : "Select to Proceed"}
          </div>
        )}

        <button
          onClick={printCorruptionCurrency}
          className={clsx(
            "text-blue-700 bg-yellow-500 text-[1.5rem] sm:w-[200px] sm:h-[50px]  mx-auto w-[150px]  pt-1 rounded-md sm:text-[1.5rem] lg:text-[1.5rem]",
            {
              "font-yatra ": lang === "hi",
              "font-dangerous ": lang === "en",
            }
          )}
        >
          {lang === "hi" ? "प्रिंट" : "PRINT"}
        </button>
      </div>
      <Image
        width={305}
        height={306}
        className="h-fit w-[70px] absolute bottom-0 left-[10px] sm:w-[100px] sm:left-[30px] lg:w-[150px] xl:left-[60px] object-contain"
        src="/assets/ctm/Laloo3.png"
        alt="Laloo3"
      />
      <Image
        width={305}
        height={306}
        className="h-fit w-[50px] absolute bottom-0 right-[10px] sm:w-[80px]  sm:right-[30px] lg:w-[110px] xl:right-[60px]"
        src="/assets/ctm/Sonia2.png"
        alt="Sonia2"
      />
    </section>
  );
}

export default SelectParty;
