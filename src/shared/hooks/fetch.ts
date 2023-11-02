import { apiUrl } from "@/service";
import { useState, useEffect } from "react";

type HookReturnType<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

//Tanstack query is the goto data fetching lib!
//Using this to keep things simple ):
function useFetchWithAbort<T>(url: string): HookReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    setError(null);

    fetch(url, { signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
        return response.json() as Promise<T>;
      })
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          // Request was aborted, no need to update state
          return;
        }
        setError(err);
        setLoading(false);
      });

    return () => {
      abortController.abort(); // Cancel the fetch when the component unmounts
    };
  }, [url]);

  return { data, loading, error };
}

export default useFetchWithAbort;
