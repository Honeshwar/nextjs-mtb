"use client";
// import { useAppContext } from "../../context/appContext";
import Header from "../Header";
import PledgeCounter from "../PledgeCounter";
import Achievement from "../Achievement";
import Banner from "../Banner";
import SpinTheWheel from "../SpinTheWheel";
import MemeBank from "../MemeBank";
import ThugTales from "../ThugTales";
import MediaCoverage from "../MediaCoverage";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const LazyPledgeCounter = dynamic(() => import("../PledgeCounter"));
const LazyAchievement = dynamic(() => import("../Achievement"));
const LazyBanner = dynamic(() => import("../Banner"));
const LazySpinTheWheel = dynamic(() => import("../SpinTheWheel"));
const LazyMemeBank = dynamic(() => import("../MemeBank"));
const LazyThugTales = dynamic(() => import("../ThugTales"));
const LazyMediaCoverage = dynamic(() => import("../MediaCoverage"));
export default function EnglishPage() {
  // const { isMobile } = useAppContext();
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 3000);
  }, []);
  return (
    <>
      <Header lang="en" />
      {delay && (
        <>
          <LazyPledgeCounter lang="en" />
          <LazyAchievement title="Our Achievements" lang="en" />
          <LazyBanner section_name="ctm" lang="en" />
          <LazySpinTheWheel lang="en" />
          <LazyBanner section_name="quiz" lang="en" />
          <LazyMemeBank lang="en" />
          <LazyThugTales title="Our ThugTales" lang="en" />
          <LazyMediaCoverage title="Media Coverage" lang="en" />
        </>
      )}
    </>
  );
}
