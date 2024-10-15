import { useEffect, useState } from "react";
import { Post_Interface } from "../types";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const useFetch = () => {
  const [data, setData] = useState<Post_Interface[]>([]);
  const [isErorr, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllPosts = async () => {
    try {
      setIsLoading(true);
      const responce = await axios.get(BASE_URL);
      setData(responce.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return { data, isErorr, isLoading };
};
