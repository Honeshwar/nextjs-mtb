import dynamic from "next/dynamic";
import Image from "next/image";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
const LazyFooterWrapperDescendant = dynamic(
  () => import("./FooterDescendant"),
  {
    ssr: false,
  }
);
export default async function Footer({ lang }: { lang: string }) {
  //footer background image
  const buffer = await fs.readFile("./public/img/footer_d1.jpg");

  const { base64 } = await getPlaiceholder(buffer);
  return <LazyFooterWrapperDescendant lang={lang} base64={base64} />;
}
