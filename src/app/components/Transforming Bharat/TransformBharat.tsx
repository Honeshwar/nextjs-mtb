"use client";
import {
  DelayContextProvider,
  useDelayContext,
} from "@/app/context/DelayContext";
import ForDesktop from "./ForDesktop";
import ForMobile from "./ForMobile";

export default function TransformBharat({
  title,
  lang,
}: {
  title: string;
  lang: string;
}) {
  // const mobileRef = useRef<HTMLDivElement>(null);
  // const desktopRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (mobileRef.current && desktopRef.current) {
  //     if (window.innerWidth < 768) {
  //       mobileRef.current.style.display = "block";
  //       desktopRef.current.style.display = "none";
  //     } else {
  //       mobileRef.current.style.display = "none";
  //       desktopRef.current.style.display = "block";
  //     }
  //   }
  // }, []);

  return (
    <DelayContextProvider>
      <TransformBharatDescendant title={title} lang={lang} />
    </DelayContextProvider>
  );
}

function TransformBharatDescendant({
  title,
  lang,
}: {
  title: string;
  lang: string;
}) {
  const { show } = useDelayContext();

  return (
    <>
      {show && (
        <div id="achivments" className="container mt-5 mt-md-5 ">
          <h3 className="head mb-md-3">{title}</h3>
          <ForDesktop lang={lang} />
          <ForMobile lang={lang} />
          <center>
            <a href="/nayabharat/index.html?lang=hi" className="d-none">
              <button
                className="btn"
                style={{
                  backgroundColor: "rgb(243 115 5)",
                  color: "white",
                  textAlign: "center",
                  marginTop: "20px",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                अधिक जानें
              </button>
            </a>
          </center>
        </div>
      )}
    </>
  );
}

/**
 * <div ref={desktopRef} className="d-md-block d-none ">
        <div className="row mt-3 mb-2">
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(1, "One")}
              src="/assets/transforming bharat/a1.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(2, "Two")}
              src="/assets/transforming bharat/a2.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(3, "Three")}
              src="/assets/transforming bharat/a3.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(4, "Four")}
              src="/assets/transforming bharat/a4.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(5, "Five")}
              src="/assets/transforming bharat/a5.webp"
              alt="Transforming bharat image card"
            />
          </div>
        </div>
        <div className="row mt-3 mb-2">
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(6, "Six")}
              src="/assets/transforming bharat/a6.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(7, "Seven")}
              src="/assets/transforming bharat/a7.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(8, "Eight")}
              src="/assets/transforming bharat/a8.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(9, "Nine")}
              src="/assets/transforming bharat/a9.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col videos">
            <Image
              width={260}
              height={200}
              className="w-100 mhtm_img"
              loading="lazy"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(10, "Ten")}
              src="/assets/transforming bharat/a10.webp"
              alt="Transforming bharat image card"
            />
          </div>
        </div>
      </div>
      <div ref={mobileRef} className="d-md-none d-block ">
        <div className="row  mb-2">
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(1, "One")}
              loading="lazy"
              src="/assets/transforming bharat/a1.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              loading="lazy"
              onClick={() => fullscreenvideo(2, "Two")}
              src="/assets/transforming bharat/a2.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              loading="lazy"
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(3, "Three")}
              src="/assets/transforming bharat/a3.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              loading="lazy"
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(4, "Four")}
              src="/assets/transforming bharat/a4.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              loading="lazy"
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(5, "Five")}
              src="/assets/transforming bharat/a5.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              loading="lazy"
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(6, "Six")}
              src="/assets/transforming bharat/a6.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              loading="lazy"
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(7, "Seven")}
              src="/assets/transforming bharat/a7.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              loading="lazy"
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(8, "Eight")}
              src="/assets/transforming bharat/a8.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              loading="lazy"
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(9, "Nine")}
              src="/assets/transforming bharat/a9.webp"
              alt="Transforming bharat image card"
            />
          </div>
          <div className="col-6 videos">
            <Image
              width={180}
              height={140}
              loading="lazy"
              className="w-100 mhtm_img"
              data-bs-target="#exampleModalToggle"
              data-bs-toggle="modal"
              onClick={() => fullscreenvideo(10, "Ten")}
              src="/assets/transforming bharat/a10.webp"
              alt="Transforming bharat image card"
            />
          </div>
        </div>
      </div>
 */
