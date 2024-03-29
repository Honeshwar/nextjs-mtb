import { useEffect, useState } from "react";
import { useCTMContext } from "../context/ctmContext";
import {
  validateMobileNumberOnInput,
  validationFirstDigit,
} from "../utils/common-functions";
import clsx from "clsx";
export default function SubmitFormToSeeResult({
  lang = "hi",
}: {
  lang: string;
}) {
  const [mobileNumber, setMobileNumber] = useState("");
  const [call, setCall] = useState(false);
  const [error, setError] = useState(false);

  const { setScreen, party_name } = useCTMContext();

  useEffect(() => {
    function callAPI(mobile: string, party_name: string) {
      // do api call
      const body = JSON.stringify({
        users: [
          {
            mobile,
            party_name,
          },
        ],
      });
      console.log(body);
      fetch(`https://mahathugbandhan.com/api/v1/ctm/add`, {
        method: "POST",
        body: body,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Server response:", result);
          if (result.status === 200) {
            localStorage.setItem("mobile_ctm", mobile);
            setScreen(3);

            // reset
            setMobileNumber("");
            setCall(false);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
    if (call) {
      // handle error so app don't crash
      try {
        callAPI(mobileNumber, party_name);
      } catch (err) {
        console.log("error while calling ctm add api", err);
      }
    }
  }, [call]);
  const submitHandler = (event: any) => {
    event.preventDefault();

    if (mobileNumber.length === 10 && validationFirstDigit(mobileNumber)) {
      console.log("first", mobileNumber);
      // setScreen("ctm-result-submit-mobile-modal");
      setCall(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div
        id="ctm-result-submit-mobile-modal"
        className="flex bg-[#181844] overflow-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full "
      >
        <div className="w-full h-full flex justify-center items-center px-[5vw] ">
          <div className="relative pt-7 sm:pt-0 p-4 w-[80vw] sm:w-[50vw] lg:w-[40vw] max-w-[500px] bg-yellow-600  rounded-md">
            {/* <!-- Modal content --> */}
            <div className="relative bg- rounded-lg  h-full w-full flex justify-center items-center flex-col pt-1.5 sm:py-[3vw] gap-5  sm:gap-5">
              <h3
                className={clsx(
                  " text-center text-[1.5rem] sm:text-[2rem]  text-white  ",
                  {
                    "font-yatra": lang === "hi",
                    "font-dangerous": lang === "en",
                  }
                )}
              >
                {lang === "hi"
                  ? "परिणाम देखने के लिए मोबाइल नंबर दर्ज करें"
                  : "Enter Mobile Number to See Result"}
              </h3>
              {/* <!-- Modal body -->
              <!-- show error --> */}
              {error && (
                <div
                  className={clsx(
                    "flex text-[red] font-bold  justify-center text-[.9rem] sm:text-[1rem] lg:text-[1.2rem] -mb-2",
                    {
                      "font-yatra": lang === "hi",
                      // "": lang === "en",
                    }
                  )}
                >
                  {lang === "hi"
                    ? " त्रुटि उत्पन्न हुई अमान्य मोबाइल नंबर"
                    : "Error Occured: Invalid Number"}
                </div>
              )}
              <form
                onSubmit={submitHandler}
                className="mobileNo-form flex flex-col items-center  gap-4 sm:gap-5 w-full h-full"
              >
                <input
                  id="ctm-result-card-input"
                  className=" pl-3 py-[1.3vw] sm:py-[.51vw] w-[90%]"
                  type="number"
                  placeholder={
                    lang === "hi" ? "मोबाइल नंबर दर्ज करें" : "Enter Mobile No."
                  }
                  required
                  onInput={(e) => {
                    validateMobileNumberOnInput(setError, e, setMobileNumber);
                  }}
                />
                <button
                  className={clsx(
                    "w-[90%]  rounded-lg px-3 py-2 text-white  bg-red-600  text-[1.2rem] sm:text-[1.5rem]  font-extrabold sm:tracking-[1px]",
                    {
                      "font-yatra": lang === "hi",
                      "font-book": lang === "en",
                    }
                  )}
                >
                  {lang === "hi" ? "जमा करें" : "Submit"}
                </button>
              </form>
              {/* <span
                onClick={() => closeModalByID("ctm-resultsubmit-mobile-modal")}
                title="close result card"
                className="material-symbols-outlined text-red-700 text-[7vw]  sm:text-[4.5vw]  lg:text-[3.1vw] absolute top-[-6vw]  right-[-2.5vw] sm:right-[-1.5vw] sm:top-[-5.5vw] lg:right-[-.5vw] lg:top-[-4vw] cursor-pointer"
              >
                cancel
              </span> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="material-symbols-outlined fill-red-700 w-[6.5vw]  sm:w-[4vw]  lg:w-[2.6vw] absolute top-[-6.2vw]  right-[-2.7vw] sm:right-[-1.7vw] sm:top-[-5.7vw] lg:right-[-.7vw] lg:top-[-4.2vw] cursor-pointer"
                onClick={() => setScreen(1)}
              >
                <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
