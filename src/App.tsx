import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import classes from "./App.module.scss";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import About from "./pages/About";
import Albums from "./pages/Albums";
import News from "./pages/News";
import Contact from "./pages/Contact";
import AlbumSingle from "./pages/AlbumSingle";
import ScrollToTop from "./shared/ScrollToTop";
import NewsSingle from "./pages/NewsSingle";
import mbContext from "./context/mbContext";
import { useEffect, useState } from "react";
import debounce from "lodash.debounce";
const App = () => {
  const [scrollHeight, setScrollHeight] = useState(window.scrollY);

  useEffect(() => {
    const scroll = () => {
      setScrollHeight(window.scrollY);
    };
    const debouncedScroll = debounce(scroll, 100);
    window.addEventListener("scroll", debouncedScroll);

    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  return (
    <div className={classes.appContainer}>
      <div className={classes.contentWrap}>
        <mbContext.Provider value={{ scrollHeight }}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:newsId" element={<NewsSingle />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/albums/:albumId" element={<AlbumSingle />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </mbContext.Provider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
