import Header from "./components/Header/Header";
import Hero from "./components/Hero/hero";
import { useEffect } from "react";
import smoothScroll from "./animations/smoothScroll";
import { splitText } from "./animations/textAnimation";
smoothScroll();

function App() {
  useEffect(() => splitText());
  return (
    <div className="wrap-container">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
