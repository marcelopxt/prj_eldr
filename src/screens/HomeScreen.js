import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import ActionButtons from '../components/ActionButtons';
import BottomNav from '../components/BottomNav';
import { PROFILES } from '../data/profiles';

import { useTheme } from '../contexts/ThemeContext';

export default function HomeScreen({ navigation }) {
    const { theme, isDarkMode } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentProfile = PROFILES[currentIndex];

    // Removed irParaConta as it's handled by Tab Navigator

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
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor={theme.colors.card}
            />
            <Header />

            <View style={styles.cardArea}>
                <ProfileCard profile={currentProfile} />
            </View>

            <ActionButtons
                onRefresh={handleNextProfile}
                onPass={handlePass}
                onLike={handleLike}
            />

            {/* BottomNav removed - using Tab Navigator */}
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
    }
});
