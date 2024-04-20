import { getPlaiceholder } from "plaiceholder";
import ImageSlider from "./ImageSlider";
import fs from "node:fs/promises";
export default async function Sanathan() {
  const imgUrl = [
    ["/assets/sanathan/desktop/s1.webp", "/assets/sanathan/mobile/s1.webp"],
    ["/assets/sanathan/desktop/s2.webp", "/assets/sanathan/mobile/s2.webp"],
    ["/assets/sanathan/desktop/s3.webp", "/assets/sanathan/mobile/s3.webp"],
    ["/assets/sanathan/desktop/s6.webp", "/assets/sanathan/mobile/s6.webp"],
    ["/assets/sanathan/desktop/s5.webp", "/assets/sanathan/mobile/s5.webp"],
  ];

  for (const key in imgUrl) {
    const buffer = await fs.readFile("./public" + imgUrl[key][0]);
    const { base64 } = await getPlaiceholder(buffer);
    imgUrl[key][2] = base64;
  }
  return (
    <div className="container-fluid mt-4 " style={{ position: "relative" }}>
      <div id="santhan" style={{ backgroundColor: "black" }}>
        <ImageSlider imgUrl={imgUrl} />
      </div>
    </div>
  );
}

/**
 <li className="splide__slide">
                    <img className="w-100" loading="lazy" src="img/desktop/s2.webp"
                        srcset="img/mobile/s2.webp 600w, img/desktop/s2.webp 1600w"
                        sizes="(min-width: 768px) 768px,50vw" alt="vikshit_bharat">
                </li>
                <li className="splide__slide">
                    <img className="w-100" loading="lazy" src="img/desktop/s3.webp"
                        srcset="img/mobile/s3.webp 600w, img/desktop/s3.webp 1600w"
                        sizes="(min-width: 768px) 768px,50vw" alt="vikshit_bharat">
                </li>
                <li className="splide__slide">
                    <img className="w-100" loading="lazy" src="img/desktop/s4.webp"
                        srcset="img/mobile/s6.webp 600w, img/desktop/s4.webp 1600w"
                        sizes="(min-width: 768px) 768px,50vw" alt="vikshit_bharat">
                </li>
                <li className="splide__slide">
                    <img className="w-100" loading="lazy" src="img/desktop/s5.webp"
                        srcset="img/mobile/s5.webp 600w, img/desktop/s5.webp 1600w"
                        sizes="(min-width: 768px) 768px,50vw" alt="vikshit_bharat">
                </li> */
