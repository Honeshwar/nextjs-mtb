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

export default function FormForMobile({
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
    <div className="sm:hidden absolute bottom-[0vw] left-0 right-0 text-center flex flex-col gap-2 z-10 px-3 py-7 pb-0">
      <Logo isMobile={isMobile} CTA={CTA} lang={lang} />
      {/* <!-- Mobile number form --> */}
      {step === 1 && (
        <Mobile
          isMobile={isMobile}
          step={step}
          setStep={setStep}
          lang={lang}
          CTA={CTA}
        />
      )}
      {step === 2 && (
        <>
          {/* <!-- otp Form --> */}
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
