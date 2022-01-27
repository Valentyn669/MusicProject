import { useState, useCallback, useEffect, useRef } from "react";
import axios from "axios";
export const useHttpClient = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const activeHttpRequests = useRef<AbortController[]>([]);

  const sendRequest = useCallback(
    async (url, method = "GET", data = null, headers = {}) => {
      try {
        setIsLoading(true);
        const httpAbortCtrl = new AbortController();
        activeHttpRequests.current.push(httpAbortCtrl);
        const response = await axios({
          method,
          url,
          data,
          headers,
          signal: httpAbortCtrl.signal,
        });

        setIsLoading(false);
        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbortCtrl
        );

        return response;
      } catch (err: any) {
        setError(err.response.data.message);
        setIsLoading(false);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortCtrl) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};
