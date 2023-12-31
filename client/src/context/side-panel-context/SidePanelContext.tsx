import { type ReactNode, createContext, useState } from "react";

// type SidePanelState = {
//   openCloseSidePanel: boolean;
// };

// type SidePanelContextValue = SidePanelState & {
//   onOpenSidePanel: () => void;
//   onCloseSidePanel: () => void;
// };

type SidePanelContextValue = {
  openSidePanel(): void;
  closeSidePanel: () => void;
  isSidePanelOpen: boolean;
}

// const SidePanelContext = createContext<SidePanelContextValue | null>(null);
export const SidePanelContext = createContext<SidePanelContextValue>({
  openSidePanel: () => {},
  closeSidePanel: () => {},
  isSidePanelOpen: false
});

// export function useSidePanelContext() {
//   const sidePanelCtx = useContext(SidePanelContext);

//   if (sidePanelCtx === null) {
//     throw new Error("SidePanel Context is null");
//   }
//   return sidePanelCtx;
// }

type SidePanelConstextProviderProps = {
  children: ReactNode;
};

export default function SidePanelContextProvider({
  children,
}: SidePanelConstextProviderProps) {
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const openSidePanel = () => setIsSidePanelOpen(true);

  const closeSidePanel = () => setIsSidePanelOpen(false);

  return (
    <SidePanelContext.Provider value={{
      openSidePanel, closeSidePanel, isSidePanelOpen
    }}>
      {children}
    </SidePanelContext.Provider>
  );
}
