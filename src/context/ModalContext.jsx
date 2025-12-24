import { createContext, useState } from "react";

const ModalContext = createContext();
const ModalProvider = (prop) => {
      const [openModal, setModal] = useState(false);
      const states = { openModal, setModal };
      return <ModalContext.Provider value={states}>{prop.children}</ModalContext.Provider>;
};

export { ModalProvider, ModalContext };
