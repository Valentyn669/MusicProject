import classes from "./NewsContainer.module.scss";
import NewsSingle, { INewsSingle } from "./NewsSingle";

export const NewsContainer: React.FC<{ newsData: INewsSingle[] }> = ({
  newsData,
}) => {
  return (
    <div className={classes.container}>
      {newsData.map((news) => (
        <NewsSingle
          key={news.url}
          author={news.author}
          description={news.description}
          publishedAt={news.publishedAt}
          title={news.title}
          content={news.content}
          url={news.url}
          urlToImage={news.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsContainer;
