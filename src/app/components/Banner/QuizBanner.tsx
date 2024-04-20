"use client";

import {
  DelayContextProvider,
  useDelayContext,
} from "@/app/context/DelayContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function QuizBanner({
  base64,
  href,
  src,
}: {
  base64: string;
  href: string;
  src: string;
}) {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (window.screen.width > 768) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  });
  return (
    <DelayContextProvider>
      <QuizBannerDescendant
        base64={base64}
        href={href}
        src={src}
        isMobile={isMobile}
      />
    </DelayContextProvider>
  );
}

function QuizBannerDescendant({
  base64,
  href,
  src,
  isMobile,
}: {
  base64: string;
  href: string;
  src: string;
  isMobile: boolean;
}) {
  const { show } = useDelayContext();
  return (
    <>
      {show && (
        <Link
          href={href}
          id="quiz_section"
          className="container-fluid my-4 mt-5"
        >
          <Image
            width={isMobile ? 375 : 1600}
            height={isMobile ? 140 : 550}
            className="w-100"
            style={{ width: "100%", height: "fit-content" }}
            src={src}
            alt="quiz banner"
            placeholder="blur"
            blurDataURL={base64}
          />

          {/* <div
        id="quiz-banner2"
        style={{ width: "100% !important" }}
        onClick={() => quiz_click(2)}
      ></div> */}
        </Link>
      )}
    </>
  );
}
