import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import classes from "./App.module.scss";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className={classes.appContainer}>
      <div className={classes.contentWrap}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                {/* <VinylContainer artistsDatabase={artistsDatabase} /> */}
              </>
            }
          />
          <Route path="/artists" element={<Artists />} />
          <Route path="/blog" element={<Blog />} />
          <Route
            path="/albums"
            element={
              <>
                <Albums />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
