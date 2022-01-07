import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import classes from "./App.module.scss";
import Main from "./components/Main";
import VinylContainer from "./components/Vinyl-Container";
import { artistsDatabase } from "./database";
import Footer from "./components/Footer";
import About from "./components/About";
import Blog from "./components/Blog";
import Albums from "./components/Albums";
import Artists from "./components/Artists";
import Contact from "./components/Contact";

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
                <VinylContainer artistsDatabase={artistsDatabase} />
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
                <VinylContainer artistsDatabase={artistsDatabase} />
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
