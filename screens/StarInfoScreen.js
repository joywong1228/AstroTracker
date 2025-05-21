import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function StarInfoScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>⭐ Star Name: Betelgeuse</Text>
            <Text style={styles.text}>Type: Red Supergiant</Text>
            <Text style={styles.text}>Distance: 642.5 light years</Text>
            <Button
                title="Back to Home"
                onPress={() => navigation.goBack()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 20, marginBottom: 10 },
});
