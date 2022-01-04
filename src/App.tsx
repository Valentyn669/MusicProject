import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import "./App.module.scss";
import Main from "./components/Main";
import VinylContainer from "./components/Vinyl-Container";
import { artistsDatabase } from "./database";
import Footer from "./components/Footer";
const App = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const elRef1 = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    elRef.current!.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar toElement={executeScroll} />
      <Main />
      <VinylContainer artistsDatabase={artistsDatabase} />
      <div ref={elRef} style={{ height: "140px" }}>
        element
      </div>
      <div ref={elRef1} style={{ height: "140px" }}>
        element
      </div>
      <Footer />
    </>
  );
};

export default App;
