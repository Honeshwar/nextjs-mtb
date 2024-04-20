import { Metadata } from "next";
import data from "@/app/utils/data";
import ClientPage from "@/app/components/Quiz/ClientPage";
import "@/app/styles/englishQuiz.css";
export const metadata: Metadata = data.en.Metadata;

export default function page() {
  return <ClientPage lang="en" />;
}
