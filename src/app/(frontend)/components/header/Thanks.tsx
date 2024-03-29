import clsx from "clsx";

export default function Thanks({
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
        <div className="flex text-center justify-center items-center">
          <h3 className="mb-5 text-lg font-bold text-[yellow] dark:text-[yellow]">
            <span
              className={clsx("underline", {
                "font-yatra": lang === "hi",
                "font-dangerous": lang === "en",
              })}
            >
              {/* प्रतिज्ञा के लिए धन्यवाद */}
              {CTA["already-registered"]["sub-heading"]}
            </span>
          </h3>
        </div>
      ) : (
        <div className="text-center justify-center items-center">
          {/* <Image
              className="mx-auto mb-4 text-gray-400 w-[5vw] h-[5vw] dark:text-gray-200 object-contain"
              src="https://cdn.pixabay.com/photo/2016/06/01/00/57/thank-you-1428147_640.png"
              alt="thank you image"
            /> */}
          <h3 className="mb-5 text-lg font-bold text-[yellow] dark:text-[yellow]">
            <span
              className={clsx("underline", {
                "font-yatra text-[1.5rem]": lang === "hi",
                "font-dangerous text-[1.2rem]": lang === "en",
              })}
            >
              {/* प्रतिज्ञा के लिए धन्यवाद */}
              {CTA["already-registered"]["sub-heading"]}
            </span>
          </h3>
        </div>
      )}
    </>
  );
}
