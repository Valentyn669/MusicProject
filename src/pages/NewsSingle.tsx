import classes from "./NewsSingle.module.scss";
import { useLocation } from "react-router-dom";
import { ReactComponent as DateSVG } from "../img/date.svg";
import { ReactComponent as AuthorSVG } from "../img/author.svg";
export interface INewsSingle {
  author: string;
  description: string;
  publishedAt: string;
  content: string;
  source?: { id: null | string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

export const NewsSingle = () => {
  let data: any = useLocation();
  const { author, description, publishedAt, content, title, url, urlToImage } =
    data.state;
  const time = new Date(publishedAt).toLocaleDateString("uk-UA");

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>{title}</h1>
        <img src={urlToImage} alt={title} />
        <div className={classes.info}>
          <time>
            <DateSVG /> {time}
          </time>
          <p>
            <AuthorSVG /> {author}
          </p>
        </div>
        <p>{description}</p>
        <p>
          {content.split("…")[0]}{" "}
          <a href={url} target="_blank" rel="noreferrer">
            continue reading...
          </a>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar
          lorem at ex ornare sodales. Quisque vulputate sapien aliquet mollis
          vehicula. Praesent vel cursus risus. Nullam volutpat, risus eu dictum
          tempor, sapien ante dignissim orci, eu condimentum turpis velit vel
          nunc. Ut quis pharetra tortor, vel tincidunt turpis. Integer ornare
          efficitur pulvinar. Ut dignissim egestas urna, id condimentum lacus
          viverra nec. Praesent sed venenatis tellus, sed commodo turpis.
        </p>
        <p>
          Aliquam sed justo sed tortor rutrum imperdiet dictum nec mi. Phasellus
          tempor dolor non odio fringilla, non maximus sapien finibus. Mauris
          luctus enim nunc. Nullam interdum lacus quis orci scelerisque
          tristique. Fusce sit amet tellus ac leo elementum vestibulum non non
          urna. Vestibulum nec velit vel tortor blandit ultricies. Fusce commodo
          dignissim lacus, sed vulputate ligula. Vestibulum fermentum est ut
          nunc malesuada sodales. Curabitur aliquam nulla lorem, ultrices
          gravida urna porta et. Integer scelerisque nisl nec libero fermentum
          pellentesque.
        </p>
        <p>
          Nulla gravida vitae diam quis tincidunt. Etiam fringilla interdum
          luctus. Nulla felis justo, ullamcorper sit amet lobortis a, placerat
          sit amet diam. Aliquam elementum ex sed augue posuere varius.
          Suspendisse a nisi et orci blandit aliquam vitae et purus. Vivamus id
          rhoncus ligula. Nunc id convallis felis. Pellentesque dignissim
          faucibus nunc non dictum. Quisque tincidunt massa sit amet ante tempor
          bibendum ut eget lectus. Nulla sed malesuada sem. Nulla dignissim
          lorem at lectus dapibus, et ornare neque convallis. Praesent at elit
          nec est dignissim efficitur. Integer id bibendum odio, eget interdum
          sapien. Integer ut malesuada nulla. Nullam lorem magna, varius nec
          nibh eget, pretium condimentum enim. Fusce dapibus venenatis lectus,
          mattis dapibus libero porttitor ut. Ut molestie leo justo, at
          venenatis dui hendrerit nec. Aliquam rutrum imperdiet metus at
          convallis. Phasellus ac gravida leo, non fringilla orci. Integer a
          euismod magna, nec scelerisque nibh. Suspendisse id ornare nulla. Ut
          pulvinar, ex a congue pretium, nisi odio pulvinar velit, sed vehicula
          sapien leo in elit. Quisque volutpat ac ex ut tristique. Morbi rhoncus
          eros a finibus tempus. Mauris quis tempor sem. Suspendisse in odio
          orci. Nullam pharetra bibendum dui, vitae vehicula neque aliquet a.
          Etiam interdum imperdiet leo quis posuere. Duis commodo sapien
          interdum nisl efficitur, et malesuada sapien hendrerit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Proin eget gravida dui. Interdum et malesuada fames ac
          ante ipsum primis in faucibus. Morbi eget mi sed quam tempus luctus.
          Cras ut erat lacinia, tempus odio at, pharetra enim.
        </p>
        <p>
          Integer ac arcu et neque aliquet gravida sed sed lorem. Duis
          sollicitudin nibh condimentum, varius massa eu, tempus leo. Nulla
          gravida iaculis enim, sit amet dictum elit congue a. Etiam vel velit
          id erat maximus mattis facilisis ac metus. Donec interdum, mauris ac
          tincidunt placerat, nisi elit bibendum risus, a pharetra risus dolor
          ut eros.
        </p>
      </div>
    </div>
  );
};

export default NewsSingle;
