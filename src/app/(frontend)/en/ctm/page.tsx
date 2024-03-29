"use client";

import CTMPage from "../../components/ctm/CTMPage";
import { CTMContextProvider } from "../../context/ctmContext";

export default function CTM_Wrapper() {
  return (
    <CTMContextProvider>
      <CTMPage lang="en" />
    </CTMContextProvider>
  );
}
