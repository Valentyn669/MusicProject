import { useEffect, useState, useContext, useRef, FC } from "react";
import { MusicBandContext } from "../../context/MusicBandContext";
import "./ArtistImage.scss";
import { CSSTransition } from "react-transition-group";
const ArtistImage: FC<{ src: string; slideDir: "right" | "left" }> = ({
  src,
  slideDir,
}) => {
  const ref = useRef<any>();
  const mbCtx = useContext(MusicBandContext);
  const [imgData, setImgData] = useState<any>(null);
  const [isHalfShow, setIsHalfShown] = useState<boolean>(false);
  const [isNotScrolledPast, setIsNotScrolledPast] = useState<boolean>(false);
  useEffect(() => {
    const slideInAt = mbCtx.scrollHeight + window.innerHeight - 100;
    const imageBottom = imgData + 400;
    setIsHalfShown(slideInAt > imgData);
    setIsNotScrolledPast(mbCtx.scrollHeight < imageBottom);
  }, [imgData, mbCtx.scrollHeight]);

  return (
    <div className="imageContainer" style={{ float: slideDir }}>
      <CSSTransition
        in={isHalfShow && isNotScrolledPast}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames={slideDir}
      >
        <img
          src={src}
          ref={ref}
          onLoad={() => setImgData(ref.current.offsetTop)}
          alt={src}
        />
      </CSSTransition>
    </div>
  );
};
export default ArtistImage;
