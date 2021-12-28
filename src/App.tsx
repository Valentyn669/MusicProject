import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import "./App.module.scss";
import Main from "./components/Main";

const App = () => {
  const elRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    elRef.current!.scrollIntoView();
  };
  return (
    <>
      <Navbar toElement={executeScroll} />
      <Main />
      <div ref={elRef} style={{ height: "1000px" }}>
        element
      </div>
    </>
  );
};

export default App;
