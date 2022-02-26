import { useEffect, useState } from "react";
import axios from "axios";

export const useRequestData = (url) => {
  const [dataAPI, setDataAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setIsLoading(false);
        setDataAPI(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.message);
      });
  }, []);
  return [dataAPI, isLoading];
};
