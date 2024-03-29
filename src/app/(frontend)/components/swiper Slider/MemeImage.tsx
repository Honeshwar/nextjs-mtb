import Image from "next/image";
import { useEffect } from "react";

export default function MemeImage({
  image,
  setSlideChanged,
}: {
  image: any;
  setSlideChanged: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  //   useEffect(() => {
  //     if(slideChanged) {
  //       generateShareLinks();
  //       setSlideChanged(false);
  //     }
  //   }, [slideChanged]);
  return (
    <>
      <Image
        priority={true}
        className="w-full h-full "
        width={1000}
        height={800}
        src={image.src}
        alt="meme card"
        data-url={image["data-url"]}
      />
      {/* <!-- arrow --> */}
      <div
        onClick={() => setSlideChanged(true)}
        className="swiper-button-next meme-bazar-button-next"
      >
        <Image
          width={50}
          height={50}
          className="z-[2] w-full h-full object-contain"
          src="/assets/meme-bazar/Navigator Left.webp"
          alt="navigation left"
        />
      </div>
      <div
        onClick={() => setSlideChanged(true)}
        className="swiper-button-prev meme-bazar-button-prev"
      >
        <Image
          width={50}
          height={50}
          className="z-[2] w-full h-full object-contain"
          src="/assets/meme-bazar/Navigator Right.webp"
          alt="avigation right"
        />
      </div>
    </>
  );
}
