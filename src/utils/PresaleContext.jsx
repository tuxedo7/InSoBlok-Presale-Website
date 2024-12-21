import { createContext, useContext } from "react";

export const PresaleContext = createContext();

export const usePresaleData = () => useContext(PresaleContext);
