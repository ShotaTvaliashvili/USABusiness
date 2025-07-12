import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

import ArticlesDataContext from '@/src/services/articleDataContext/articleDataContext';

import ArticleList from './components/ArticleList';
import SearchInput from './components/SearchInput';


const HomeScreen = () => {

    const {
        data, 
        isLoading, 
        isError, 
        isRefreshing, 
        keyword,
        setKeywordCallback,
        onRefresh,
        onRetry,
    } = useContext(ArticlesDataContext);

    return (
        <SafeAreaView style={styles.flex1}>
            <SearchInput value={keyword} setValue={setKeywordCallback}/>
            <ArticleList 
                data={data}
                isError={isError}
                isLoading={isLoading}
                isRefreshing={isRefreshing}
                searchKeyword={keyword}
                onRefresh={onRefresh}
                onRetry={onRetry}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    }
})