import { useEffect, useState } from "react";
import {
  generateCertificate,
  getQueryParam,
} from "../../utils/common-functions";
import { useQuizContext } from "../../context/quizContext";

function SubmitModal({
  setOpenSubmitModal,
  score,
  resetGame,
  lang = "hi",
}: {
  setOpenSubmitModal: React.Dispatch<React.SetStateAction<boolean>>;
  score: number;
  resetGame: Function;
  lang: string;
}) {
  const [name, setName] = useState("");
  const [mobile, setPhoneNo] = useState("");
  const [error, setError] = useState("");
  const [call, setCall] = useState({ name: "", mobile: "" });

  const { setScreen, setScored, setCertificateUrl } = useQuizContext();
  useEffect(() => {
    async function callApi(userData: { name: string; mobile: string }) {
      const urlParams = new URLSearchParams(window.location.search);
      const mySource = getQueryParam("utm_source");
      const myMedium = getQueryParam("utm_medium");
      const myCampaign = getQueryParam("utm_campaign");

      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("mobile", userData.mobile);
      formData.append("utm_source", mySource);
      formData.append("utm_medium", myMedium);
      formData.append("utm_campaign", myCampaign);
      const response = await fetch("https://mahathugbandhan.com/api/v1/user", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
      if (data.status === 200) {
        localStorage.setItem("mobile_quiz", userData.mobile);
        setScored(score);
        generateCertificate(
          userData.mobile,
          lang,
          () => setScreen(3),
          setCertificateUrl
        );
        resetGame();
      }
    }
    if (JSON.stringify(call) !== JSON.stringify({ name: "", mobile: "" })) {
      callApi(call);
    }
  }, [call]);

  const mobileHandler = (e: any) => {
    if (e.target.value.length > 10) {
      e.target.value = e.target.value.slice(0, 10);
      return;
    }
    setError("");
    const phoneNumber = e.target.value;
    const sliceNumber = phoneNumber.slice(0, 10);
    e.target.value = sliceNumber;
    setPhoneNo(sliceNumber);

    console.log("slice number", phoneNumber.slice(0, 10), phoneNumber.length);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log(typeof name.length, name.length < 3);
    if (name.length < 3) {
      setError(
        lang === "hi"
          ? "कृपया कोई मान्य नाम दर्ज करें"
          : "Please enter a valid name"
      );
      return;
    }
    if (!isValidPhoneNumber(mobile)) {
      setError(
        lang === "hi" ? "मान्य फ़ोन नंबर दर्ज करें" : "Enter valid phone number"
      );
      return;
    }
    setCall({ name, mobile });
  };
  function isValidPhoneNumber(phoneNumber: string) {
    if (phoneNumber.length != 10) return false;

    // Define the provided pattern for mobile numbers
    const pattern = /^[6-9]\d{9}$/;

    // Check if the input matches the pattern
    return pattern.test(phoneNumber);
  }
  return (
    <div
      tabIndex={-1}
      className="flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-start w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#0808465e]"
    >
      <div className="relative p-4  w-full max-w-md max-h-full">
        {/* <!-- Modal content --> */}
        <div className="relative bg-white rounded-lg shadow mt-[2vh] lg:w-[500px] lg:mt-[5vh]">
          {/* <!-- Modal header --> */}
          <div className="flex items-center justify-center p-4 md:p-5  ">
            <h3 className="text-xl font-medium text-[#212529] text-center">
              {lang === "hi" ? "स्कोर देखने के लिए" : "To View Score"}
              <button
                type="button"
                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center  absolute top-1 right-[0px]"
                onClick={() => {
                  setOpenSubmitModal(false);
                }}
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill=""
                  viewBox="0 0 14 14"
                  style={{ fill: "black" }}
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </h3>
          </div>
          {/* <!-- Modal body --> */}
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="p-4 md:p-5">
            <form className="space-y-4" action="#" onSubmit={submitHandler}>
              <div>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder={lang === "hi" ? "नाम*" : "Name*"}
                  required
                  onChange={(e) => {
                    setName(e.target.value.trim());
                    setError("");
                  }}
                />
              </div>
              <div>
                <input
                  type="number"
                  id="mobile"
                  placeholder={
                    lang === "hi" ? "मोबाइल नंबर*" : "Mobile Number*"
                  }
                  className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                  onChange={mobileHandler}
                />
              </div>
              <div className="w-full flex justify-center pb-1">
                <button
                  type="submit"
                  className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  {lang === "hi" ? "सबमिट करें" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubmitModal;
