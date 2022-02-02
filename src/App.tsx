import { Routes, Route } from "react-router-dom";
import classes from "./App.module.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./shared/ScrollToTop";
import { MusicBandContextProvider } from "./context/MusicBandContext";
import { lazy, Suspense } from "react";
import Main from "./pages/Main";
import LoadingSpinner from "./shared/LoadingSpinner";

const About = lazy(() => import("./pages/About"));
const Albums = lazy(() => import("./pages/Albums"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const AlbumSingle = lazy(() => import("./pages/AlbumSingle"));
const NewsSingle = lazy(() => import("./pages/NewsSingle"));

const App = () => {
  return (
    <div className={classes.appContainer}>
      <div className={classes.contentWrap}>
        <MusicBandContextProvider>
          <Navbar />
          <ScrollToTop />
          <Suspense
            fallback={
              <div className={classes.centerScreen}>
                <LoadingSpinner />
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/:newsId" element={<NewsSingle />} />
              <Route path="/albums" element={<Albums />} />
              <Route path="/albums/:albumId" element={<AlbumSingle />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </MusicBandContextProvider>
      </div>
      <Footer />
    </div>
  );
};

export default App;
