import classes from "./NewsContainer.module.scss";
import NewsLinkPage from "./NewsLinkPage";
import { INewsSingle } from "../../pages/NewsSingle";

export const NewsContainer: React.FC<{ newsData: INewsSingle[] }> = ({
  newsData,
}) => {
  return (
    <div className={classes.container}>
      {newsData.map((news) => (
        <NewsLinkPage
          key={news.title}
          urlToImage={news.urlToImage}
          description={news.description}
          title={news.title}
          singleNews={news}
        />
      ))}
    </div>
  );
};

export default NewsContainer;
