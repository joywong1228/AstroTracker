import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function UpcomingEvents({ events = [], selectedDate }) {
    const scrollViewRef = useRef();
    const itemRefs = useRef([]);

    const upcoming = events
        .filter(event => new Date(event.date) >= new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .slice(0, 20); // next 5

    useEffect(() => {
        if (selectedDate) {
            const index = upcoming.findIndex(e => e.date === selectedDate);
            if (index !== -1 && itemRefs.current[index]) {
                itemRefs.current[index].measureLayout(
                    scrollViewRef.current,
                    (_x, y) => scrollViewRef.current.scrollTo({ y, animated: true }),
                    () => { }
                );
            }
        }
    }, [selectedDate]);

    if (!upcoming.length) return null;

    return (
        <ScrollView ref={scrollViewRef} style={styles.container}>
            <Text style={styles.title}>🔭 Upcoming Astronomy Events</Text>
            {upcoming.map((event, index) => {
                const isSelected = event.date === selectedDate;
                return (
                    <View
                        key={index}
                        ref={(el) => (itemRefs.current[index] = el)}
                        style={[
                            styles.card,
                            isSelected && styles.highlightCard,
                        ]}
                    >
                        <Text style={styles.date}>{event.date}</Text>
                        <Text style={styles.eventTitle}>{event.title}</Text>
                        <Text style={styles.description}>{event.description}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        maxHeight: 400,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 10,
        marginBottom: 10,
        elevation: 2,
    },
    highlightCard: {
        backgroundColor: '#ffdddd',
    },
    date: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 4,
    },
    description: {
        fontSize: 14,
        color: '#333',
        marginTop: 2,
    },
});
