import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RelatedWebsiteItem from '../components/RelatedWeb'; // Adjust the import path as necessary

export default function RelatedWeb({ navigation }) {
    return (
        <View style={styles.container}>
            {/* <View style={styles.titleContainer}>
                <Text style={styles.title}>🌐 Related Websites</Text>
            </View> */}
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 40,  // so last item isn't blocked by button or bottom edge
                }}
                style={{ width: '100%' }}  // fill width of parent container
            >
                <RelatedWebsiteItem
                    title="NASA"
                    imageSource={require('../assets/nasa.jpeg')}
                    // add your image file or use {uri: 'image_url'}
                    description="National Aeronautics and Space Administration"
                    url="https://www.nasa.gov"
                />

                <RelatedWebsiteItem
                    title="Hubble Space Telescope"
                    imageSource={require('../assets/hubble.jpeg')}
                    description="NASA's Hubble Space Telescope"
                    url="https://hubblesite.org"
                />
                <RelatedWebsiteItem
                    title="European Space Agency"
                    imageSource={require('../assets/esa.png')}
                    description="The European Space Agency"
                    url="https://www.esa.int"
                />
                <RelatedWebsiteItem
                    title="SpaceX"
                    imageSource={require('../assets/spacex.jpeg')}
                    description="Space Exploration Technologies Corp."
                    url="https://www.spacex.com"
                />
                <RelatedWebsiteItem
                    title="International Space Station"
                    imageSource={require('../assets/iss.jpg')}
                    description="International Space Station"
                    url="https://www.nasa.gov/mission_pages/station/main/index.html"
                />
                <Button title="Back to Home" onPress={() => navigation.goBack()} />
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',  // start from top vertically
        alignItems: 'stretch',          // stretch full width inside View
        paddingHorizontal: 20,
        backgroundColor: '#f0f0f0',
        paddingTop: 10,                 // add space for absolute title at top
    },
    titleContainer: {
        height: 40,               // set desired height
        justifyContent: 'center', // vertical center
        alignItems: 'center',     // horizontal center
        backgroundColor: 'white', // optional styling
        marginBottom: 5,
        borderRadius: 8,
        elevation: 2,             // optional shadow for Android
        shadowColor: '#000',      // optional shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
