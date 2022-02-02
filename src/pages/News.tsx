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

  useEffect(() => {
    newsApi();
  }, [newsApi]);

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
            <NewsContainer
              newsData={(newsData.length !== 0 && newsData) || []}
            />
            <div className={classes.pagination}>
              {prevValid && <Button onClick={PrevHandler}>Previous</Button>}
              {newsData.length !== 0 && (
                <p style={{ color: "white" }}>
                  Page: {pagination} / {numOfPages}
                </p>
              )}
              {nextValid && <Button onClick={NextHandler}>Next</Button>}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default News;
