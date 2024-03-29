import { useEffect, useState } from "react";
import { useQuizContext } from "../../context/quizContext";
import "../../styles/quiz/resultContainer.css";
import QuizHomeModal from "./QuizHomeModal";
import { useShareLinks } from "../../hooks/ShareLinksHook";
import { generateShareLinks } from "../../utils/common-functions";
export default function QuizResult({ lang = "hi" }: { lang?: string }) {
  const { scored, setScored, setScreen, totalQuestion } = useQuizContext();
  const [openModal, setOpenModal] = useState(false);

  const {
    whatsapp_link,
    setWhatsapp_link,
    facebook_link,
    setFacebook_link,
    twitter_link,
    setTwitter_link,
  } = useShareLinks();
  const reset = () => {
    setScored(0);
    setScreen(1);
  };

  useEffect(() => {
    const link = location.origin + "/quiz";
    let text = "";
    if (lang === "hi") {
      text = `मुझे "महाठगबंधन" क्विज़ में ${scored}/${totalQuestion} स्कोर मिला! क्या आप मुझ से ज्यादा स्कोर ला सकते हैं? क्विज खेलें और जानें! \n`;
    } else {
      text = `I got a ${scored}/${totalQuestion} score on the “Mahathugbandhan” Quiz! Can you beat my score? - Test your knowledge now! \n`;
    }
    console.log("generate score share", link, text);
    const { w, f, t } = generateShareLinks(link, text);
    setWhatsapp_link(w);
    setFacebook_link(f);
    setTwitter_link(t);
  }, []);

  return (
    <>
      <span
        id="q_home_nav"
        onClick={() => setOpenModal(true)}
        className="absolute z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-[11vw] md:w-[4vw] lg:w-[3vw] fill-yellow-500"
        >
          <path d="M280.4 148.3L96 300.1V464a16 16 0 0 0 16 16l112.1-.3a16 16 0 0 0 15.9-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.6a16 16 0 0 0 16 16.1L464 480a16 16 0 0 0 16-16V300L295.7 148.3a12.2 12.2 0 0 0 -15.3 0zM571.6 251.5L488 182.6V44.1a12 12 0 0 0 -12-12h-56a12 12 0 0 0 -12 12v72.6L318.5 43a48 48 0 0 0 -61 0L4.3 251.5a12 12 0 0 0 -1.6 16.9l25.5 31A12 12 0 0 0 45.2 301l235.2-193.7a12.2 12.2 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0 -1.7-16.9z" />
        </svg>
      </span>
      <section
        id="result-container"
        className="section-container justify-center content-center"
      >
        <div
          id="result"
          className="w-[95%] md:w-1/2 flex flex-col justify-center gap-1 items-center"
        >
          {/* <!-- <img src="/assets/quiz/MTB logo.webp" className="col-md-3 col-5" alt> --> */}
          <p
            style={{
              textAlign: "center",
              marginBottom: "0px",
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "0px",
            }}
          >
            {lang === "hi" ? "आपका स्कोर हैं" : "Your Score"}
          </p>
          <div id="score-container">
            <span id="score">{scored}</span>/{totalQuestion}
          </div>
          <div className=" w-full flex" style={{ justifyContent: "center" }}>
            <button
              id="cancel-btn"
              onClick={() => setScreen(4)}
              className="btn w-[60%] max-w-[300px] my-2"
            >
              <i className="fa fa-download me-2" aria-hidden="true"></i>
              {lang === "hi"
                ? " प्रमाणपत्र डाउनलोड करें"
                : "Download Certificate"}
            </button>
          </div>

          <center>
            <div id="" onClick={reset} className="w-full">
              <p>
                <u className="flex justify-center">
                  <img
                    style={{ textShadow: "1px 1px 4px black" }}
                    src="/assets/quiz/again.svg"
                    alt="again svg"
                  />
                  <span>
                    {lang === "hi" ? "फिर से क्विज़ खेलें" : "Try Again"}
                  </span>
                </u>
              </p>
            </div>
          </center>
          <div className="mt-2">
            <p className="mb-0 text-center">
              {lang === "hi" ? "शेयर करें" : "Share:"}
            </p>
            <div className="flex justify-center items-center">
              <a
                id="facebook-link-score"
                target="_blank"
                href={facebook_link}
                className="mx-1"
              >
                <img src="/assets/quiz/fb.svg" alt="facebook logo" />
              </a>
              <a
                id="whatsapp-link-score"
                target="_blank"
                href={whatsapp_link}
                className="mx-1"
              >
                <img src="/assets/quiz/whatsapp.svg" alt="whatsapp logo" />
              </a>
              <a
                id="twitter-link-score"
                target="_blank"
                href={twitter_link}
                className="mx-1"
              >
                <img
                  src="/assets/quiz/twt-x-logo.svg"
                  style={{
                    backgroundColor: "black",
                    padding: "3px",
                    borderRadius: "50%",
                  }}
                  alt="twitter logo"
                />
              </a>
            </div>
          </div>
          {/* <!-- <div className="footer">
            <img src="/assets/quiz/footer.webp" className="w-100" alt>
          </div> --> */}
        </div>
      </section>
      {openModal && <QuizHomeModal setOpenModal={setOpenModal} lang={lang} />}
    </>
  );
}
