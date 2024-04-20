// import "../hindiPage.css";
import "../styles/englishPage.css";
import "../styles/swiperSlider.css";

import { Metadata } from "next"; // import for types
import data from "../utils/data";
import Header from "../components/Header/Header";
import Counter from "../components/Counter/Counter";
import dynamic from "next/dynamic";
import CampaignAnthem from "../components/Campaign Anthem/CampaignAnthem";
import TransformBharat from "../components/Transforming Bharat/TransformBharat";
import QuizBanner from "../components/Banner/WrapperQuizBanner";
import TowardDeplopedBharat from "../components/Towards A Developed Bharat/TowardDeplopedBharat";
import Footer from "../components/Footer/Footer";
import BJPLive from "../components/BJP Live/BJPLive";
import VideoSlider from "../components/Once Again Modi Sarkar KyunKi/videoSlider";
import ImageSlider from "../components/Sanathan/ImageSlider";
import Sanathan from "../components/Sanathan/Sanathan";
import Agenda from "../components/Agenda/Agenda";
import MediaCoverage from "../components/Media Coverage/MediaCoverage";
export const metadata: Metadata = data.en.Metadata; //naming export key=metadata

const LazyCounter = dynamic(() => import("../components/Counter/Counter"), {
  ssr: true,
});
const LazyVideoSlider = dynamic(
  () => import("../components/Once Again Modi Sarkar KyunKi/videoSlider"),
  {
    ssr: false,
  }
);
const LazyBJPLive = dynamic(() => import("../components/BJP Live/BJPLive"), {
  ssr: true,
});
const LazyCampaignAnthem = dynamic(
  () => import("../components/Campaign Anthem/CampaignAnthem"),
  {
    ssr: false,
  }
);
const LazyTransformBharat = dynamic(
  () => import("../components/Transforming Bharat/TransformBharat"),
  {
    ssr: false,
  }
);
const LazyQuizBanner = dynamic(
  () => import("../components/Banner/WrapperQuizBanner"),
  {
    ssr: true,
  }
);
const LazyTowardDeplopedBharat = dynamic(
  () => import("../components/Towards A Developed Bharat/TowardDeplopedBharat"),
  {
    ssr: true,
  }
);
const LazyFooter = dynamic(() => import("../components/Footer/Footer"), {
  ssr: true,
});
export default function page() {
  return (
    <div
      id="english-page"
      className="body-main-site"
      style={{ position: "relative" }}
    >
      <Header lang="en" />
      <LazyCounter title="Pledges Taken" />
      <LazyVideoSlider title="Phir Ek Baar Modi Sarkar Kyunki" lang="en" />
      <LazyBJPLive title="BJP Live" lang="en" />
      <LazyCampaignAnthem
        title="Campaign Anthem"
        poster="/assets/anthem/thumbnail-english.webp"
        src="/assets/anthem/anthem_video.mp4"
      />
      <LazyTransformBharat title="Transforming Bharat" lang="en" />
      <LazyQuizBanner lang="en" />
      <LazyTowardDeplopedBharat title="Towards a Developed Bharat" lang="en" />

      {/* <Sanathan />
      <Agenda />
      <MediaCoverage /> */}
      <LazyFooter lang="en" />
    </div>
  );
}
