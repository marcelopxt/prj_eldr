import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

export default function ActionButtons({ onPass, onLike, onRefresh }) {
    const { theme } = useTheme();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.button, styles.passButton, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
                onPress={onPass}
            >
                <Ionicons name="close" size={30} color="#FF5252" />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.refreshButton, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
                onPress={onRefresh}
            >
                <Ionicons name="refresh" size={24} color="#FFB300" />
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.button, styles.likeButton, { backgroundColor: theme.colors.card, borderColor: theme.colors.border }]}
                onPress={onLike}
            >
                <Ionicons name="heart" size={30} color="#00E676" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        gap: 30,
        paddingBottom: 20, // Space if needed
        zIndex: 10,
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 7,
        borderWidth: 1, // Ensure border width is set for color to show
    },
    refreshButton: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
    },
    passButton: {
        // Border color handled inline
    },
    likeButton: {
        // Border color handled inline
    }
});
