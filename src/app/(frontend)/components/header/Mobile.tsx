import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Mobile({
  lang = "hi",
  isMobile,
  step,
  setStep,
  CTA,
}: {
  lang: string;
  isMobile: boolean;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  CTA: any;
}) {
  const [data, setData] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  // const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  //   const [states, setStates] = useState([]);

  useEffect(() => {
    if (step === 1 && localStorage.getItem("mobile_main") !== null) {
      setStep(5); //5
    }
    async function submit() {
      // form data
      let body = new FormData();
      body.append("mobile", phoneNo);
      console.log("form data", body);

      // calling api
      fetch("https:mahathugbandhan.com/api/v1/" + "user", {
        method: "POST",
        body,
      })
        .then((response) => response.json())
        .then((responseData) => {
          console.log("user", responseData);

          if (
            "Mobile Number already registered." === responseData.result ||
            responseData?.otp_verified_at === null
          ) {
            // send otp
            fetch(
              "https:mahathugbandhan.com/api/v1/" +
                `user/send_otp?language=${lang}`,
              {
                method: "PATCH",
                body,
              }
            )
              .then((response) => response.json())
              .then((responseData) => {
                console.log("send otp result", responseData);
                if (responseData.status >= 200 && responseData.status < 300) {
                  // save mobile no to sessionStorage
                  console.log("before session add kare se", data);
                  sessionStorage.setItem("mobile_main", data);
                  setStep(2);
                  setData("");
                }
              });
          } else {
            console.log("already resistered", "already registered");
            localStorage.setItem("mobile_main", data); // so in spin the when no form shown
            setStep(0);
          }
        });
    }

    console.log("data", data.length);
    if (data.length === 10) {
      try {
        submit();
      } catch (error) {
        console.log("error while create user", error);
      }
    }
  }, [data]);

  const submitMobileNo = (event: any) => {
    event.preventDefault();
    if (
      phoneNo.length === 10 &&
      Number(phoneNo.charAt(0)) > 5 &&
      Number(phoneNo.charAt(0)) <= 9
    ) {
      console.log("number is submited to setData", phoneNo);
      setData(phoneNo);
    } else {
      setError(true);
    }
  };

  const validatePhoneNumber = (e: any) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
      return;
    }
    setError(false);
    const phoneNumber = e.target.value;
    const sliceNumber = phoneNumber.slice(0, 10);
    e.target.value = sliceNumber;
    setPhoneNo(sliceNumber);

    console.log("slice number", phoneNumber.slice(0, 10), phoneNumber.length);
  };
  return (
    <>
      {isMobile ? (
        <>
          {error && (
            <span
              className={clsx(
                " font-bold text-[red] transition duration-1000 ease-in-out text-center ",
                {
                  "font-yatra ": lang === "hi",
                  // " ": lang === "en",
                }
              )}
            >
              {/* *** त्रुटि हुई: अमान्य मोबाइल नंबर */}
              {CTA["form-1"]["error-msg"]}
            </span>
          )}
          <form
            onSubmit={submitMobileNo}
            className="flex flex-col items-center space-y-3 gap-0"
          >
            <input
              className={clsx("pl-3 py-[2vw] w-full", {
                "max-w-[290px]": lang === "hi",
                "max-w-[270px]": lang === "en",
              })}
              type="number"
              placeholder={CTA["form-1"]["input-placeholder"]}
              required
              onInput={validatePhoneNumber}
            />
            <button
              className={clsx(
                "w-full rounded-sm px-2 text-white  bg-[red]  text-wrap flex justify-center items-center",
                {
                  "font-yatra max-w-[290px] pt-[1.5vw] pb-[.5vw] text-[20px] ":
                    lang === "hi",
                  "py-[2vw] max-w-[270px] font-extrabold font-book text-[18px]":
                    lang === "en",
                }
              )}
            >
              {/* संकल्प लें */}
              {CTA["form-1"]["submit-btn"]}
            </button>
          </form>
        </>
      ) : (
        <>
          {error && (
            <span
              className={clsx(
                " font-bold text-[red] transition duration-1000 ease-in-out text-center ",
                {
                  "text-[1.5rem] ": lang === "hi",
                  "text-[1.2rem] ": lang === "en",
                }
              )}
            >
              {/* *** त्रुटि हुई: अमान्य मोबाइल नंबर */}
              {CTA["form-1"]["error-msg"]}
            </span>
          )}
          <form
            onSubmit={submitMobileNo}
            className={clsx("flex flex-col items-center", {
              "space-y-3 gap-3": lang === "hi",
              "gap-6": lang === "en",
            })}
          >
            <input
              className=" pl-3 py-[.51vw] w-[90%]"
              type="number"
              placeholder={CTA["form-1"]["input-placeholder"]}
              required
              onInput={validatePhoneNumber}
            />
            <button
              className={clsx(
                "w-[90%]  rounded-lg px-3  text-white font-extrabold bg-red-600   ",
                {
                  "py-1 pt-2 text-[25px] font-yatra": lang === "hi",
                  "py-[.51vw] text-[20px] font-book": lang === "en",
                }
              )}
            >
              {CTA["form-1"]["submit-btn"]}
            </button>
          </form>
        </>
      )}
    </>
  );
}
