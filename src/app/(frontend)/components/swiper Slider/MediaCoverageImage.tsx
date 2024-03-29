import Image from "next/image";
import React from "react";

export default function MediaCoverageImage({
  lang,
  article,
}: {
  lang: string;
  article: any;
}) {
  return (
    <>
      <a href={article.href} target="_blank" className="w-full h-full">
        <Image
          width={400}
          height={300}
          className="w-full h-full"
          src={lang === "hi" ? article.imgSrcHindi : article.imgSrcEnglish}
          alt="media coverage article"
        />
      </a>
      {/* <!-- arrow --> */}
      <div className="swiper-button-next media-coverage-button-next">
        <Image
          width={50}
          height={50}
          className="opacity-50 z-[2] w-full h-full object-contain"
          src="/assets/media coverage/Navigator Left.webp"
          alt="navigation left"
        />
      </div>
      <div className="swiper-button-prev media-coverage-button-prev">
        <Image
          width={100}
          height={50}
          priority={true}
          className="opacity-50 z-[2] w-full h-full  object-contain"
          src="/assets/media coverage/Navigator Right.webp"
          alt="avigation right"
        />
      </div>
    </>
  );
}
