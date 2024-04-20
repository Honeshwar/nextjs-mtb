"use client";

import { useState } from "react";
import ImageCard from "./ImageCard";
import ShareModal from "./ShareModal";
import {
  DelayContextProvider,
  useDelayContext,
} from "@/app/context/DelayContext";

export default function TowardDeplopedBharat({
  title,
  lang,
}: {
  title: string;
  lang: string;
}) {
  const hindi = [
    "/assets/toward-developed-bharat/hi/1.webp",
    "/assets/toward-developed-bharat/hi/2.webp",
    "/assets/toward-developed-bharat/hi/3.webp",
    "/assets/toward-developed-bharat/hi/4.webp",
    "/assets/toward-developed-bharat/hi/5.webp",
    "/assets/toward-developed-bharat/hi/6.webp",
    "/assets/toward-developed-bharat/hi/7.webp",
    "/assets/toward-developed-bharat/hi/8.webp",
  ];
  const english = [
    "/assets/toward-developed-bharat/en/1.webp",
    "/assets/toward-developed-bharat/en/2.webp",
    "/assets/toward-developed-bharat/en/3.webp",
    "/assets/toward-developed-bharat/en/4.webp",
    "/assets/toward-developed-bharat/en/5.webp",
    "/assets/toward-developed-bharat/en/6.webp",
    "/assets/toward-developed-bharat/en/7.webp",
    "/assets/toward-developed-bharat/en/8.webp",
  ];

  const imgUrl = lang === "hi" ? hindi : english;
  return (
    <DelayContextProvider>
      <TowardDeplopedBharatDescendant
        title={title}
        lang={lang}
        imgUrl={imgUrl}
      />
    </DelayContextProvider>
  );
}

function TowardDeplopedBharatDescendant({
  title,
  lang,
  imgUrl,
}: {
  title: string;
  lang: string;
  imgUrl: string[];
}) {
  const [showShareModal, setShowShareModal] = useState(-1);
  const { show } = useDelayContext();
  return (
    <>
      {show && (
        <>
          <div id="promise" className="container mt-4">
            <h3 className="head mb-2 mt-5 mt-md-5">{title}</h3>
            <div className="row">
              <>
                {lang === "hi"
                  ? imgUrl.map((src, i) => (
                      <ImageCard
                        lang="hi"
                        key={"img-card-" + (i + 1)}
                        src={src}
                        onClick={() => {
                          setShowShareModal(150 + i);
                        }}
                      />
                    ))
                  : imgUrl.map((src, i) => (
                      <ImageCard
                        lang="en"
                        key={"img-card-" + (i + 1)}
                        src={src}
                        onClick={() => {
                          setShowShareModal(161 + i);
                        }}
                      />
                    ))}
              </>
            </div>
          </div>

          {showShareModal !== -1 && (
            <ShareModal
              showShareModal={showShareModal}
              setShowShareModal={setShowShareModal}
              shareText={lang === "hi" ? "अभिवादन" : "Greetings"}
            />
          )}
        </>
      )}
    </>
  );
}