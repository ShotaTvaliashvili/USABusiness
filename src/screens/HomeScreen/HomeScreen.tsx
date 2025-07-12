import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


const HomeScreen = () => {

    return (
        <SafeAreaProvider style={styles.flex1}>
            
        </SafeAreaProvider>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    }
})