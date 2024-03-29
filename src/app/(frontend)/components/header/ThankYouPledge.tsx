import clsx from "clsx";

export default function ThankYouPledge({
  lang,
  setStep,
  CTA,
}: {
  lang: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  CTA: any;
}) {
  return (
    <div
      id="thanks-for-pledge"
      className=" overflow-y-auto overflow-x-hidden fixed top-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full "
      style={{ backgroundColor: "#181844c0" }}
    >
      <div tabIndex={-1}>
        <div className="relative p-4 w-full max-w-lg max-h-full">
          <div className="relative bg-yellow-600 rounded-lg shadow ">
            <div className="p-10 md:p-10 text-center">
              {/* <Image
                  layout="fill"
                  className="mx-auto mb-4 text-gray-400 w-20 h-20 sm:w-[30vw] sm:h-[30vw]  max-w-[200px] max-h-[200px] dark:text-gray-200"
                  src="https://cdn.pixabay.com/photo/2016/06/01/00/57/thank-you-1428147_640.png"
                  alt="thank you image"
                /> */}
              <h3
                className={clsx("mb-5 text-lg  text-white", {
                  "sm:text-[1.5rem] font-yatra": lang === "hi",
                  "sm:text-[1.2rem] font-dangerous": lang === "en",
                })}
              >
                {/* महाठगबंधन के खिलाफ प्रतिज्ञा के लिए धन्यवाद */}
                {CTA["thank-you"]["title"]}
                {/* <!-- <p>👍👍</p> --> */}
              </h3>
              <button
                onClick={() => setStep(5)}
                data-modal-hide="popup-modal"
                type="button"
                className={clsx(
                  "text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300  font-medium rounded-lg inline-flex items-center px-5  text-center me-2  ",
                  {
                    "py-[2px] pt-[6px]text-lg font-yatra": lang === "hi",
                    "py-2  text-sm font-book  font-extrabold": lang === "en",
                  }
                )}
              >
                {CTA["thank-you"]["close-btn"]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
