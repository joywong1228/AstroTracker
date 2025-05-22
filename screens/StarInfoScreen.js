import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Dimensions, Alert, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';
import StarInfo from '../components/StarInfo';
import CustomAlert from '../components/CustomAlert';
import stars from '../data/star-catalog.json';

const { width, height } = Dimensions.get('window');

export default function StarInfoScreen() {
    const navigation = useNavigation();
    const [starIndex, setStarIndex] = useState(0);

    const [disableSwipe, setDisableSwipe] = useState(false);
    const swiperRef = useRef(null);
    const [hasAlertedEnd, setHasAlertedEnd] = useState(false);
    const [alertVisible, setAlertVisible] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const rawStars = [...stars]; // your real data
    const fullDeck = [...rawStars, { isEnd: true }]; // append one final "placeholder" card

    useEffect(() => {
        setAlertTitle("How to use");
        setAlertMessage("\n👉 Swipe right to save\n\n👈 Swipe left to pass");
        setAlertVisible(true);
    }, []);


    const handleSwiped = (index) => {
        setStarIndex(index + 1);
        if (index + 1 === fullDeck.length - 1) {
            // Next is the final "Out of stars" card
            setDisableSwipe(true);
        }
    };

    return (
        <View style={styles.container}>
            <Swiper
                cards={fullDeck}
                renderCard={(card) =>
                    card?.isEnd ? (
                        <View style={[styles.card, styles.emptyCard]}>
                            <Text style={styles.emptyText}>🌌 Out of stars</Text>
                            <Text style={styles.emptySubText}>You’ve explored the entire sky!</Text>
                        </View>
                    ) : (
                        <View style={styles.card}>
                            <StarInfo star={card} />
                        </View>
                    )
                }
                onSwiped={handleSwiped}
                onSwipedAll={() => console.log('End of deck')}

                cardIndex={0}
                backgroundColor="transparent"
                stackSize={3}
                verticalSwipe={false}

                disableTopSwipe={true}
                disableBottomSwipe={true}
                disableLeftSwipe={disableSwipe}
                disableRightSwipe={disableSwipe}

                onSwiping={() => {
                    if (disableSwipe && !hasAlertedEnd) {
                        setAlertTitle("Oops");
                        setAlertMessage("No more stars to swipe.");
                        setAlertVisible(true);
                        setHasAlertedEnd(true);
                    }
                }}
            />
            <CustomAlert
                visible={alertVisible}
                title={alertTitle}
                message={alertMessage}
                onClose={() => setAlertVisible(false)}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 16,
        width: width * 0.9,
        height: height * 0.75, // ⬅️ Constrain card height
        alignSelf: 'center',
        overflow: 'hidden',
        padding: 10,
    },
    emptyCard: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222',
        borderRadius: 16,
        padding: 24,
    },
    emptyText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
    },
    emptySubText: {
        fontSize: 16,
        color: '#aaa',
        textAlign: 'center',
    },


});
