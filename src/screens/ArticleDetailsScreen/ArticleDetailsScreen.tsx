import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const { width } = Dimensions.get("window");

const ArticleDetailsScreen = () => {

  const {item} = useLocalSearchParams();

  const article = JSON.parse(item as string);

  const openExternalLink = () => {
    Linking.openURL(article.url);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {article.urlToImage && (
          <Image source={{ uri: article.urlToImage }} style={styles.image} />
        )}
        <View style={styles.content}>
          <Pressable onPress={router.back} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </Pressable>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.meta}>
            {article.author ? `By ${article.author} • ` : ""}
            {article.source.name} •{" "}
            {new Date(article.publishedAt).toLocaleDateString()}
          </Text>
          {article.description && (
            <Text style={styles.paragraph}>{article.description}</Text>
          )}
          {article.content && (
            <Text style={styles.paragraph}>{article.content}</Text>
          )}
          <TouchableOpacity onPress={openExternalLink} style={styles.linkButton}>
            <Text style={styles.linkText}>Read full article on website →</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default ArticleDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: width,
    height: 240,
  },
  content: {
    padding: 20,
    paddingTop: 10,
  },
  backButton: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 8,
  },
  meta: {
    fontSize: 13,
    color: "#666",
    marginBottom: 16,
  },
  paragraph: {
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    marginBottom: 16,
  },
  linkButton: {
    backgroundColor: "#1e90ff",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  linkText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
