"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

// export async function getServerSideProps() {
//   try {
//     // Fetch data from an external API
//     const res = await fetch(
//       "https://mahathugbandhan.com/api/v1/user/get_count"
//     );
//     const resData = await res.json();

//     // Pass data to the page via props
//     const count = resData.total_user;
//     console.log(count);
//     const countArr = (count + 6_50_00).toString().split("");
//     return {
//       props: {
//         pledgeCounter: countArr,
//       },
//     };
//   } catch (error) {
//     console.log("error while caliing get_count API");
//   }
// }
export default function Counter() {
  //   console.log("pledge counter", pledgeCounter);
  const [pledgeCounter, setPledgeCounter] = useState([]);
  useEffect(() => {
    async function getCount() {
      try {
        // Fetch data from an external API
        const res = await fetch(
          "https://mahathugbandhan.com/api/v1/user/get_count"
        );
        const resData = await res.json();

        // Pass data to the page via props
        const count = resData.total_user;
        console.log(count);
        const countArr = (count + 6_50_00).toString().split("");
        setPledgeCounter(countArr);
      } catch (error) {
        console.log("error while caliing get_count API");
      }
    }
    getCount();
  }, []);
  return (
    <div id="counter" className="flex items-center w-[100%] sm:w-[70%] h-fit ">
      {pledgeCounter?.map((number, index) => (
        // <>
        // {/* box 1 */}
        <div
          key={number + 10 + index}
          className="w-[65px] sm:w-[120px] h-[70px] sm:h-[120px] flex justify-center items-center p-1 mr-[-2px]"
        >
          <div className="w-full h-full">
            <div className="w-full h-full relative">
              {/* <!-- most outer body  --> */}
              <Image
                loading="eager"
                width={120}
                height={120}
                className="w-full h-full"
                src="/assets/counter/Asset 2.png"
                alt="container"
              />
              <Image
                loading="eager"
                width={100}
                height={100}
                className="w-full h-full absolute top-[0px] left-[-2px]"
                src="/assets/counter/Asset 4.png"
                alt="left top line"
              />
              <Image
                loading="eager"
                width={100}
                height={120}
                className="w-full h-full absolute bottom-[-1px] right-[-2px]"
                src="/assets/counter/Asset 3.png"
                alt="right bottom line"
              />

              {/* <!-- 2 big piece --> */}
              <Image
                loading="eager"
                width={100}
                height={120}
                className=" h-fit absolute z-[4] top-[40%] sm:top-[35.5%] left-[-3px] w-[7%] sm:w-[9%]"
                src="/assets/counter/Asset 6.png"
                alt="big joint "
              />
              <Image
                loading="eager"
                width={100}
                height={120}
                className="h-fit absolute z-[4] top-[40%] sm:top-[35.5%] right-[-3px] w-[7%] sm:w-[9%]"
                src="/assets/counter/Asset 6.png"
                alt="big joint"
              />

              {/* <!-- 2 small picec --> */}
              <Image
                loading="eager"
                width={100}
                height={120}
                className="h-fit absolute z-[4] top-[48%] sm:top-[44%] left-1 sm:left-2 w-[7%] sm:w-[10%]"
                src="/assets/counter/Asset 7.png"
                alt="down bg"
              />
              <Image
                loading="eager"
                width={100}
                height={120}
                className="h-fit absolute z-[4] top-[48%] right-1 w-[6%] sm:top-[44%] sm:right-2 sm:w-[10%]"
                src="/assets/counter/Asset 7.png"
                alt="down bg"
              />

              {/* <!-- two red bg --> */}
              <div className="absolute top-0 h-full w-full p-[2px] pt-[3px] sm:p-1">
                <div className="relative w-full h-1/2 mb-[.7px]">
                  <Image
                    loading="eager"
                    width={100}
                    height={120}
                    className="w-full absolute z-1 top-0 h-full"
                    src="/assets/counter/Asset 5.png"
                    alt="down bg"
                  />
                </div>
                <div className="relative w-full h-1/2">
                  <Image
                    loading="eager"
                    width={100}
                    height={120}
                    className="w-full absolute bottom-0 z-1 h-full"
                    src="/assets/counter/Asset 1.png"
                    alt="red background top"
                  />
                </div>
              </div>

              {/* <!-- number --> */}
              <div className="absolute w-full h-full z-[1] overflow-hidden flex justify-center items-center top-0 rounded-lg">
                <span className="counter-text absolute top-[-8.7px] text-[3rem] sm:text-[5rem] sm:top-[-10px] rounded-lg text-white pt-[3px] sm:pt-[5px]">
                  {number}
                </span>
              </div>
              {/* <!-- black line --> */}
              <Image
                loading="eager"
                width={100}
                height={120}
                className="absolute z-[3] h-[2px] bg-[#1a1515] w-full top-[50%] sm:h-[3px]"
                src="/assets/counter/Asset 9.png"
                alt="red background bottom"
              />
              {/* <!-- white line --> */}
              <div className="absolute overflow-hidden w-full h-full top-0">
                <Image
                  loading="eager"
                  width={100}
                  height={120}
                  className="absolute top-[-40px] h-[120px] w-full object-cover z-[1] sm:h-[210px] sm:top-[-70px]"
                  src="/assets/counter/Asset 8.png"
                  alt="two white line to set shadow top"
                />
                <Image
                  loading="eager"
                  width={100}
                  height={120}
                  className="absolute top-[-40px] h-[120px] w-full object-cover z-[1] sm:h-[210px] sm:top-[-70px]"
                  src="/assets/counter/Asset 8.png"
                  alt="two white line to set shadow center"
                />
              </div>
            </div>
          </div>
        </div>
        // </>
      ))}
    </div>
  );
}
