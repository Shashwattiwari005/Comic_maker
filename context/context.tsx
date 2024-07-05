import { createContext, useContext, useState } from "react";

const AppContext = createContext({
  title: "",
  setTitle: (title: string) => {},
  negative: "",
  setNegative: (negative: string) => {},
  learning: "",
  setLearning: (learning: string) => {},
});

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [title, setTitle] = useState("");
  const [negative, setNegative] = useState("");
  const [learning, setLearning] = useState("");

  return (
    <AppContext.Provider
      value={{ title, setTitle, negative, setNegative, learning, setLearning }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppContextProvider };
