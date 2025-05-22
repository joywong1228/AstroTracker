import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const StarInfo = ({ star }) => {
    const data = star || {
        name: 'Vega',
        constellation: 'Lyra',
        magnitude: 0.03,
        distance: 25.04,
        ra: '18h 36m',
        dec: '+38° 47′',
        type: 'A0V',
        isVisible: true,
        rise: '8:12 PM',
        set: '6:14 AM',
        alt: '60°',
        az: '130°',
    };

    return (
        <View style={styles.card}>
            <Text style={styles.name}>⭐ {data.name}</Text>
            <Text style={styles.sub}>Constellation: {data.constellation}</Text>

            <View style={styles.section}>
                <Text style={styles.label}>Spectral Type: <Text style={styles.value}>{data.type}</Text></Text>
                <Text style={styles.label}>Magnitude: <Text style={styles.value}>{data.magnitude}</Text></Text>
                <Text style={styles.label}>Distance: <Text style={styles.value}>{data.distance} ly</Text></Text>
                <Text style={styles.label}>RA / Dec: <Text style={styles.value}>{data.ra} / {data.dec}</Text></Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.label}>Rise: <Text style={styles.value}>{data.rise}</Text></Text>
                <Text style={styles.label}>Set: <Text style={styles.value}>{data.set}</Text></Text>
                <Text style={styles.label}>Alt / Az: <Text style={styles.value}>{data.alt} / {data.az}</Text></Text>
                <Text style={styles.label}>Visible:
                    <Text style={[styles.value, data.isVisible ? styles.visible : styles.notVisible]}>
                        {data.isVisible ? ' Yes 🌕' : ' No 🌑'}
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 16,
        padding: 20,
        margin: 10,
        flex: 1,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#444',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 8,
    },
    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        textAlign: 'center',
    },
    sub: {
        fontSize: 16,
        color: '#bbb',
        textAlign: 'center',
        marginBottom: 16,
    },
    section: {
        marginVertical: 10,
    },
    label: {
        fontSize: 15,
        color: '#ccc',
        marginBottom: 6,
    },
    value: {
        color: '#fff',
        fontWeight: '500',
    },
    visible: {
        color: '#4ee44e',
    },
    notVisible: {
        color: '#e44e4e',
    },
});

export default StarInfo;
