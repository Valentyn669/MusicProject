import classes from "./NewsLinkPage.module.scss";
import { INewsSingle } from "../../pages/NewsSingle";
import { Link } from "react-router-dom";
interface INewsLinks {
  singleNews: INewsSingle;
  title: string;
  urlToImage: string;
  description: string;
}

export const NewsLinkPage: React.FC<INewsLinks> = ({
  singleNews,
  title,
  urlToImage,
  description,
}) => {
  return (
    <li className={classes.contentContainer}>
      <Link
        state={singleNews}
        to={`/news/${title}`}
        className={classes.content}
      >
        <img src={urlToImage} alt={title} />
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
};

export default NewsLinkPage;
