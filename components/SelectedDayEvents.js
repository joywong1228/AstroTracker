import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SelectedDayEvents({ date, events }) {
    const eventsForDate = events.filter((event) => event.date === date);

    if (eventsForDate.length === 0) {
        return (
            <View style={styles.container}>
                <Text style={styles.noEvents}>No events for {date}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>📆 Events on {date}</Text>
            {eventsForDate.map((event, index) => (
                <View key={index} style={styles.eventCard}>
                    <Text style={styles.title}>📌 {event.title}</Text>
                    <Text style={styles.description}>{event.description}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    header: {
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 10,
    },
    eventCard: {
        backgroundColor: '#f5f5f5',
        marginVertical: 6,
        padding: 12,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
    noEvents: {
        fontSize: 16,
        color: '#888',
        textAlign: 'center',
    },
});
