import { useCallback, useEffect, useState } from "react";
import NewsContainer from "../components/NewsComponents/NewsContainer";
import { useHttpClient } from "../hooks/http-hook";
import LoadingSpinner from "../shared/LoadingSpinner";
import { INewsSingle } from "./NewsSingle";
import ErrorModal from "../shared/Modal/ErrorModal";
import Button from "../shared/Button";
import classes from "./News.module.scss";

export const News: React.FC = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const [newsData, setNewsData] = useState<INewsSingle[]>([]);
  const [pagination, setPagination] = useState(1);
  const [prevValid, setPrevValid] = useState(false);
  const [nextValid, setNextValid] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  let pageSize = 5;
  const dayBehind = new Date(new Date().setDate(new Date().getDate() - 1))
    .toISOString()
    .split("T")[0];

  let backupKey: string[] = [
    `${process.env.REACT_APP_NEWSKEY1}`,
    `${process.env.REACT_APP_NEWSKEY2}`,
  ];
  const url =
    "https://newsapi.org/v2/everything?" +
    "q=Rappers&" +
    `from=${dayBehind}&` +
    "sortBy=popularity&" +
    `pageSize=${pageSize}&` +
    `page=${pagination}&` +
    `apiKey=${backupKey[0] || backupKey[1]}`;

  const numOfPages = Math.round(totalResults / pageSize);

  const newsApi = useCallback(async () => {
    try {
      const result = await sendRequest(url);
      setNewsData(result.data.articles);
      setTotalResults(result.data.totalResults);
      if (pagination > 1) {
        setPrevValid(true);
      } else {
        setPrevValid(false);
      }
      if (numOfPages <= pagination) {
        setNextValid(false);
      } else {
        setNextValid(true);
      }
    } catch (err) {}
  }, [numOfPages, pagination, sendRequest, url]);

  // useEffect(() => {
  //   newsApi();
  // }, [newsApi]);

  const PrevHandler = () => {
    setPagination((prevCount) => {
      if (prevCount <= 1) {
        return prevCount;
      }
      return prevCount - 1;
    });
  };
  const NextHandler = () => {
    setPagination((prevCount) => {
      if (pageSize !== newsData.length) {
        return prevCount;
      }
      return prevCount + 1;
    });
  };
  console.log(newsData);
  const fakeNews: INewsSingle[] = [
    {
      author: "info@hypebeast.com (HYPEBEAST), HYPEBEAST",
      content:
        "Fat Joe has publicly appealed to young rappers to stop participating in the “Money Challenge” a trend where people spell out phrases or words with cash out of legal fears.\r\nTaking to Instagram Live, … [+1475 chars]",
      description:
        'Fat Joe has publicly appealed to young rappers to stop participating in the "Money Challenge" — a trend where people spell out phrases or words with cash — out of legal fears.Taking to Instagram Live, the hip-hop veteran first reminded them that Busy Bee actu…',
      publishedAt: "2022-01-27T09:49:27Z",
      source: { id: "HYPEBEAST", name: "HYPEBEAST" },
      title: 'Fat Joe warns Rappers About the "Money Challenge"',
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
        "Wendy Williams Show' Guest Hosts and Where Is the Talk Show Star?",
      url: "https://www.newsweek.com/,wendy-williams-show-guest-hosts-michael-rapaport-sherri-shepherd-where-wendy-williams-1673863",
      urlToImage:
        "https://d.newsweek.com/en/full/1976688/wendy-williams-wendy-williams-show.jpg",
    },
    {
      author: "Kelly Pau",
      content:
        "Within film, art, music, fashion and other creative industries, there is a lack of representation of people of color, including Asian people. While recent years have seen more Asian representation wi… [+5670 chars]",
      description:
        "Now in print, this critical publication aims to empower those who often feel misrepresented Within film, art, music, fashion and other creative industries, there is a lack of representation of people of color, including Asian people. While recent years have s…",
      publishedAt: "2022-02-02T12:03:22Z",
      source: { id: "Cool Hunting", name: "Cool Hunting" },
      title:
        "The Magazine Celebrating Filipino Fashion and Culture, Hella Pinay",
      url: "http://coolhunting.com/culture/the-magazine-celebrating-filipino-fashion-and-culture-hella-pinay/",
      urlToImage:
        "https://i0.wp.com/coolhunting.com/wp-content/uploads/2022/02/Photographer_Jack_Marion_for_Hella-Pinay.jpg?fit=1200%2C840&ssl=1",
    },
    {
      author: "Tom Breihan",
      content:
        "In The Number Ones, I’m reviewing every single #1 single in the history of the Billboard Hot 100, starting with the chart’s beginning, in 1958, and working my way up into the present.\r\n***\r\nHow did t… [+16539 chars]",
      description:
        "In The Number Ones, I’m reviewing every single #1 single in the history of the Billboard Hot 100, starting with the chart’s beginning, in 1958, and working my way up into the present.",
      publishedAt: "2022-02-02T13:47:29Z",
      source: { id: "Stereogum", name: "Stereogum" },
      title: "The Number Ones: Snow’s “Informer”",
      url: "https://www.stereogum.com/2174418/the-number-ones-snows-informer/columns/the-number-ones/",
      urlToImage:
        "https://static.stereogum.com/uploads/2022/01/Snow-Informer-1643400035.jpeg",
    },
    {
      author: "Eve Andrews",
      content:
        "If you spend a day at any gas station between Pittsburgh and Cincinnati, you are pretty much guaranteed to see a certain type of man. He steps down from a new pickup with 48 inch tires, and the feet … [+7386 chars]",
      description:
        "A pair of discontinued Red Wings has spurred the latest hypebeast craze.",
      publishedAt: "2022-02-02T11:30:00Z",
      source: { id: "Grist", name: "Grist" },
      title: "Kanye West and the dark twisted fantasy of shale country chic",
      url: "http://grist.org/culture/kanye-west-and-the-dark-twisted-fantasy-of-shale-country-chic/",
      urlToImage: "https://grist.org/wp-content/uploads/2022/02/ye-boot.jpg",
    },
  ];

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div>
        {isLoading && (
          <div style={{ marginTop: "150px" }} className="center">
            <LoadingSpinner />
          </div>
        )}
        {!isLoading && (
          <>
            <NewsContainer newsData={fakeNews} />

            {/* 
            //API only works locally :( 
            <NewsContainer
              newsData={(newsData.length !== 0 && newsData) || []}
            /> */}
            {/* <div className={classes.pagination}>
              {prevValid && <Button onClick={PrevHandler}>Previous</Button>}
              {newsData.length !== 0 && (
                <p style={{ color: "white" }}>
                  Page: {pagination} / {numOfPages}
                </p>
              )}
              {nextValid && <Button onClick={NextHandler}>Next</Button>}
            </div> */}
          </>
        )}
      </div>
    </>
  );
};

export default News;
