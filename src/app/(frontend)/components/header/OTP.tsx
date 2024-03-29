import clsx from "clsx";
import { useEffect, useState } from "react";

export default function OTP({
  isMobile,
  lang,
  setStates,
  setStep,
  CTA,
}: {
  isMobile: boolean;
  lang: string;
  setStates: React.Dispatch<React.SetStateAction<any>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  CTA: any;
}) {
  const [call, setCall] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    async function otpVerification() {
      // e.preventDefault();
      // console.log("otp verification");
      // invalidOtp[0].style.display = "none"; //re-enter otp
      // invalidOtp[1].style.display = "none"; //re-enter otp

      // const otpValue = e.target[0].value;
      // form data
      let body = new FormData();
      body.append("otp", call);
      body.append("mobile", sessionStorage.getItem("mobile_main")!),
        console.log("form data", body);

      // call api
      fetch(
        "https:mahathugbandhan.com/api/v1/" +
          `user/verify_otp?language=${lang}`,
        {
          method: "PATCH",
          body,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data?.status >= 200 && data?.status < 300) {
            //otp verified
            localStorage.setItem(
              "mobile_main",
              sessionStorage.getItem("mobile_main")!
            );
            fetch(
              `https://mahathugbandhan.com/api/v1/get_district?language=${lang}`
            )
              .then((response) => response.json())
              .then((data) => {
                console.log("get allstates ", data);
                if (data?.status >= 200 && data?.status < 300) {
                  setStates(data.result);
                  setStep(3);
                  setCall("");
                } else {
                  console.log(data);
                }
              });
          } else {
            if (data?.result === "Error Occured: Invalid OTP") {
              setError(true);
            }
            console.log("error while otp matching", data);
          }
        });

      return;
    }
    console.log("data", call);
    if (call !== "") {
      try {
        otpVerification();
      } catch (error) {
        console.log("error while otp matching", error);
      }
    }
  }, [call]);

  const otpVerification = (e: any) => {
    e.preventDefault();
    // setData(otp);
    setCall(otp);
  };
  return (
    <>
      {isMobile ? (
        <>
          {error && (
            <span
              className={clsx(
                " font-bold text-[red] transition duration-1000 ease-in-out  ",
                {
                  // "text-[1.5rem] ": lang === "hi",
                  // "text-[1.2rem] ": lang === "en",
                }
              )}
            >
              {/* *** त्रुटि उत्पन्न हुई अमान्य ओटीपी */}
              {CTA["form-2"]["error-msg"]}
            </span>
          )}
          <form
            onSubmit={otpVerification}
            className="flex  flex-col items-center space-y-3 gap-0"
          >
            <input
              className={clsx("pl-3 py-[2vw] w-full ", {
                "max-w-[290px]": lang === "hi",
                "max-w-[270px]": lang === "en",
              })}
              type="number"
              placeholder="ओटीपी दर्ज करें"
              required
              onChange={(e) => setOtp(e.target.value)}
            />
            <button
              className={clsx(
                "w-full rounded-sm    text-white  bg-[red]  text-wrap ",
                {
                  "font-yatra max-w-[290px] px-2 pt-[1.5vw] pb-[.5vw] text-[20px] flex justify-center items-center":
                    lang === "hi",
                  "px-3 py-[2vw] font-extrabold font-book text-[16px] max-w-[270px] flex justify-center items-center":
                    lang === "en",
                }
              )}
            >
              {/* ओटीपी जमा करें */}
              {CTA["form-2"]["submit-btn"]}
            </button>
          </form>
        </>
      ) : (
        <>
          {error && (
            <span
              className={clsx(
                "hidden font-bold text-[red] transition duration-1000 ease-in-out ",
                {
                  "font-yatra text-[1.5rem]": lang === "hi",
                  "text-[1.2rem] ": lang === "en",
                }
              )}
            >
              {/* *** त्रुटि उत्पन्न हुई अमान्य ओटीपी */}
              {CTA["form-2"]["error-msg"]}
            </span>
          )}
          <form
            onSubmit={otpVerification}
            className="flex-col items-center space-y-3 gap-1"
          >
            <input
              className="pl-3 py-[.51vw] w-[90%]"
              type="number"
              placeholder={CTA["form-2"]["input-placeholder"]}
              required
            />
            <button
              className={clsx(
                "w-[90%]  rounded-lg  text-white font-extrabold bg-red-600 ",
                {
                  "px-3 py-2 text-[25px] font-yatra": lang === "hi",
                  "py-[.51vw] text-[20px] font-book": lang === "en",
                }
              )}
            >
              {CTA["form-2"]["submit-btn"]}
            </button>
          </form>
        </>
      )}
    </>
  );
}
