// "use server";
// import fs from "node:fs/promises";
// import { getPlaiceholder } from "plaiceholder";

// async function getPlaiceholderImage(url: string) {
//   try {
//     const file = await fs.readFile(url);

//     const { base64 } = await getPlaiceholder(file);

//     console.log(base64);
//     return base64;
//   } catch (err) {
//     err;
//   }
// }

// export default getPlaiceholderImage;
