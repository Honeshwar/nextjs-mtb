import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import data from "../../utils/constant";

export default function MobileNavbar({ lang = "hi" }: { lang: string }) {
  const [navList] = useState(data[lang].navLinks);
  const [openNavDropdown, setOpenNavDropdown] = useState(false);
  console.log("openNavDropdown", openNavDropdown);
  return (
    <nav className="flex md:hidden absolute left-0 right-0 top-0 z-[11] px-5 pt-2 items-end">
      <div className="w-full md:w-auto flex justify-between gap-2 text-white">
        <Link href={lang === "hi" ? "/" : "/en"} className="">
          <Image
            className="h-[90px] object-contain"
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
        {/* <!-- mobile --> */}
        <div className="md:hidden flex flex-col items-end gap-3">
          <Link href={lang === "hi" ? "/en" : "/"} className="flex gap-2">
            <Image
              className="h-5"
              src="/assets/images/language icon.webp"
              alt="language translate image"
              width={20}
              height={200}
            />
            <button className="text-sm md:hidden bg-red-700 px-2 py-[1px] rounded-[10px] text-white gap-2 flex items-center font-bold">
              <span className="w-3 h-3 bg-white rounded-full"></span>

              <span id="language"> {lang === "hi" ? "English" : "हिंदी"} </span>
            </button>
          </Link>
          <Image
            onClick={() => {
              console.log("openNavDropdown", openNavDropdown);
              setOpenNavDropdown((prev) => !prev);
            }}
            id="hamburg"
            className="w-7 h-5"
            src="/assets/images/Hamburger.webp"
            alt="hamburg"
            width={28}
            height={20}
          />
        </div>
      </div>

      {/* <!-- navigation dropdown for mobile devices  --> */}
      {openNavDropdown && (
        <div
          id="navbar-dropdown"
          className="flex absolute top-20 right-2 bg-[rgb(0,0,0,.9)] rounded-lg pr-3 pl-9 py-4"
        >
          <ul className="flex flex-col items-end gap-2">
            {navList.map(
              (item: { name: string; url: string }, index: number) => (
                <a
                  key={index}
                  href={item.url}
                  onClick={() => setOpenNavDropdown(false)}
                  className={clsx(
                    "text-yellow-500 rounded-md px-3 py-2 text-[1rem] text-center",
                    {
                      "font-yatra": lang === "hi",
                      "font-dangerous": lang === "en",
                    }
                  )}
                >
                  {item.name}
                </a>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
