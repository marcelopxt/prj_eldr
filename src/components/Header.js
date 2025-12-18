import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../contexts/ThemeContext';

export default function Header() {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.card, borderBottomColor: theme.colors.border }]}>
            <View style={styles.logoContainer}>
                <Text style={[styles.logoText, { color: theme.colors.text }]}>iMatch</Text>
                <Ionicons name="school-outline" size={24} color="#00C853" />
            </View>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="search" size={24} color={theme.colors.text} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <Ionicons name="notifications-outline" size={24} color={theme.colors.text} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50, // Safe area top padding approximation
        paddingBottom: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    logoText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    actions: {
        flexDirection: 'row',
        gap: 15,
    },
    iconButton: {
        padding: 5,
    }
});
