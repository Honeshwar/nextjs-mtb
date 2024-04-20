import "./hindiPage.css"; //nextjs add all styles in page.css file , if page.css file include any styles, all new style like this boostrap style below add top of the page.css so that it can overide boostrap style
import "./styles/swiperSlider.css";
import { Metadata } from "next"; // import for types
import data from "./utils/data";
import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import dynamic from "next/dynamic";
import CampaignAnthem from "./components/Campaign Anthem/CampaignAnthem";
import TransformBharat from "./components/Transforming Bharat/TransformBharat";
import QuizBanner from "./components/Banner/WrapperQuizBanner";
import TowardDeplopedBharat from "./components/Towards A Developed Bharat/TowardDeplopedBharat";
import Footer from "./components/Footer/Footer";
import BJPLive from "./components/BJP Live/BJPLive";
import VideoSlider from "./components/Once Again Modi Sarkar KyunKi/videoSlider";
import ImageSlider from "./components/Sanathan/ImageSlider";
import Sanathan from "./components/Sanathan/Sanathan";
import Agenda from "./components/Agenda/Agenda";
import MediaCoverage from "./components/Media Coverage/MediaCoverage";
export const metadata: Metadata = data.hi.Metadata; //naming export key=metadata

const LazyCounter = dynamic(() => import("./components/Counter/Counter"), {
  ssr: true,
});
const LazyVideoSlider = dynamic(
  () => import("./components/Once Again Modi Sarkar KyunKi/videoSlider"),
  {
    ssr: false,
  }
);
const LazyBJPLive = dynamic(() => import("./components/BJP Live/BJPLive"), {
  ssr: true,
});
const LazyCampaignAnthem = dynamic(
  () => import("./components/Campaign Anthem/CampaignAnthem"),
  {
    ssr: false,
  }
);
const LazyTransformBharat = dynamic(
  () => import("./components/Transforming Bharat/TransformBharat"),
  {
    ssr: false,
  }
);
const LazyQuizBanner = dynamic(
  () => import("./components/Banner/WrapperQuizBanner"),
  {
    ssr: true,
  }
);
const LazyTowardDeplopedBharat = dynamic(
  () => import("./components/Towards A Developed Bharat/TowardDeplopedBharat"),
  {
    ssr: false,
  }
);
const LazyFooter = dynamic(() => import("./components/Footer/Footer"), {
  ssr: true,
});
export default function Home() {
  return (
    <div className="body-main-site" style={{ position: "relative" }}>
      <Header lang="hi" />
      <LazyCounter title="संकल्प लिए जा चुके हैं" />
      <LazyVideoSlider title="फिर एक बार मोदी सरकार क्योंकि" lang="hi" />
      <LazyBJPLive title="भाजपा लाइव" lang="hi" />
      <LazyCampaignAnthem
        title="कैंपेन एंथम"
        poster="/assets/anthem/thumbnail-hindi.webp"
        src="/assets/anthem/anthem_video.mp4"
      />
      <LazyTransformBharat title="नए भारत का नया जोश" lang="hi" />
      <LazyQuizBanner lang="hi" />
      <LazyTowardDeplopedBharat title="विकसित भारत की ओर" lang="hi" />
      {/* <Sanathan />
      <Agenda />
      <MediaCoverage /> */}
      <LazyFooter lang="hi" />
    </div>
  );
}
