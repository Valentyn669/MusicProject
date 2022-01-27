import { useEffect, useState } from "react";
import NewsContainer from "../components/NewsComponents/NewsContainer";
import { useHttpClient } from "../hooks/http-hook";

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
  console.log(newsData);
  const fakeNews = [
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
  ];

  return (
    <div>
      <NewsContainer
        newsData={(newsData.length !== 0 && newsData) || fakeNews}
      />
    </div>
  );
};

export default News;
