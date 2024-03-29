"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import TeaserVideo from "./TeaserVideo";
import DetailForm from "./DetailForm";
import Link from "next/link";
import DATA from "../utils/constant";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Mobile from "./header/Mobile";
// import AlreadyRegisterd from "./header/AlreadyRegisterd";
// import Thanks from "./header/thanks";
import Logo from "./header/Logo";
import { useAppContext } from "../context/appContext";
import data from "../utils/constant";
const LazyOTP = dynamic(() => import("./header/OTP"), {
  ssr: false,
});

const LazyDetailForm = dynamic(() => import("./DetailForm"), {
  ssr: false,
});
const LazyThankYouPledge = dynamic(() => import("./header/ThankYouPledge"), {
  ssr: false,
});

const LazyDesktopNavbar = dynamic(() => import("./header/DesktopNavbar"), {});
const LazyMobileNavbar = dynamic(() => import("./header/MobileNavbar"), {});
const LazyFormForMobile = dynamic(() => import("./header/FormForMobile"), {});
const LazyFormForDesktop = dynamic(() => import("./header/FormForDesktop"), {});

function Header({
  // isMobile,
  lang = "hi",
}: {
  // isMobile: boolean;
  lang: string;
}) {
  const { isMobile } = useAppContext();

  const [CTA] = useState(data[lang].CTA);

  const [step, setStep] = useState(1);
  const [states, setStates] = useState([]);

  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 2000);
  }, []);

  return (
    <>
      {delay && (
        <>
          {/* <!-- desktop view --> */}
          {isMobile ? null : <LazyDesktopNavbar lang={lang} />}
        </>
      )}

      <header className="relative w-full h-[90vh] sm:h-[45vw]">
        {delay && (
          <>
            {isMobile && (
              <>
                {/* <!-- mobile  navbar --> */}
                <LazyMobileNavbar lang={lang} />
              </>
            )}
          </>
        )}

        <TeaserVideo lang={lang} />

        {delay && (
          <>
            {isMobile ? (
              <>
                {/* <!-- form for mobile devices --> */}
                <LazyFormForMobile
                  lang={lang}
                  step={step}
                  setStep={setStep}
                  setStates={setStates}
                />
              </>
            ) : (
              <>
                {/* <!-- form for desktop devices --> */}
                <LazyFormForDesktop
                  lang={lang}
                  step={step}
                  setStep={setStep}
                  setStates={setStates}
                />
              </>
            )}

            {/* <!-- blue bg --> */}
            <div
              className="z-[1] absolute bottom-0 h-[50vw] sm:h-[10vw] w-full sm:top-[38vw] xl:top-[35vw]"
              style={{
                backgroundImage: "linear-gradient(to top, #12129e, #12129e00)",
              }}
            ></div>
          </>
        )}
      </header>

      {delay && (
        <>
          {/* <!-- detail form --> */}
          {step === 3 && (
            <LazyDetailForm
              CTA={CTA}
              states={states}
              setStates={setStates}
              setStep={setStep}
              lang={lang}
            />
          )}

          {/* <!-- Thank you container --> */}
          {step === 4 && (
            <LazyThankYouPledge lang={lang} setStep={setStep} CTA={CTA} />
          )}
        </>
      )}
    </>
  );
}

export default Header;
