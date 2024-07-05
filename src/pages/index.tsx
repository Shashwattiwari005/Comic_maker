import Image from "next/image";
import { Inter } from "next/font/google";
import ScriptGenerator from "../../ComicGenerator/scriptGenerator";
import { AppContextProvider } from "../../context/context";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AppContextProvider>
        <h1>Homepage</h1>
        <ScriptGenerator />
      </AppContextProvider>
    </div>
  );
}
