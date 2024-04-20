import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";
async function generateBase64(src: string) {
  //src realtive to public
  const buffer = await fs.readFile(src);
  const { base64 } = await getPlaiceholder(buffer);

  return base64;
}

export default generateBase64;
