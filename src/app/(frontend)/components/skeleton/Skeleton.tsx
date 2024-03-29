import Image from "next/image";

function PledgeCounterSkeleton() {
  return (
    <div
      role="status"
      className=" h-[265px] animate-pulse flex flex-col w-full  lh-full bg-blue-800"
      style={{ backgroundImage: "url(/assets/spinthewheel/Bg mobile.webp)" }}
    >
      <Image
        width={10}
        height={10}
        className="w-[100%] h-full object-cover"
        src="/assets/skeleton/Pledge counter.webp"
        alt="logo"
      />
    </div>
  );
}
function AchievementSkeleton() {
  return (
    <div
      role="status"
      className=" animate-pulse flex flex-col h-[50vh] md:h-[100vh] pt-0"
    >
      <div className="flex items-center justify-center w-full h-full bg-black">
        {/* <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg> */}
        <Image
          width={10}
          height={10}
          className="w-[100%] h-[100%] object-cover"
          src="/assets/skeleton/3 - Desktop.webp"
          alt="logo"
        />
      </div>
      {/* <!--     <span className="sr-only">Loading...</span> --> */}
    </div>
  );
}
function BannerSkeleton({ src }: { src: string }) {
  return (
    <div
      role="status"
      className=" animate-pulse flex flex-col w-full py-1"
      style={{ backgroundImage: "url(/assets/spinthewheel/Bg mobile.webp)" }}
    >
      <Image
        width={10}
        height={10}
        className="w-[100%] h-[100%] "
        src={src}
        alt="logo"
      />

      {/* <span className="sr-only">Loading...</span> */}
    </div>
  );
}
function MemeSkeleton() {
  return (
    <div
      role="status"
      className=" animate-pulse flex flex-col w-full h-[50vh] md:h-[100vh]"
    >
      <Image
        width={10}
        height={10}
        className="w-[100%] h-[100%] "
        src="/assets/skeleton/Bg2.webp"
        alt="logo"
      />

      {/* <div className=" absolute w-full flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <Image
            width={10}
            height={10}
            className="w-[90%] h-[200px] object-contain "
            src="/assets/skeleton/Image Left Middle.webp"
            alt="logo"
          />
          <Image
            width={10}
            height={10}
            className="w-full h-[200px] object-contain  "
            src="/assets/skeleton/Image left.webp"
            alt="logo"
          />
          <Image
            width={10}
            height={10}
            className="w-[90%] h-[200px] object-contain "
            src="/assets/skeleton/Image Right Middle.webp"
            alt="logo"
          />
        </div>
        <div className="w-1/2 mx-auto flex flex-col items-center gap-0">
          <div className=" flex items-center justify-center">
            <Image
              width={10}
              height={10}
              className="w-1/2 h-[20px] object-contain "
              src="/assets/skeleton/Download Butto.webp"
              alt="logo"
            />
            <Image
              width={10}
              height={10}
              className="w-1/2 h-[20px] object-contain "
              src="/assets/skeleton/Share Button.webp"
              alt="logo"
            />
          </div>
          <Image
            width={10}
            height={10}
            className="w-[90%] h-[30px] object-contain "
            src="/assets/skeleton/Upload Button.webp"
            alt="logo"
          />
        </div>
      </div> */}

      {/* <span className="sr-only">Loading...</span> */}
    </div>
  );
}
function ChoosePMSkeleton() {
  return (
    <div
      role="status"
      className=" animate-pulse flex flex-col  h-[60vh] md:h-[100vh] pt-0"
    >
      <div className="flex items-center justify-center w-full h-full bg-black">
        <Image
          width={10}
          height={10}
          className="w-[100%] h-[100%] object-cover"
          src="/assets/skeleton/Bg1.webp"
          alt="logo"
        />
        <div className="w-1/2 h-1/2 absolute flex flex-col justify-center items-center">
          <Image
            width={10}
            height={10}
            className="w-full h-full object-contain "
            src="/assets/skeleton/Fortune Wheel Whole.webp"
            alt="logo"
          />
        </div>
      </div>
      {/* <!--     <span className="sr-only">Loading...</span> --> */}
    </div>
  );
}

function ThugTalesSkeleton() {
  return (
    <div
      role="status"
      className=" animate-pulse  w-full h-[40vh] md:h-[80vh] flex justify-center items-center "
    >
      <Image
        width={10}
        height={10}
        className="w-[100%] h-[100%] object-cover"
        src="/assets/skeleton/bg.webp"
        alt="logo"
      />

      {/* <Image
        width={10}
        height={10}
        className="w-[70%] absolute rounded-xl"
        src="/assets/skeleton/Ravana1.webp"
        alt="logo"
      /> */}

      {/* <span className="sr-only">Loading...</span> */}
    </div>
  );
}

function MediaCoverageSkeleton() {
  return (
    <div
      role="status"
      className=" animate-pulse flex flex-col justify-center items-center w-full h-[50vh] md:h-[100vh] relative"
    >
      <Image
        width={10}
        height={10}
        className="w-[100%] h-[100%] absolute bottom-0"
        src="/assets/skeleton/Bg1.webp"
        alt="logo"
      />
      <Image
        width={30}
        height={10}
        className="w-[100%] h-[150px] md:h-[300px] absolute bottom-0"
        src="/assets/skeleton/Bg Footer.webp"
        alt="logo"
      />
      {/* <Image
        width={10}
        height={10}
        className="w-1/2 absolute top-10"
        src="/assets/skeleton/1.webp"
        alt="logo"
      /> */}
      {/* <span className="sr-only">Loading...</span> */}
    </div>
  );
}

// function FooterSkeleton() {
//   return (
//     <div role="status" className=" animate-pulse flex flex-col w-full h-fit">

//       {/* <span className="sr-only">Loading...</span> */}
//     </div>
//   );
// }

export {
  PledgeCounterSkeleton,
  AchievementSkeleton,
  BannerSkeleton,
  ChoosePMSkeleton,
  MemeSkeleton,
  ThugTalesSkeleton,
  MediaCoverageSkeleton,
  // FooterSkeleton,
};
