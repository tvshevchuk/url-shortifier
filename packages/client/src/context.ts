import React, { useContext } from "react";
import { createAppStore } from "./app-store";

const appStore = createAppStore();

const storeContext = React.createContext(appStore);

export const useStore = () => useContext(storeContext);
