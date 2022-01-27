import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import classes from "./App.module.scss";
import Main from "./pages/Main";
import Footer from "./components/Footer";
import About from "./pages/About";
import Albums from "./pages/Albums";
import News from "./pages/News";
import Contact from "./pages/Contact";
import AlbumDetails from "./pages/AlbumDetails";
import ScrollToTop from "./shared/ScrollToTop";
const App = () => {
  return (
    <div className={classes.appContainer}>
      <div className={classes.contentWrap}>
        <Navbar />
        <ScrollToTop />
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
          <Route path="/news" element={<News />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/albums/:albumId" element={<AlbumDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
