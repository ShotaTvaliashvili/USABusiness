import React, { useState } from 'react';
import { Image, LayoutAnimation, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ArticleDataType } from '@/src/services/articleDataService/articleData.types';
import { router } from 'expo-router';


interface IArticleCardProps {
    article: ArticleDataType;
}

const ArticleCard: React.FC<IArticleCardProps> = ({article}) => {
    
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    };

    const navToDetailedScreen = () => router.navigate({
      pathname: '/(tabs)/articleDetailsScreen', 
      params: {
        item: JSON.stringify(article),
      }
    })

    const handleLinkPress = () => Linking.openURL(article?.url);


    return (
      <TouchableOpacity style={styles.card} onPress={navToDetailedScreen} activeOpacity={0.7}>
        {article.urlToImage && <Image source={{ uri: article.urlToImage }} style={styles.image} />}
        <View style={styles.content}>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.meta}>
            {article.author ? `By ${article.author} • ` : ""}
            {article.source.name} • {new Date(article.publishedAt).toLocaleString()}
          </Text>
          {expanded && (
            <View style={styles.expandedContent}>
              <Text style={styles.description}>{article.description}</Text>
              <View style={styles.row}>
                <TouchableOpacity onPress={navToDetailedScreen}>
                  <Text style={styles.link}>Read full article →</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleLinkPress}>
                  <Text style={styles.link}>Visit on website →</Text>
                </TouchableOpacity>
              </View>  
            </View>
          )}
          <TouchableOpacity onPress={toggleExpanded}>
            <Text style={styles.toggle}>{expanded ? "Show Less ▲" : "Read More ▼"}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
}

export default ArticleCard

const styles = StyleSheet.create({
    card: {
      backgroundColor: "#fff",
      borderRadius: 16,
      overflow: "hidden",
      marginVertical: 10,
      elevation: 4,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
    },
    image: {
      width: "100%",
      height: 180,
    },
    content: {
      padding: 16,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      color: "#333",
    },
    meta: {
      fontSize: 12,
      color: "#666",
      marginVertical: 8,
    },
    expandedContent: {
      marginTop: 10,
    },
    description: {
      fontSize: 14,
      color: "#444",
      marginBottom: 6,
    },
    contentText: {
      fontSize: 13,
      color: "#555",
      marginBottom: 10,
    },
    row: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    link: {
      fontSize: 13,
      color: "#1e90ff",
      textDecorationLine: "underline",
    },
    toggle: {
      marginTop: 10,
      color: "#1e90ff",
      fontWeight: "500",
    },
});
  