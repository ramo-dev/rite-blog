import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error("Could not Fetch data from the server !");
          }
          return response.json();
        })
        .then((responseData) => {
          const blogsArray = Array.isArray(responseData) ? responseData : responseData.blogs;

          if (Array.isArray(blogsArray)) {
            setData(blogsArray);
            setIsPending(false);
            setError(null);
          } else {
            throw Error("Invalid data structure: Missing or invalid 'blogs' key.");
          }
        })
        .catch((err) => {
            if(err.name === 'AbortError'){
                console.log('fetch aborted')
            }
            else{
            }
            setIsPending(false);
            setError(err.message);

        });

      return () => {
        abortCont.abort();
      };
    }, 1000);
  }, [url]);

  return { isPending, error, data };
};

export default useFetch;
