import React from 'react';
import { FlatList, ListRenderItem, RefreshControl, StyleSheet } from 'react-native';

import { ArticleDataType } from '@/src/services/articleDataService/articleData.types';

import ArticleCard from './ArticleCard';
import ErrorComponent from './ErrorComponent';
import LoadingComponent from './LoadingComponent';
import NoResultsComponent from './NoSearchedResultsComponent';


interface IArticleListProps {
    data: ArticleDataType[];
    isLoading: boolean;
    isRefreshing: boolean;
    isError: boolean;
    searchKeyword: string,
    onRefresh: () => Promise<void>;
    onRetry: () => Promise<void>;
}

const ArticleList: React.FC<IArticleListProps> = ({data, isLoading, isRefreshing, isError, searchKeyword, onRefresh, onRetry}) => {
    

    const renderItem: ListRenderItem<ArticleDataType> = ({item}) => {
        return <ArticleCard article={item}/>
    }

    const keyExtractor = (item: ArticleDataType, index: number) => item?.publishedAt + index.toString();

    
    if(isError){
        return (
            <ErrorComponent isLoading={isLoading} onRetry={onRetry}/>
        )
    }

    if(isLoading && data?.length === 0){
        return (
            <LoadingComponent />
        )
    }

    if(searchKeyword.length > 0 && data?.length === 0){
        return (
            <NoResultsComponent keyword={searchKeyword}/>
        )
    }

    return (
        <FlatList 
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            showsVerticalScrollIndicator={false}
            style={styles.listStyle}
            contentContainerStyle={styles.listContentStyle}
            automaticallyAdjustKeyboardInsets
            initialNumToRender={5}
            maxToRenderPerBatch={10}
            refreshControl={
                <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh}/>
            }
        />
    )
}

export default ArticleList

const styles = StyleSheet.create({
    listStyle: {
        marginTop: 16,
    },
    listContentStyle: {
        padding: 16,
    }
})