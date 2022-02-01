import { createContext, useState, useEffect, FC } from "react";
import debounce from "lodash.debounce";
const MusicBandContext = createContext({
  scrollHeight: 0,
});

const MusicBandContextProvider: FC = ({ children }) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  useEffect(() => {
    const scroll = () => {
      setScrollHeight(window.scrollY);
    };
    const debouncedScroll = debounce(scroll, 200);
    window.addEventListener("scroll", debouncedScroll);
    return () => {
      window.removeEventListener("scroll", debouncedScroll);
    };
  }, []);

  return (
    <MusicBandContext.Provider value={{ scrollHeight: scrollHeight }}>
      {children}
    </MusicBandContext.Provider>
  );
};
export { MusicBandContext, MusicBandContextProvider };
