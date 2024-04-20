import { getPlaiceholder } from "plaiceholder";
import fs from "node:fs/promises";
import WrapperCounter from "./WrapperCounter";
export default async function Counter({ title }: { title: string }) {
  const buffer = await fs.readFile("./public/img/sb.webp");
  const { base64 } = await getPlaiceholder(buffer);
  console.log("Counter base64", base64);
  let response: any, total_count: any, countInArr: any;
  try {
    response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/user/get_count");
    const responseData = await response.json();
    console.log("counter response", responseData);

    total_count = responseData.user_count; //number return
    countInArr = total_count.toString().split("");
    console.log(total_count, countInArr);
  } catch (error) {
    countInArr = [3, 5, 6, 3, 2, 5, 6];
    console.log("error while fetchng get count", error); //server show error
  }

  return <WrapperCounter {...{ base64, countInArr, title }} />;
}
