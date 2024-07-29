import { type ReactNode, createContext, useState } from "react";

type ModalContextValue = {
  closeOpenModal: () => void;
  isModalOpen: boolean;
};

export const ModalContext = createContext<ModalContextValue>({
  closeOpenModal: () => {},
  isModalOpen: true,
});

type ModalContextProviderProps = {
  children: ReactNode;
};

export default function ModalcontextProvider({
  children,
}: ModalContextProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const closeOpenModal = () => setIsModalOpen((s) => !s);

  return (
    <ModalContext.Provider value={{ closeOpenModal, isModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
