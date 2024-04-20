"use client";
import {
  DelayContextProvider,
  useDelayContext,
} from "@/app/context/DelayContext";

export default function CampaignAnthem({
  title,
  poster,
  src,
}: {
  title: string;
  poster: string;
  src: string;
}) {
  return (
    <DelayContextProvider>
      <CampaignAnthemDescendant title={title} poster={poster} src={src} />
    </DelayContextProvider>
  );
}

function CampaignAnthemDescendant({
  title,
  poster,
  src,
}: {
  title: string;
  poster: string;
  src: string;
}) {
  const kaamdaar = () => {};
  const { show } = useDelayContext();
  return (
    <>
      {show && (
        <div className="container-fluid mt-4" id="kaamdaar">
          <h3 className="head mb-4">{title}</h3>
          <div className="videos px-0">
            {/* <svg id="kaamdhar_svg" onClick={kaamdaar} className="t2 d-none d-md-none"
            xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
            <path
                d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
        </svg> */}
            {/* <!-- onclick="kaamdaar()" --> */}
            <video
              id="kaamdhar_video"
              // loading="lazy"
              poster={poster}
              className="w-100"
              width="100%"
              preload="none"
              height="100%"
              controls
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </>
  );
}