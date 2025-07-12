

export type ArticlesResponseType = {
    status: 'ok',
    totalResults: number,
    articles: ArticleDataType[];
}


export type ArticleDataType = {
    source: {
        id: string | null,
        name: string
    },
    url: string,
    title: string,
    author: string,
    content: string,
    urlToImage: string,
    description: string,
    publishedAt: string,
}