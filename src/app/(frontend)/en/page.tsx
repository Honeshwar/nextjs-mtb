import { Metadata } from "next";
import DATA from "../utils/constant";
import EnglishPage from "../components/english/EnglishPage";
export const metadata: Metadata = DATA.en.Metadata;

export default function EnglishPageWrapper() {
  return <EnglishPage />;
}
