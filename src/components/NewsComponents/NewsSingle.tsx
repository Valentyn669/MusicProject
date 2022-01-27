import classes from "./NewsSingle.module.scss";

export interface INewsSingle {
  author: string;
  description: string;
  publishedAt: string;
  content: string;
  title: string;
  url: string;
  urlToImage: string;
}

export const NewsSingle: React.FC<INewsSingle> = ({
  author,
  description,
  publishedAt,
  title,
  content,
  url,
  urlToImage,
}) => {
  const time = new Date(publishedAt).toLocaleDateString("uk-UA");

  console.log(time);
  return (
    <li className={classes.content}>
      <h1>{title}</h1>
      <img src={urlToImage} alt={title} />
      <time>{time}</time>
      <p>{description}</p>
      <p>
        {content.split("…")[0]}
        <a href={url} target="_blank" rel="noreferrer">
          continue reading...
        </a>
      </p>
      <p>Author: {author}</p>
    </li>
  );
};

export default NewsSingle;
