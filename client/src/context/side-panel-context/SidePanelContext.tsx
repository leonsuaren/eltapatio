import { type ReactNode, createContext, useState } from "react";

type SidePanelContextValue = {
  closeOpenSidePanel: () => void;
  isSidePanelOpen: boolean;
}

export const SidePanelContext = createContext<SidePanelContextValue>({
  closeOpenSidePanel: () => {},
  isSidePanelOpen: false
});

type SidePanelContextProviderProps = {
  children: ReactNode;
};

export default function SidePanelContextProvider({
  children,
}: SidePanelContextProviderProps) {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const closeOpenSidePanel = () => setIsSidePanelOpen(s => !s);

  return (
    <SidePanelContext.Provider value={{
      closeOpenSidePanel, isSidePanelOpen
    }}>
      {children}
    </SidePanelContext.Provider>
  );
}
