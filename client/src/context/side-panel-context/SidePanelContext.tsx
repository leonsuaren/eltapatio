import { type ReactNode, createContext, useContext } from "react";

type SidePanelState = {
  openCloseSidePanel: boolean;
};

type SidePanelContextValue = SidePanelState & {
  onOpenSidePanel: () => void;
  onCloseSidePanel: () => void;
};

const SidePanelContext = createContext<SidePanelContextValue | null>(null);

export function useSidePanelContext() {
  const sidePanelCtx = useContext(SidePanelContext);

  if (sidePanelCtx === null) {
    throw new Error("SidePanel Context is null");
  }
  return sidePanelCtx;
}

type SidePanelConstextProviderProps = {
  children: ReactNode;
};

export default function SidePanelContextProvider({
  children,
}: SidePanelConstextProviderProps) {
  // const [sidePanelAction, setSidePanelAction] = useState<SidePanelState>({
  //   openCloseSidePanel: false
  // });
  const ctx: SidePanelContextValue = {
    openCloseSidePanel: true,
    onOpenSidePanel() {
      // setSidePanelAction((prevState) => {})
    },
    onCloseSidePanel() {},
  };

  return (
    <SidePanelContext.Provider value={ctx}>
      {children}
    </SidePanelContext.Provider>
  );
}
