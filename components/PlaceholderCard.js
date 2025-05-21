import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function PlaceholderCard({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Text style={styles.cardText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
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
});
