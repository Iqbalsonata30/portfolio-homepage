import { useEffect } from "react";
import HomePage from "./pages/Homepage";

function App() {
  useEffect(() => {
    document.title = "Iqbal Sonata ~ Personal Website";
  }, []);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
