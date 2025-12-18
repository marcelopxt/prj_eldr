import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function BottomNav({ irParaConta }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="chatbubbles-outline" size={24} color="#ccc" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="home" size={28} color="#FF5252" />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.navItem}
                onPress={irParaConta}
            >
                <Ionicons name="person-outline" size={24} color="#ccc" />
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#f0f0f0',
        paddingBottom: 10, // Adjust for safe area if needed
    },
    navItem: {
        padding: 10,
    }
});
