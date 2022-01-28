import { useEffect, useState } from "react";
import NewsContainer from "../components/NewsComponents/NewsContainer";
import { useHttpClient } from "../hooks/http-hook";
import LoadingSpinner from "../shared/LoadingSpinner";
import { INewsSingle } from "./NewsSingle";
import ErrorModal from "../shared/Modal/ErrorModal";
export const News: React.FC = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [newsData, setNewsData] = useState([]);

  const dateNow = new Date().toISOString().split("T")[0];
  let backupKey: any = [
    "80d7c3dfe057450dba3910144d25d51d",
    "b5c44e8c687b481194690d5254377455",
  ];
  const url =
    "https://newsapi.org/v2/everything?" +
    "q=Rappers&" +
    `from=${dateNow}&` +
    "sortBy=popularity&" +
    `apiKey=${backupKey[0]}`;
  // useEffect(() => {
  //   const newsApi = async () => {
  //     try {
  //       const result = await sendRequest(url);
  //       setNewsData(result.data.articles);
  //     } catch (err) {}
  //   };
  //   newsApi();
  // }, [sendRequest]);

  const fakeNews: INewsSingle[] = [
    {
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      content:
        "Fat Joe has publicly appealed to young rappers to stop participating in the “Money Challenge” a trend where people spell out phrases or words with cash out of legal fears.\r\nTaking to Instagram Live, … [+1475 chars]",
      description:
        'Fat Joe has publicly appealed to young rappers to stop participating in the "Money Challenge" — a trend where people spell out phrases or words with cash — out of legal fears.Taking to Instagram Live, the hip-hop veteran first reminded them that Busy Bee actu…',
      publishedAt: "2022-01-27T09:49:27Z",
      source: { id: null, name: "HYPEBEAST" },
      title: 'Fat Joe Warns Young Rappers About the "Money Challenge"',
      url: "https://hypebeast.com/2022/1/fat-joe-warns-rappers-about-money-challenge-trend",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F01%2Ffat-joe-warns-rappers-about-money-challenge-trend-000.jpg?w=960&cbr=1&q=90&fit=max",
    },
    {
      author: "Molli Mitchell",
      content:
        "Long-running daytime talk show The Wendy Williams Show has been hosted by a rotation of guest hosts since October 2021 and February will look no different, with comedian Michael Rapaport returning as… [+3977 chars]",
      description:
        '"The Wendy Williams Show" will continue to look a little different in February 2022 as Williams herself will remain absent from the show.',
      publishedAt: "2022-01-28T11:04:47Z",
      source: { id: "newsweek", name: "Newsweek" },
      title:
        "Who Are 'The Wendy Williams Show' Guest Hosts and Where Is the Talk Show Star?",
      url: "https://www.newsweek.com/,wendy-williams-show-guest-hosts-michael-rapaport-sherri-shepherd-where-wendy-williams-1673863",
      urlToImage:
        "https://d.newsweek.com/en/full/1976688/wendy-williams-wendy-williams-show.jpg",
    },
  ];

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div>
        {isLoading && (
          <div className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && (
          <NewsContainer
            newsData={(newsData.length !== 0 && newsData) || fakeNews}
          />
        )}
      </div>
    </>
  );
};

export default News;
