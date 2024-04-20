"use client";
import {
  DelayContextProvider,
  useDelayContext,
} from "@/app/context/DelayContext";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function WrapperCounter({
  base64,
  // total_count,
  countInArr,
  title,
}: {
  base64: string;
  // total_count: string;
  countInArr: string[];
  title: string;
}) {
  const [isMobile, setIsMobile] = useState<number | boolean>(-1);

  useEffect(() => {
    if (window.screen.width > 600) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, []);

  return (
    <DelayContextProvider>
      <WrapperCounter2 {...{ base64, countInArr, title, isMobile }} />
    </DelayContextProvider>
  );
}

function WrapperCounter2({
  base64,
  isMobile,
  countInArr,
  title,
}: {
  base64: string;
  isMobile: number | boolean;
  countInArr: string[];
  title: string;
}) {
  const { show } = useDelayContext();
  return (
    <>
      {show && (
        <div className="container-fluid" style={{ position: "relative" }}>
          {
            <Image
              width={375}
              height={349}
              className="w-100"
              src={
                isMobile !== -1 && isMobile ? "/img/sb.webp" : "/img/sbd.webp"
              }
              //   srcSet={"img/sb.webp 600w, img/sbd.webp 1600w"}
              sizes="(max-width: 768px) 480px,960px"
              alt="Counter Background Image"
              style={{ height: "349px" }}
              placeholder="blur"
              blurDataURL={base64}
            />
          }
          <div
            className="a"
            style={{ position: "absolute", top: "30%", width: "100%" }}
          >
            <center>
              <div className=" px-2 pt-3  total_number_d  mt-5">
                <center>
                  <div
                    id="counterr"
                    className=" mt-2"
                    style={{
                      backgroundColor: "white",
                      color: "green",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "14px",
                      padding: "10px 0 5px",
                    }}
                  >
                    {countInArr?.map((count, index) => (
                      <React.Fragment key={index}>
                        {index === 0 ? (
                          <p className="total_number">{count}</p>
                        ) : (
                          <>
                            <p className="total_number_line">|</p>
                            <p className="total_number">{count}</p>
                          </>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </center>
                <p className="total_number_bottom pb-2">{title}</p>
              </div>
            </center>
          </div>
        </div>
      )}
    </>
  );
}
