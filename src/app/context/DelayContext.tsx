"use client";
import { createContext, useContext, useEffect, useState } from "react";

const context = createContext({} as { show: boolean });

function DelayContextProvider({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);
  return <context.Provider value={{ show }}>{children}</context.Provider>;
}

function useDelayContext() {
  return useContext(context);
}

export { DelayContextProvider, useDelayContext };
