"use client";
import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Achievement from "./components/Achievement";
import Header from "./components/Header";
import MediaCoverage from "./components/MediaCoverage";
import MemeBank from "./components/MemeBank";
import PledgeCounter from "./components/PledgeCounter";
import SpinTheWheel from "./components/SpinTheWheel";
import ThugTales from "./components/ThugTales";

import dynamic from "next/dynamic";

const LazyPledgeCounter = dynamic(() => import("./components/PledgeCounter"));
const LazyAchievement = dynamic(() => import("./components/Achievement"));
const LazyBanner = dynamic(() => import("./components/Banner"));
const LazySpinTheWheel = dynamic(() => import("./components/SpinTheWheel"));
const LazyMemeBank = dynamic(() => import("./components/MemeBank"));
const LazyThugTales = dynamic(() => import("./components/ThugTales"));
const LazyMediaCoverage = dynamic(() => import("./components/MediaCoverage"));
export default function HindiPage() {
  const [delay, setDelay] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDelay(true);
    }, 3000);
  }, []);
  return (
    <>
      <Header lang="hi" />
      {delay && (
        <>
          <LazyPledgeCounter lang="hi" />
          <LazyAchievement title="हमारी उपलब्धियाँ" lang="hi" />
          <LazyBanner section_name="ctm" lang="hi" />
          <LazySpinTheWheel lang="hi" />
          <LazyBanner section_name="quiz" lang="hi" />
          <LazyMemeBank lang="hi" />
          <LazyThugTales title="हमारी ठग की कहानियाँ" lang="hi" />
          <LazyMediaCoverage title="मीडिया कवरेज" lang="hi" />
        </>
      )}
    </>
  );
}
