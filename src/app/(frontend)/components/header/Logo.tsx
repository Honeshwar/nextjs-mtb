import clsx from "clsx";
import Image from "next/image";

export default function Logo({
  isMobile,
  lang,
  CTA,
}: {
  isMobile: boolean;
  lang: string;
  CTA: any;
}) {
  return (
    <>
      {isMobile ? (
        <div className="font-climateCrisis flex flex-col px-2 items-center">
          <Image
            className="w-full h-full max-w-[150px] mx-auto "
            src={
              lang === "hi"
                ? "/assets/mtb_hindi_logo.webp"
                : "/assets/mtb_english_logo.webp"
            }
            priority={true}
            loading="eager"
            placeholder="blur"
            blurDataURL={
              lang === "hi"
                ? "/assets/mtb_hindi_logo.webp"
                : "/assets/mtb_english_logo.webp"
            }
            alt="MTB logo"
            width={100}
            height={100}
          />
          <span
            className={clsx("text-white ", {
              "text-[21px] font-yatra max-w-[290px]": lang === "hi",
              "tracking-[1px] text-[20px] font-dangerous max-w-[270px]":
                lang === "en",
            })}
          >
            {/* देश को महाठगबंधन से बचाने का संकल्प लें */}
            {/* Pledge to save the country from Mahathugbandhan */}
            {/* {lang === "hi"
            ? "देश को महाठगबंधन से बचाने का संकल्प लें"
            : "Pledge to save the country from Mahathugbandhan"} */}
            {CTA.title}
          </span>
        </div>
      ) : (
        <div
          className={clsx("font-bold flex flex-col px-2", {
            "gap-3": lang === "hi",
            "gap-[12px]": lang === "en",
          })}
        >
          <Image
            className="max-w-[170px] mx-auto"
            src="/assets/mtb_hindi_logo.webp"
            priority={true} //lazy lodaing remove and preload hoga start
            placeholder="empty"
            //   blurDataURL="/assets/mtb_hindi_logo.webp"
            alt="MTB logo"
            width={100}
            height={100}
          />
          <span
            className={clsx(" text-white ", {
              "text-[2.5vw] font-yatra ": lang === "hi",
              "tracking-[3px] text-[2vw] font-dangerous": lang === "en",
            })}
          >
            {/* देश को महाठगबंधन से बचाने का संकल्प लें */}
            {CTA.title}
          </span>
        </div>
      )}
    </>
  );
}
