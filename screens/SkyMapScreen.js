import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

export default function SkyMapScreen() {
    return (
        <View style={styles.container}>
            <WebView
                source={{ uri: 'https://stellarium-web.org/' }}  // or another online sky map
                startInLoadingState
                renderLoading={() => <ActivityIndicator size="large" color="#0000ff" />}
                style={styles.webview}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    webview: {
        flex: 1,
    },
});
