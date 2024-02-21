import React, { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../Utils/api";

const fetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setData(null);
    setError(null);
    fetchDataFromApi(url)
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => setError("Something went wrong"));
  }, [url]);

  return { data, loading, error };
};

export default fetchData;
