import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-deck-swiper';
import StarInfo from '../components/StarInfo';
import CustomAlert from '../components/CustomAlert';
import stars from '../data/star-catalog.json';
import { ThemeContext } from '../contexts/ThemeContext';

const { width, height } = Dimensions.get('window');

export default function StarInfoScreen() {
    const navigation = useNavigation();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const isDark = theme === 'dark';

    const [starIndex, setStarIndex] = useState(0);
    const [disableSwipe, setDisableSwipe] = useState(false);
    const [hasAlertedEnd, setHasAlertedEnd] = useState(false);
    const swiperRef = useRef(null);

    const [alertVisible, setAlertVisible] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [alertMessage, setAlertMessage] = useState('');

    const rawStars = [...stars];
    const fullDeck = [...rawStars, { isEnd: true }];

    useEffect(() => {
        setAlertTitle("How to use");
        setAlertMessage("\n👉 Swipe right to save\n\n👈 Swipe left to pass");
        setAlertVisible(true);
    }, []);

    const handleSwiped = (index) => {
        setStarIndex(index + 1);
        if (index + 1 === fullDeck.length - 1) {
            setDisableSwipe(true);
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: isDark ? '#111' : '#f4f4f4' }]}>
            <TouchableOpacity onPress={toggleTheme} style={{ alignSelf: 'center', marginVertical: 10 }}>
                <Text style={{ color: isDark ? '#fff' : '#000' }}>
                    Switch to {isDark ? 'Light' : 'Dark'} Mode
                </Text>
            </TouchableOpacity>

            <Swiper
                cards={fullDeck}
                renderCard={(card) =>
                    card?.isEnd ? (
                        <View style={[styles.card, styles.emptyCard]}>
                            <Text style={[styles.emptyText, { color: isDark ? '#fff' : '#000' }]}>
                                🌌 Out of stars
                            </Text>
                            <Text style={[styles.emptySubText, { color: isDark ? '#aaa' : '#333' }]}>
                                You’ve explored the entire sky!
                            </Text>
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
        justifyContent: 'center',
    },
    card: {
        backgroundColor: '#1e1e1e',
        borderRadius: 16,
        width: width * 0.9,
        height: height * 0.75,
        alignSelf: 'center',
        overflow: 'hidden',
        padding: 10,
    },
    emptyCard: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        padding: 24,
    },
    emptyText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    emptySubText: {
        fontSize: 16,
        textAlign: 'center',
    },
});
