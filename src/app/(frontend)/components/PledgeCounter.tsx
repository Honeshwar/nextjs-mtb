"use client";
import Image from "next/image"; //image api import png(1mb)-->compress and webp convert
import Counter from "./Counter";
// import { useEffect, useState } from "react";
// import getPlaiceholderImage from "../utils/plaiceholder";

export default function PledgeCounter({ lang = "hi" }: { lang: string }) {
  // const [pledgeCount, setPledgeCount] = useState([
  //   "2",
  //   "2",
  //   "4",
  //   "4",
  //   "4",
  //   "5",
  // ]);
  // useEffect(() => {
  //   async function getCount() {
  //     // Fetch data from an external API
  //     const res = await fetch(
  //       "https://mahathugbandhan.com/api/v1/user/get_count"
  //     );
  //     const resData = await res.json();

  //     // Or fetch data from your Next.js API route
  //     // const res = await fetch('http://localhost:3000/api/users');
  //     // const users = await res.json();

  //     // Pass data to the page via props
  //     const count = resData.total_user;
  //     console.log(count);
  //     const countArr = (count + 6_50_00).toString().split("");

  //     setPledgeCount(countArr);
  //   }
  //   try {
  //     getCount();
  //   } catch (error) {
  //     console.log("error while caliing get_count API");
  //   }
  // }, []);

  // const a = await getPlaiceholderImage("/assets/counter/yadev.webp");

  return (
    <section id="pledge" className=" overflow-hidden  sm:overflow-visible">
      {/* <!-- Pledge Counter --> */}
      <div
        className="w-full h-fit bg-[#12129e]  pt-[4rem] sm:pt-[5vw]"
        style={{ backgroundColor: "#12129e" }}
      >
        <div className="flex justify-center items-center w-full h-full ">
          <div className="w-[70%] sm:w-fit h-full flex justify-center items-center sm:items-start relative mb-[26px] mt-3 sm:mb-1 sm:mt-4 counter-container">
            <Image
              loading="eager"
              width={100}
              height={120}
              // placeholder="blur"
              // blurDataURL={a}
              className="w-fit h-[120px] sm:h-[210px] absolute left-[-53px] sm:left-[-0px] top-[-35px] sm:top-[-65px] z-[10] sm:absolute"
              src="/assets/counter/yadev.webp"
              alt="akhilesh yadev"
            />
            <Image
              loading="eager"
              width={150}
              height={56}
              className="w-fit h-[56px] sm:h-[100px] absolute left-[35%] sm:left-[40%] top-[-45px] sm:top-[-80px] z-[9]  "
              src="/assets/counter/stalin2.webp"
              alt="stalin"
            />
            {/* <!-- counter --> */}
            <Counter />

            <Image
              loading="eager"
              width={100}
              height={100}
              className="w-fit h-[100px] sm:h-[200px] absolute right-[-60px] top-[-10px] z-[10]  sm:top-[-67px] sm:right-[-23px] sm:absolute"
              src="/assets/counter/mamata.webp"
              alt="mamata banerji"
            />
          </div>
        </div>
        {/* <!-- pledge band --> */}
        <div className="h-[25vw] sm:h-auto sm:mt-[1vw] w-full bg-transparent sm:px-[2vw]   ">
          <div className="flex flex-col  justify-center items-center relative h-full w-full ">
            <div className="h-fit w-fit">
              <h1 className="h-fit font-yatra text-[white] text-[10vw] sm:text-[3vw] pt-[1vw]">
                {lang === "hi" ? "संकल्प लिए जा चुके हैं" : "PLEDGES TAKEN"}
              </h1>
            </div>
            <div className="relative flex justify-center items-center py-[2vw] mt-[-20px]">
              <Image
                loading="eager"
                width={100}
                height={120}
                className="w-fit h-[18vw] sm:h-[11vw] object-cover  bottom-[0vw] left-[.5vw] sm:bottom-[0vw] sm:left-[14.4vw]"
                src="/assets/counter/Sonia1.webp"
                alt="Sonia Gandhi"
              />
              <Image
                loading="eager"
                width={100}
                height={120}
                className="w-fit h-[18vw] sm:h-[11vw] object-cover  bottom-[0vw] left-[.5vw] sm:bottom-[0vw] sm:left-[14.4vw]"
                src="/assets/counter/Akhilesh1.webp"
                alt="Akhilesh Yadev"
              />
              <Image
                loading="eager"
                width={100}
                height={120}
                className="w-fit h-[14vw] sm:h-[11vw] object-cover  bottom-[0vw] left-[.5vw] sm:bottom-[0vw] sm:left-[14.4vw]"
                src="/assets/counter/Sharad yadav1.webp"
                alt="Sharad Pawar"
              />
              <Image
                loading="eager"
                width={100}
                height={120}
                className="w-fit h-[15vw] sm:h-[9vw]  bottom-[0vw] left-[13vw] sm:bottom-[-.2vw] sm:left-[24vw] "
                style={{ transform: "rotateY(180deg)" }}
                src="/assets/counter/Rahul17.webp"
                alt="Rahul Gandhi"
              />
              {/* <!-- <Image
              loading="eager"
                 
                  width={100}
                  height={120}
                className="h-[14vw] sm:h-[8vw]  bottom-[.5vw] right-[15vw] sm:bottom-[.4vw] sm:right-[26vw]"
                src="./MTB Main Website Code/Desktop/1 Page Till Pledge counter/WebP/Mamata44.webp"
                alt="mamata"
                /> --> */}
              <Image
                loading="eager"
                width={100}
                height={120}
                className="w-fit h-[14vw] sm:h-[8vw]  bottom-[.2vw] right-[2vw] sm:bottom-[0vw] sm:right-[15vw]"
                src="/assets/counter/Kejriwal3.webp"
                alt="kejriwal"
              />
              <Image
                loading="eager"
                width={100}
                height={120}
                className="w-fit h-[14vw] sm:h-[8vw]  bottom-[.5vw] right-[15vw] sm:bottom-[.4vw] sm:right-[26vw]"
                src="/assets/counter/Laloo3.webp"
                alt="laloo yadev"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
