import fs from "fs";
import { createCanvas, loadImage, registerFont } from "canvas";

// Function to generate certificate
export default async function generateCertificate(
  userName: string,
  mobile: string,
  language: string
) {
  // Load certificate template
  const TEMPLATE_PATH = `./public/${language}.jpg`;

  // Load font for user's name
  // registerFont(
  //   `./public/fonts/${
  //     language === "hi" ? "dangeragendaDEMO.otf" : "dangeragendaDEMO.otf"
  //   }`,
  //   {
  //     family: language === "hi" ? "yatra" : "dangerous",
  //   }
  // );
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext("2d");

  // Load certificate template image
  const template = await loadImage(TEMPLATE_PATH);
  ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

  // Draw user's name
  ctx.font = `30px ${language === "hi" ? "yatra" : "dangerous"}`; // Use appropriate font size and style
  ctx.fillStyle = "lightgray"; // Use appropriate text color
  ctx.textAlign = "center";
  ctx.fillText(userName, canvas.width / 2, 180, 400); // Position text appropriately

  // Save generated certificate
  const certificatePath = `./public/certificates/${mobile}.png`; // Generate unique file name
  const out = fs.createWriteStream(certificatePath);
  const stream = canvas.createPNGStream();
  stream.pipe(out);
  // out.on("finish", () =>
  //   console.log(`Certificate generated: ${certificatePath}`)
  // );

  const P = new Promise((resolve, reject) => {
    out.on("finish", () => {
      console.log(`Certificate generated: ${certificatePath}`);
      resolve(certificatePath);
    });
  });
  return P;
  // return certificatePath;
}
