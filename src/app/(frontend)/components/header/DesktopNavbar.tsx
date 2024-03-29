import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import data from "../../utils/constant";

export default function DesktopNavbar({ lang = "hi" }: { lang: string }) {
  const [navList] = useState(data[lang].navLinks);

  return (
    <nav className="hidden md:flex bg-blue-900 px-5 pt-2 items-end gap-0 md:gap-5 xl:gap-10 justify-around h-[100px]">
      <div className="w-full md:w-auto flex justify-between gap-2 text-white">
        <Link href={lang === "hi" ? "/" : "/en"} className="">
          <Image
            className={clsx("object-contain", {
              "h-[95px] ": lang === "hi",
              "h-[60px] lg:h-[70px] xl:h-[90px]": lang === "en",
            })}
            src={
              lang === "hi"
                ? "/assets/mtb_hindi_logo.webp"
                : "/assets/mtb_english_logo.webp"
            }
            priority={true}
            placeholder="blur"
            blurDataURL={
              lang === "hi"
                ? "/assets/mtb_hindi_logo.webp"
                : "/assets/mtb_english_logo.webp"
            }
            alt="brand logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      <div
        className={clsx(" h-full flex justify-center items-center", {
          "w-[90%] md:w-[90%]": lang === "hi",
          "w-[95%] xl:w-[90%]": lang === "en",
        })}
      >
        <ul
          className={clsx("w-full flex justify-center pt-[.21vw]", {
            "gap-[10px] lg:gap-2": lang === "hi",
            "gap-[0px] lg:gap-1 xl:gap-1": lang === "en",
          })}
        >
          {navList.map((item: { name: string; url: string }, index: number) => (
            <a
              key={index}
              href={item.url}
              className={clsx(
                "text-white hover:bg-yellow-600 hover:text-white rounded-md px-3 py-2 md:pl-1 md:pr-1 text-[1.2vw] text-center",
                {
                  "xl:px-3 font-yatra": lang === "hi",
                  "xl:px-2 font-dangerous": lang === "en",
                }
              )}
            >
              {item.name}
            </a>
          ))}

          {/* <!-- language switch button --> */}
          <Link
            href={lang === "hi" ? "/en" : "/"}
            className={clsx(
              "flex gap-2 items-center px-4 flex-wrap justify-center z-10",
              {
                "pr-2 xl:px-4": lang === "en",
              }
            )}
            style={{ top: "90px", right: "5vw" }}
          >
            <Image
              className="h-5"
              src="/assets/images/language icon.webp"
              alt="language translate image"
              width={20}
              height={20}
            />
            <button className="hidden bg-red-700 px-4 py-[0px] rounded-[10px] text-white gap-2 sm:flex items-center font-bold">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span id="language"> English</span>
            </button>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
