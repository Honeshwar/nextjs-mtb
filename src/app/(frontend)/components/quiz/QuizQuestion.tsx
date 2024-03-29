import Image from "next/image";
import "../../styles/quiz/question.css";
import { useEffect, useState } from "react";
import QuizHomeModal from "./QuizHomeModal";
import SubmitModal from "./SubmitModal";
import { useQuizContext } from "../../context/quizContext";
import { generateCertificate } from "../../utils/common-functions";
import clsx from "clsx";
export default function QuizQuestion({ lang = "hi" }: { lang: string }) {
  const ALL_QUESTION = {
    hi: [
      {
        imgUrl: "/assets/quiz/question/Fodder scam Image.webp",
        question: "चारा घोटाले का मुख्य आरोपी कौन हैं?",
        a: "लालू प्रसाद यादव",
        b: "जगन्नाथ मिश्रा",
        c: "आर.के. राणा",
        d: "जगदीश शर्मा",
        answer: "लालू प्रसाद यादव",
      },
      {
        imgUrl: "/assets/quiz/question/Liquor Scam Image.webp",
        question: " दिल्ली शराब घोटाले में किस AAP नेता को गिरफ्तार किया गया?",
        a: "राघव चड्ढा",
        b: "संजय सिंह",
        c: "सत्येन्द्र जैन",
        d: "मनीष सिसौदिया",
        answer: "मनीष सिसौदिया",
      },
      {
        imgUrl: "/assets/quiz/question/Article-370.webp",
        question:
          "किस नेता ने कहा था कि अगर श्री नरेंद्र मोदी दस बार भी प्रधानमंत्री बन जाए, तब भी जम्मू-कश्मीर से धारा 370 नहीं हटा पाएंगे?",
        a: "फ़िरोज़ खान",
        b: "फारूक अब्दुल्ला",
        c: "मेहबूबा मुफ्ती",
        d: "हकीम यासीन",
        answer: "फारूक अब्दुल्ला",
      },
      // {
      //   imgUrl: "/assets/quiz/question/Find Audio Image.WEBP",
      //   audioUrl: "/assets/quiz/question/audio.mp3",
      //   question: "यह किसकी आवाज है?",
      //   a: "ममता बनर्जी",
      //   b: "नुसरत जहां",
      //   c: "मिमी चक्रवर्ती",
      //   d: "महुआ मोइत्रा",
      //   answer: "ममता बनर्जी",
      // },
      // {
      //   imgUrl: "/assets/quiz/question/national-herald-jpg.webp",
      //   question:
      //     "988 करोड़ रुपये के नेशनल हेराल्ड भ्रष्टाचार मामले में मुख्य अभियुक्त कौन हैं?",
      //   a: "विष्णु गोयल - रेखा गोयल",
      //   b: "इंदिरा गांधी-राजीव गांधी",
      //   c: "ममता बनर्जी - अभिषेक बनर्जी",
      //   d: "सोनिया गांधी-राहुल गांधी",
      //   answer: "इंदिरा गांधी-राजीव गांधी",
      // },
    ],
    en: [
      {
        imgUrl: "/assets/quiz/question/Fodder scam Image.webp",
        question: "Who is the main accused under Fodder scam?",
        a: "Lalu Prasad Yadav",
        b: "Jagannath Mishra",
        c: "R.K. Rana",
        d: "Jagdish Sharma",
        answer: "Lalu Prasad Yadav",
      },
      {
        imgUrl: "/assets/quiz/question/Liquor Scam Image.webp",
        question: "Which AAP leader was arrested in Delhi Liquor Scam?",
        a: "Raghav Chadha",
        b: "Sanjay Singh",
        c: "Satyendra Jain",
        d: "Manish Sisodia",
        answer: "Manish Sisodia",
      },
      {
        imgUrl: "/assets/quiz/question/Article-370.webp",
        question:
          "Which leader said that Shri Narendra Modi wont be able to remove Article 370 in Jammu & Kashmir even if he becomes the Prime Minister ten times?",
        a: "Fairoz Khan",
        b: "Farooq Abdullah",
        c: "Mehbooba Mufti",
        d: "Hakeem Yasin",
        answer: "Farooq Abdullah",
      },
    ],
  } as any;
  const [Questions] = useState(ALL_QUESTION[lang]);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [question, setQuestion] = useState(Questions[0]);
  const [openModal, setOpenModal] = useState(false);
  const [score, setScore] = useState(0);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [error, setError] = useState(false);
  const [openSubmitModal, setOpenSubmitModal] = useState(false);

  const { setScreen, scored, setScored, setTotalQuestion, setCertificateUrl } =
    useQuizContext();
  const [alreadyRegistered, setAlreadyRegistered] = useState(false);
  useEffect(() => {
    setTotalQuestion(Questions.length);
  }, []);
  useEffect(() => {
    function callAPI(mobile: string, score: number) {
      let fd = new FormData();
      fd.append("mobile", mobile);
      fd.append("score", score + "");

      fetch("https://mahathugbandhan.com/api/v1/user/update", {
        method: "PATCH",
        body: fd,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("result", result);
          if (result.status === 200) {
            if (localStorage.getItem("certificate_url_hi")) {
              setCertificateUrl(localStorage.getItem("certificate_url_hi")!);
              setScreen(3);
            } else {
              generateCertificate(
                mobile,
                "hi",
                () => setScreen(3),
                setCertificateUrl
              );
            }
            setAlreadyRegistered(false);
          }
        });
    }
    if (alreadyRegistered) {
      console.log("scored", scored);
      callAPI(localStorage.getItem("mobile_quiz")!, scored);
    }
  }, [alreadyRegistered]);
  const selectOption = (e: any, isRightAnswer: boolean) => {
    setError(false);

    let buttons = document.querySelectorAll("div.buttons button");
    if (buttons) {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-btn");
      }
    }
    e.target.classList.add("active-btn");

    console.log("select option", isRightAnswer);
    setIsOptionSelected(true);
    if (isRightAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (!isOptionSelected) {
      setError(true);
      return;
    }
    if (currentQuestion === Questions.length) {
      if (localStorage.getItem("mobile_quiz")) {
        console.log("score", score);
        setScored(score);
        // setScreen(3);
        setAlreadyRegistered(true);
      } else {
        setOpenSubmitModal(true);
      }

      return;
    }
    let buttons = document.querySelectorAll("div.buttons button");
    if (buttons) {
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active-btn");
      }
    }
    setIsOptionSelected(false);
    setCurrentQuestion((prev) => prev + 1);
    setQuestion(Questions[currentQuestion]);
  };

  const resetGame = () => {
    setScore(0);
    setCurrentQuestion(1);
    setQuestion(Questions[0]);
  };
  return (
    <>
      <span
        id="q_home_nav"
        onClick={() => setOpenModal(true)}
        className="absolute top-[2vw] left-1 z-10"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-[11vw] md:w-[4vw] lg:w-[3vw] fill-yellow-500"
        >
          <path d="M280.4 148.3L96 300.1V464a16 16 0 0 0 16 16l112.1-.3a16 16 0 0 0 15.9-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.6a16 16 0 0 0 16 16.1L464 480a16 16 0 0 0 16-16V300L295.7 148.3a12.2 12.2 0 0 0 -15.3 0zM571.6 251.5L488 182.6V44.1a12 12 0 0 0 -12-12h-56a12 12 0 0 0 -12 12v72.6L318.5 43a48 48 0 0 0 -61 0L4.3 251.5a12 12 0 0 0 -1.6 16.9l25.5 31A12 12 0 0 0 45.2 301l235.2-193.7a12.2 12.2 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0 -1.7-16.9z" />
        </svg>
      </span>
      <section id="quiz-container" className="section-container">
        <div id="question-container" className="">
          <div id="question-1" className="question col-12  ">
            <div className="quiz-header img-section">
              <Image
                width={1920}
                height={1080}
                className=""
                src={`/assets/quiz/question/MTB logo ${lang}.webp`}
                alt="logo"
              />
              <div className="second-img">
                <Image
                  width={1920}
                  height={1080}
                  className=""
                  src={question.imgUrl}
                  alt="quiz img"
                />
              </div>
            </div>
            {/* <!-- quiz question section --> */}
            <div className="question-section col-12">
              <p className="col-12">{question.question}</p>
              <div className="buttons  mx-auto">
                <button
                  onClick={(e) =>
                    selectOption(e, question.answer === question.a)
                  }
                >
                  <span className="option-alphabate">A</span>
                  {question.a}
                </button>
                <button
                  onClick={(e) =>
                    selectOption(e, question.answer === question.a)
                  }
                >
                  <span className="option-alphabate">B</span>
                  {question.b}
                </button>
                <button
                  onClick={(e) =>
                    selectOption(e, question.answer === question.a)
                  }
                >
                  <span className="option-alphabate">C</span>
                  {question.c}
                </button>
                <button
                  onClick={(e) =>
                    selectOption(e, question.answer === question.a)
                  }
                >
                  <span className="option-alphabate">D</span>
                  {question.d}
                </button>
              </div>
            </div>
          </div>
          <div id="next-btn-container">
            {error && (
              <p className="option_select" style={{ color: "red" }}>
                {lang === "hi"
                  ? "कृपया आगे बढ़ने के लिए विकल्प चुनें"
                  : "select option to proceed"}
              </p>
            )}
            <button id="next-btn" onClick={nextQuestion} className="btn">
              {lang === "hi"
                ? currentQuestion === Questions.length
                  ? "सबमिट"
                  : "आगे बढ़ें"
                : currentQuestion === Questions.length
                ? "Submit"
                : "Next"}
              {/* <!-- बढ़ो --> */}
            </button>
            <p
              id="pagination"
              className={clsx("", {
                "bottom-[50px]":
                  currentQuestion !== Questions.length || lang === "hi",
                "bottom-[33px]":
                  currentQuestion === Questions.length && lang === "en",
              })}
            >
              0{currentQuestion}/0{Questions.length}
            </p>
          </div>
        </div>
        {/* <!-- <div className="footer">
                <Image width={1920} height={1080} src="img/footer1.webp" className="w-100" alt />
            </div> --> */}
      </section>

      {openModal && <QuizHomeModal setOpenModal={setOpenModal} lang={lang} />}
      {openSubmitModal && (
        <SubmitModal
          setOpenSubmitModal={setOpenSubmitModal}
          score={score}
          resetGame={resetGame}
          lang={lang}
        />
      )}
    </>
  );
}
