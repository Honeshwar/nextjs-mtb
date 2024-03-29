import Image from "next/image";

export default function ThugVideo({
  index,
  video,
  playThugVideo,
  playingThugVideo,
  video_share_count,
  whatsapp_link,
  facebook_link,
  twitter_link,
}: {
  index: number;
  video: any;
  playThugVideo: Function;
  playingThugVideo: any;
  video_share_count: any;
  whatsapp_link: string;
  facebook_link: string;
  twitter_link: string;
}) {
  return (
    <div className="h-full relative flex justify-center items-center">
      <video
        preload="none"
        id={`thug-${index + 1}`}
        className="w-[90vw] sm:w-[60vw] max-h-fit  rounded-[15px] sm:rounded-[30px] mx-auto"
        data-url=""
        poster={video.poster}
        onClick={() =>
          playThugVideo(
            `img-${index + 1}`,
            `thug-${index + 1}`,
            video["data-url"],
            `thug-shares-${index + 1}`
          )
        }
      >
        <source src={video.src} type="video/mp4" />
        Your browser doesn&apos;t support video
      </video>
      <Image
        id={`img-${index + 1}`}
        width={100}
        height={100}
        onClick={() =>
          playThugVideo(
            `img-${index + 1}`,
            `thug-${index + 1}`,
            video["data-url"],
            `thug-shares-${index + 1}`
          )
        }
        className="w-[5vw] h-[5vw] min-h-[30px]  min-w-[30px]  max-h-[70px]  max-w-[70px] absolute cursor-pointer"
        src="/assets/thug tales/Video icon.webp"
        alt="video icon"
      />
      <div
        id={`thug-shares-${index + 1}`}
        className=" absolute right-[7.9vw] top-[4vw] sm:right-[21.9vw] sm:top-[3vw] text-white flex flex-col justify-center items-center gap-[2vw] sm:gap-5"
      >
        {playingThugVideo && (
          <>
            <a
              onClick={video_share_count}
              className="flex flex-col justify-center items-center gap-0 sm:gap-2"
              href={whatsapp_link}
              target="_blank"
              style={{ color: "black" }}
            >
              <Image
                width={50}
                height={50}
                className="w-fit h-[6vw] sm:h-[4vw] sm:max-h-[50px]"
                src="/assets/svg/whatsapp.svg"
                alt="whatsapp logo"
              />
            </a>
            <a
              onClick={video_share_count}
              className="flex flex-col justify-center items-center gap-0 sm:gap-2"
              href={twitter_link}
              style={{ color: "black" }}
              target="_blank"
            >
              <Image
                width={50}
                height={50}
                className="w-fit h-[6vw] sm:h-[4vw] sm:max-h-[50px]"
                src="/assets/svg/twt-x-logo.svg"
                alt="twitter logo"
                style={{
                  backgroundColor: "black",
                  padding: "3px",
                  borderRadius: "50%",
                }}
              />
            </a>
            <a
              onClick={video_share_count}
              className="flex flex-col justify-center items-center gap-0 sm:gap-2"
              href={facebook_link}
              target="_blank"
              style={{ color: "black" }}
            >
              <Image
                width={50}
                height={50}
                className="w-fit h-[6vw] sm:h-[4vw] sm:max-h-[50px]"
                src="/assets/svg/fb.svg"
                alt="facebook logo"
              />
            </a>
          </>
        )}
      </div>
    </div>
  );
}
