import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const LoadingComponent: React.FC = () => {

    return (
        <View style={styles.container}>
          <ActivityIndicator size={'large'} color="#1e90ff" />
          <Text style={styles.text}>{'Loading...'}</Text>
        </View>
    );
}

export default LoadingComponent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        paddingHorizontal: 20,
    },
    text: {
        marginTop: 12,
        fontSize: 16,
        color: "#444",
    },
});
  