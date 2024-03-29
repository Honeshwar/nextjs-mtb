import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useCTMContext } from "../../context/ctmContext";

export default function RedirectToMainSite({ lang }: { lang: string }) {
  const countRef = useRef() as any;
  const router = useRouter();
  // const { setScreen } = useCTMContext();
  useEffect(() => {
    let count = 5;
    const interval = setInterval(() => {
      count--;
      countRef.current.textContent = count;
      if (count === 0) {
        clearInterval(interval);
        // setScreen(1);
        router.push(lang === "hi" ? "/" : "/en");
      }
    }, 1000);
  }, []);
  return (
    <>
      <div
        id="redirect-modal"
        className="flex bg-[#18184498] overflow-hidden fixed top-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full "
      >
        <div className="w-full h-full flex justify-center items-center px-[5vw] ">
          <div className="relative pt-0 sm:pt-0 px-4 w-[80vw] md:w-[60vw] lg:w-[fit-content] max-w-[500px]  bg-yellow-600 rounded-md -mt-20">
            {/* <!-- Modal content --> */}
            <div className="relative rounded-lg  h-full w-full flex justify-center items-center py-[10vw] md:py-[50px]   lg:py-[50px] ">
              <h3 className=" text-center text-[1.5rem] sm:text-[2rem] font-serif text-white relative">
                {lang === "hi"
                  ? "आपको"
                  : "You will be redirected to the website in"}{" "}
                <span ref={countRef} className="font-mono">
                  5
                </span>{" "}
                {lang === "hi"
                  ? "सेकंड में वेबसाइट पर रीडायरेक्ट कर दिया जाएगा"
                  : "seconds"}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
