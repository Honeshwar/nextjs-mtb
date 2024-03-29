import clsx from "clsx";
import Logo from "./Logo";
import { useAppContext } from "../../context/appContext";
import dynamic from "next/dynamic";
import data from "../../utils/constant";
import Mobile from "./Mobile";
import { useState } from "react";
const LazyOTP = dynamic(() => import("./OTP"), {
  ssr: false,
});
const LazyAlreadyRegisterd = dynamic(() => import("./AlreadyRegisterd"));
const LazyThanks = dynamic(() => import("./Thanks"), {});

export default function FormForDesktop({
  lang,
  step,
  setStep,
  setStates,
}: {
  lang: string;
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setStates: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { isMobile } = useAppContext();
  const [CTA] = useState(data[lang].CTA);
  return (
    <div
      className={clsx(
        "hidden z-[2] absolute sm:top-[3vw] right-[4vw] text-center sm:flex flex-col gap-6 bg-[rgb(32,33,36,.5)] rounded-[1.5vw] px-[1vw] py-[3vw] pt-[1vw] w-fit h-fit ",
        {
          "max-w-[580px]": lang === "en",
        }
      )}
    >
      <Logo isMobile={isMobile} CTA={CTA} lang={lang} />

      {/* <!-- mobile number form  --> */}
      {step === 1 && (
        <Mobile
          isMobile={isMobile}
          lang={lang}
          step={step}
          setStep={setStep}
          CTA={CTA}
        ></Mobile>
      )}

      {/* <!-- otp form --> */}
      {step === 2 && (
        <>
          <LazyOTP
            isMobile={isMobile}
            lang={lang}
            setStep={setStep}
            setStates={setStates}
            CTA={CTA}
          />
        </>
      )}

      {/* <!-- alreadyRegistered --> */}
      {step === 0 && (
        <LazyAlreadyRegisterd isMobile={isMobile} lang={lang} CTA={CTA} />
      )}
      {/* <!-- thanks --> */}
      {step === 5 && <LazyThanks isMobile={isMobile} lang={lang} CTA={CTA} />}
    </div>
  );
}
