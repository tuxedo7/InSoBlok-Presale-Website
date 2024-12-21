import { useState } from "react";
import { ModalContext } from "./ModalContext";

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, modalHandle }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
