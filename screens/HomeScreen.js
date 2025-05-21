import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>🌌 AstroTracker</Text>
            <Button
                title="View Star Info"
                onPress={() => navigation.navigate('Star Info')}
            />
            <Button
                title="View Constellation Info"
                onPress={() => navigation.navigate('Constellation Info')}
            />
            <Button
                title="View Planet Info"
                onPress={() => navigation.navigate('Planet Info')}
            />
            <Button
                title="Related Websites"
                onPress={() => navigation.navigate('Related Websites')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20 },
});
