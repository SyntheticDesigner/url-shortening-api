import { useState, useEffect, useCallback } from "react";
export const useHttp = (request) => {
  const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(false);
  //   const [error, setError] = useState("");

  let fetchUrl = useCallback(() => {
    fetch(request.url, {
      method: request.method ? request.method : "GET",
      headers: request.headers ? request.headers : {},
      body: request.body ? JSON.stringify(request.body) : null,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        return response.json();
      })
      .then((newData) => {
        console.log(newData);
        // setData(newData);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setError(err);
        // setLoading(false);
      });
  }, [request]);

  console.log(request);
  useEffect(() => {
    // setLoading(true);
    fetchUrl();
  });
  // return { data, loading, error };
};
