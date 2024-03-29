"use client";
type AppContextType = {
  screen: number;
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  scored: number;
  setScored: React.Dispatch<React.SetStateAction<number>>;
  certificateUrl: string;
  setCertificateUrl: React.Dispatch<React.SetStateAction<string>>;
};

// create context
import { createContext, useContext, useEffect, useState } from "react";
const context = createContext({} as any);

// provide  context
function AppContextProvider({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    if (window.screen.width <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0";
    document.head.prepend(link);
  }, []);

  return (
    <context.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </context.Provider>
  );
}

// consume context
function useAppContext() {
  return useContext(context);
}

export { AppContextProvider, useAppContext };
