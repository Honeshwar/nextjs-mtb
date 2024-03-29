// create context
import { createContext, useContext, useState } from "react";
const context = createContext({} as any);

// provide  context
function CTMContextProvider({ children }: { children: React.ReactNode }) {
  const [screen, setScreen] = useState(1);
  const [party_name, setParty_name] = useState("");

  return (
    <context.Provider
      value={{
        screen,
        setScreen,
        party_name,
        setParty_name,
      }}
    >
      {children}
    </context.Provider>
  );
}

// consume context
function useCTMContext() {
  return useContext(context);
}

export { CTMContextProvider, useCTMContext };
