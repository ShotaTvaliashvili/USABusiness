import { USA_BUSINESS_ARTICLES_API } from "@/src/constants";
import useDebounce from "@/src/utils/useDebounce";
import { useEffect, useMemo, useState } from "react";
import { ArticleDataType, ArticlesResponseType } from "./articleData.types";

export const fetchArticlesData = async () => {
  const response = await fetch(USA_BUSINESS_ARTICLES_API);
  const data = await response.json();
  return data as ArticlesResponseType;
};

export const useGetArticlesData = () => {

  const [originalData, setOriginalData] = useState<ArticleDataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [keyword, setKeyword] = useState("");

  
  const debouncedKeyword = useDebounce(keyword, 500);


  useEffect(() => {
    fetchArticles("fetch");
  }, []);


  const fetchArticles = async (type: "fetch" | "refresh" = "fetch") => {
    try {
      type === "refresh" ? setIsRefreshing(true) : setIsLoading(true);

      const response = await fetchArticlesData();
      if (response.status === "ok" && response.articles?.length) {
        setOriginalData(response.articles);
        setIsError(false);
      } else {
        throw new Error("Empty data");
      }
    } catch (err) {
      setOriginalData([]);
      setIsError(true);
      console.warn(err, "while fetching articles");
    } finally {
      type === "refresh" ? setIsRefreshing(false) : setIsLoading(false);
    }
  };

  const filteredData = useMemo(() => {
    if (!debouncedKeyword.trim()) return originalData;

    const query = debouncedKeyword.toLowerCase();

    return originalData.filter((article) =>
      [article.title, article.description, article.content]
        .filter(Boolean)
        .some((field) => field!.toLowerCase().includes(query))
    );
  }, [debouncedKeyword, originalData]);


  return {
    data: filteredData,
    isLoading,
    isError,
    isRefreshing,
    keyword,
    setKeywordCallback: setKeyword,
    onRefresh: () => fetchArticles("refresh"),
    onRetry: () => fetchArticles("fetch"),
  };
};
