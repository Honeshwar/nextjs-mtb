import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
import WrapperNavbar from "./WrapperNavbar";

export default async function Navbar({ lang }: { lang: string }) {
  const buffer = await fs.readFile("./public/img/hinlogo (1)1.png"); // UTF-8 representation convert
  const { base64 } = await getPlaiceholder(buffer); // {size:10}, 10X10px
  console.log("navbar base64", base64);
  return <WrapperNavbar base64={base64} lang={lang} />;
}
