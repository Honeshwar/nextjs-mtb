type QuizContextType = {
  screen: number;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  scored: number;
  setScored: React.Dispatch<React.SetStateAction<number>>;
  certificateUrl: string;
  setCertificateUrl: React.Dispatch<React.SetStateAction<string>>;
};

// create context
import { createContext, useContext, useState } from "react";
const context = createContext({} as any);

// provide  context
function QuizContextProvider({ children }: { children: React.ReactNode }) {
  const [screen, setScreen] = useState(1);
  const [scored, setScored] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [certificateUrl, setCertificateUrl] = useState("");

  return (
    <context.Provider
      value={{
        screen,
        setScreen,
        scored,
        setScored,
        certificateUrl,
        setCertificateUrl,
        totalQuestion,
        setTotalQuestion,
      }}
    >
      {children}
    </context.Provider>
  );
}

// consume context
function useQuizContext() {
  return useContext(context);
}

export { QuizContextProvider, useQuizContext };
