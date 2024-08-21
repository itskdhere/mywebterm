import decor from "./lib/consoleDecor";
import WelcomeMsg from "./components/WelcomeMsg";
import Terminal from "./components/Terminal";

import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    decor();
  }, []);

  return (
    <>
      <WelcomeMsg />
      <Terminal />
    </>
  );
}

export default App;
