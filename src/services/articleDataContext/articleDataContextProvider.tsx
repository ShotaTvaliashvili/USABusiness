import { useGetArticlesData } from "../articleDataService/articleDataService";
import ArticlesDataContext, { IArticlesDataContext } from "./articleDataContext";

interface IArticlesDataContextProviderProps {
    children: React.ReactNode,
}

const ArticlesDataContextProvider = ({children}: IArticlesDataContextProviderProps) => {

    const {
        data,
        isLoading,
        isRefreshing,
        isError, 
        keyword, 
        onRefresh,
        setKeywordCallback,
    } = useGetArticlesData();


    const contextValue: IArticlesDataContext = {
        data,
        isLoading,
        isRefreshing,
        isError, 
        keyword, 
        onRefresh,
        setKeywordCallback,
    }

    return (
        <ArticlesDataContext.Provider value={contextValue}>
            {children}
        </ArticlesDataContext.Provider>
    )
}

export default ArticlesDataContextProvider;