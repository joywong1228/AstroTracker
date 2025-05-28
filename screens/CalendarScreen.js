import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    PanResponder,
    ScrollView,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import events from '../data/astro-events.json';
import UpcomingEvents from '../components/UpcomingEvents';

const { width } = Dimensions.get('window');

function getToday() {
    return new Date().toISOString().split('T')[0];
}

export default function CalendarScreen() {
    const [selectedDate, setSelectedDate] = useState(getToday());
    const [currentMonth, setCurrentMonth] = useState(getToday());
    const scrollRef = useRef(null);
    const eventRefs = useRef({});

    const markedDatesFromEvents = {};
    events.forEach((event) => {
        markedDatesFromEvents[event.date] = {
            marked: true,
            dotColor: 'orange',
        };
    });

    if (selectedDate) {
        markedDatesFromEvents[selectedDate] = {
            ...(markedDatesFromEvents[selectedDate] || {}),
            selected: true,
            selectedColor: 'blue',
        };
    }

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (evt, gestureState) => {
                return Math.abs(gestureState.dx) > 20;
            },
            onPanResponderRelease: (evt, gestureState) => {
                const current = new Date(currentMonth);
                if (gestureState.dx < -50) {
                    current.setMonth(current.getMonth() + 1);
                } else if (gestureState.dx > 50) {
                    current.setMonth(current.getMonth() - 1);
                } else {
                    return;
                }
                setCurrentMonth(current.toISOString().split('T')[0]);
            },
        })
    ).current;

    useEffect(() => {
        if (eventRefs.current[selectedDate]) {
            eventRefs.current[selectedDate].measureLayout(
                scrollRef.current,
                (x, y) => {
                    scrollRef.current.scrollTo({ y: y - 20, animated: true });
                },
                () => { }
            );
        }
    }, [selectedDate]);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Text style={styles.header}>📅 Astronomy Calendar</Text>

            <View {...panResponder.panHandlers}>
                <Calendar
                    current={currentMonth}
                    onDayPress={(day) => {
                        const selected = new Date(day.dateString);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0); // Normalize today's time

                        if (selected < today) {
                            alert('⚠️ Past event cannot be viewed');
                            return;
                        }

                        setSelectedDate(day.dateString);
                    }}
                    markedDates={markedDatesFromEvents}
                    theme={{
                        selectedDayBackgroundColor: '#0055ff',
                        selectedDayTextColor: '#ffffff',
                        todayTextColor: '#0055ff',
                        dayTextColor: '#222',
                        textDisabledColor: '#999',
                        monthTextColor: '#000',
                        arrowColor: '#0055ff',
                    }}
                    style={styles.calendar}
                />
            </View>

            <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollContainer}>
                <UpcomingEvents
                    events={events}
                    selectedDate={selectedDate}
                    eventRefs={eventRefs}
                />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        paddingTop: 20,
        paddingHorizontal: 16,
        paddingBottom: 80,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        color: '#000',
    },
    calendar: {
        borderRadius: 10,
        width: width - 40,
        alignSelf: 'center',
    },
});
