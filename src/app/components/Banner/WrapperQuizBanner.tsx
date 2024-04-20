// "use client";

import Image from "next/image";
import Link from "next/link";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import QuizBanner from "./QuizBanner";
export default async function WrapperQuizBanner({ lang }: { lang: string }) {
  const buffer = await fs.readFile(
    `./public/img/${lang === "hi" ? "hindi" : "english"} banner.webp`
  ); // UTF-8 representation convert
  const { base64 } = await getPlaiceholder(buffer);
  console.log("Quiz Banner base64", base64);
  return (
    <QuizBanner
      href={lang === "hi" ? "/quiz" : "/en/quiz"}
      src={`/img/${lang === "hi" ? "hindi" : "english"} banner.webp`}
      base64={base64}
    />
  );
}
