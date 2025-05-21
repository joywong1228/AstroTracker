import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export default function RelatedWebsiteItem({ title, description, imageSource, url }) {
    const openLink = () => {
        if (url) {
            Linking.openURL(url).catch(() => alert('Failed to open URL'));
        }
    };

    return (
        <View style={styles.container}>
            {/* Row 1: title + description */}
            <View style={styles.title}>
                <Text style={styles.title}>{title}</Text>
            </View>

            {/* Row 2: image */}
            {imageSource && (
                <Image
                    source={imageSource}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}

            {/* Row 2: description */}
            <View style={styles.row}>
                <Text style={styles.description}>{description}</Text>
            </View>
            {/* Row 3: website link */}
            {url && (
                <TouchableOpacity onPress={openLink}>
                    <Text style={styles.link}>{url}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        backgroundColor: 'rgb(188, 195, 233)',
        padding: 10,
        borderRadius: 8,
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginBottom: 6,
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
        marginBottom: 3,
    },
    description: {
        fontSize: 16,
        flexShrink: 1,
    },
    image: {
        width: '100%', // some padding margin if container has padding 20
        height: 180,
        borderRadius: 8,
        marginBottom: 6,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 16,
        textAlign: 'center',
    },
});
