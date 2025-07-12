import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";

interface INoResultsComponentProps {
  keyword?: string;
};

const NoResultsComponent: React.FC<INoResultsComponentProps> = ({ keyword }) => {
    return (
        <View style={styles.container}>
        <Ionicons name="search-outline" size={48} color="#999" />
        <Text style={styles.title}>No articles found</Text>
        {keyword ? (
            <Text style={styles.subtitle}>
            We couldn't find anything for "{keyword.trim()}".
            </Text>
        ) : (
            <Text style={styles.subtitle}>Try a different keyword.</Text>
        )}
        </View>
    );
};

export default NoResultsComponent;

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
      marginTop: 80,
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 18,
      fontWeight: "600",
      color: "#333",
      marginTop: 16,
    },
    subtitle: {
      fontSize: 15,
      color: "#666",
      marginTop: 6,
      textAlign: "center",
    },
  });
  
