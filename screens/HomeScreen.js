import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import PlaceholderCard from '../components/PlaceholderCard';


export default function HomeScreen({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>🌌 AstroTracker</Text>

            <PlaceholderCard
                title="✨ View Star Info"
                onPress={() => navigation.navigate('Star Info')}
            />

            <PlaceholderCard
                title="🔭 Sky Map"
                onPress={() => navigation.navigate('Sky Map')}
            />

            <PlaceholderCard
                title="📅 Calendar"
                onPress={() => navigation.navigate('Calendar')}
            />

            <PlaceholderCard
                title="🌐 Related Websites"
                onPress={() => navigation.navigate('Related Websites')}
            />

            {/* Example placeholder card for future */}
            <View style={styles.placeholder}>
                <Text style={styles.placeholderText}>🚀 More Features Coming Soon!</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingBottom: 40,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    card: {
        width: '85%',
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginVertical: 10,
        alignItems: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    cardText: {
        fontSize: 20,
        fontWeight: '600',
    },
    placeholder: {
        width: '85%',
        backgroundColor: '#d1d1d1',
        paddingVertical: 20,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginVertical: 20,
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 18,
        fontStyle: 'italic',
        color: '#555',
    },
});
