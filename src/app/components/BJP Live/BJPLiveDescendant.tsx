"use client";
import {
  DelayContextProvider,
  useDelayContext,
} from "@/app/context/DelayContext";

export default function BJPLiveWrapperDescendant({
  playBackId,
  title,
}: {
  playBackId: string;
  title: string;
}) {
  return (
    <DelayContextProvider>
      <BJPLiveDescendant playBackId={playBackId} title={title} />
    </DelayContextProvider>
  );
}

function BJPLiveDescendant({
  playBackId,
  title,
}: {
  playBackId: string;
  title: string;
}) {
  const { show } = useDelayContext();
  return (
    <>
      {show && (
        <>
          <br />
          <h3
            className="head1 pb-1 pb-md-4 mt-4"
            style={{
              position: "relative",
              zIndex: "2",
            }}
          >
            {title}
          </h3>
          <section
            id="bjp-live"
            className="bjplivebannerimg d-flex align-items-center justify-content-center "
            style={{
              // height: "70vh",
              background:
                "url(https://www.bjp.org/themes/bjp/images/bjplivebackground.jpeg)  50% 50% no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* <Image
                  src="https://www.bjp.org/themes/bjp/images/bjplivebackground.jpeg"
                  alt="BJP live background"
                  width={1920}
                  height={1080}
                  style={{ objectFit: "cover", height: "70vh", position: "absolute" }}
                  className="w-100"
                ></Image> */}
            <div className="container ">
              <div className="row">
                <div className="col-lg-8 offset-lg-2 offset-md-1 space title col-sm-12 col-md-10 col-12">
                  <div id="live_video">
                    {
                      <iframe
                        id="bjp_live_iframe"
                        // className="py-3"
                        src={`https://www.youtube-nocookie.com/embed/${playBackId}?rel=0&amp;showinfo=0`}
                        width="100%"
                        height="450"
                        frameBorder="0"
                      ></iframe>
                    }
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
