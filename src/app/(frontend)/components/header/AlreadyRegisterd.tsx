import clsx from "clsx";

export default function AlreadyRegisterd({
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
        <div className="flex text-center flex-col justify-center items-center">
          <h3
            className={clsx(
              "sm:text-md md:text-lg  underline text-[yellow] dark:text-[yellow]",
              {
                "font-yatra": lang === "hi",
                "font-dangerous": lang === "en",
              }
            )}
          >
            {/* आप पहले से ही पंजीकृत हैं */}
            {CTA["already-registerd"]["heading"]}
          </h3>
          <h3
            className={clsx(
              "sm:text-md md:text-lg underline text-[yellow] dark:text-[yellow]",
              {
                "font-yatra": lang === "hi",
                "font-dangerous": lang === "en",
              }
            )}
          >
            {/* प्रतिज्ञा के लिए धन्यवाद */}
            {CTA["already-registerd"]["sub-heading"]}
          </h3>
        </div>
      ) : (
        <div className="text-center flex-col justify-center items-center">
          <h3
            className={clsx(
              "sm:text-md underline text-[yellow] dark:text-[yellow] ",
              {
                "font-yatra text-[1.5rem]": lang === "hi",
                "font-dangerous text-[1.2rem]": lang === "en",
              }
            )}
          >
            {/* आप पहले से ही पंजीकृत हैं */}
            {CTA["already-registered"]["heading"]}
          </h3>
          <h3
            className={clsx(
              "sm:text-md underline text-[yellow] dark:text-[yellow]",
              {
                "font-yatra text-[1.5rem]": lang === "hi",
                "font-dangerous text-[1.2rem]": lang === "en",
              }
            )}
          >
            {/* प्रतिज्ञा के लिए धन्यवाद */}
            {CTA["already-registered"]["sub-heading"]}
          </h3>
        </div>
      )}
    </>
  );
}
