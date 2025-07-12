import { createContext } from "react";

export interface IArticlesDataContext {
    data: any;
    isLoading: boolean;
    isRefreshing: boolean;
    isError: boolean; 
    keyword: string, 
    onRefresh: () => Promise<void>;
    onRetry: () => Promise<void>;
    setKeywordCallback: (val: string) => void;
}

const ArticlesDataContext = createContext<IArticlesDataContext>({
    data: [],
    isLoading: false,
    isRefreshing: false,
    isError: false, 
    keyword: '', 
    onRefresh: async () => {},
    onRetry: async () => {},
    setKeywordCallback: () => {},
})

export default ArticlesDataContext;