import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import ActionButtons from '../components/ActionButtons';
import BottomNav from '../components/BottomNav';
import { PROFILES } from '../data/profiles';

export default function HomeScreen({setTela}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentProfile = PROFILES[currentIndex];
    const irParaConta = () => {
        setTela('conta');
    };

    const handleNextProfile = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % PROFILES.length);
    };

    const handlePass = () => {
        console.log('Pressed Pass (X)');
        // Optional: could trigger next profile too for better UX
    };

    const handleLike = () => {
        console.log('Pressed Like (Heart)');
        // Optional: could trigger next profile too
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <Header />

            <View style={styles.cardArea}>
                <ProfileCard profile={currentProfile} />
            </View>

            <ActionButtons
                onRefresh={handleNextProfile}
                onPass={handlePass}
                onLike={handleLike}
            />

            <BottomNav irParaConta={irParaConta} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    cardArea: {
        flex: 1,
        position: 'relative',
        paddingBottom: 60, // Space for ActionButtons
    }
});
