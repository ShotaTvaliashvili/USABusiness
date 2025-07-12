import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface IErrorComponentProps {
    isLoading: boolean;
    onRetry: () => void;
}

const ErrorComponent: React.FC<IErrorComponentProps> = ({isLoading, onRetry}) => {
  
    return (
        <View style={styles.container}>
          <Ionicons name="alert-circle-outline" size={50} color="#e74c3c" />
          <Text style={styles.message}>{'Something went wrong'}</Text>
          {onRetry && (
            <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
              <Text style={styles.retryText}>Try Again</Text>
              {isLoading && <ActivityIndicator color={'#fff'} style={styles.activityIndicator}/>}
            </TouchableOpacity>
          )}
        </View>
    );
}

export default ErrorComponent

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        justifyContent: "center",
        padding: 32,
        paddingBottom: 60,
    },
    message: {
        fontSize: 16,
        color: "#333",
        textAlign: "center",
        marginVertical: 12,
    },
    retryButton: {
        flexDirection: 'row',
        backgroundColor: "#1e90ff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 8,
        marginTop: 10,
    },
    activityIndicator: {
        marginLeft: 8,
    },
    retryText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
});
  