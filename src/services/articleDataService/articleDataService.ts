import { USA_BUSINESS_ARTICLES_API } from "@/src/constants";
import { useEffect, useState } from "react";
import { ArticleDataType, ArticlesResponseType } from "./articleData.types";

export const fetchArticlesData = async () => {
    const response  = await fetch(USA_BUSINESS_ARTICLES_API);
    const data = await response.json();
    return data as ArticlesResponseType;
}


export const useGetArticlesData = () => {
   
    const [data, setData] = useState<ArticleDataType[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const [keyword, setKeyword] = useState<string>('');


    useEffect(() => {
        fetchArticles();
    }, []);


    const startLoading = () => setIsLoading(true);
    const endLoading = () => setIsLoading(false);

    const setError = () => setIsError(true);
    const clearError = () => setIsError(false);

    const startRefreshing = () => setIsRefreshing(true);
    const endRefreshing = () => setIsRefreshing(false)

    const setKeywordCallback  = (val: string) => setKeyword(val);


    const fetchArticles = async () => {
        startLoading();
        const response = await fetchArticlesData();
        if(response.status === 'ok'){
            setData(response.articles);
            endLoading();
            clearError();
        }
        else {
            setData([]);
            endLoading();
            setError();
        }
    };


    const onRefresh = async () => {
        startRefreshing();
        const response = await fetchArticlesData();
        if(response.status === 'ok'){
            setData(response.articles);
            endRefreshing();
        }
        else {
            setData([]);
            endRefreshing();
            setError();
        }
    }

    return {
        data,
        isLoading,
        isError,
        isRefreshing,
        keyword,
        setKeywordCallback,
        onRefresh,
    }

}