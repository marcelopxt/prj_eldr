import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    StatusBar,
    Platform
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { useTheme } from '../contexts/ThemeContext';

export default function AccountScreen({ setLogado, navigation }) {
    const { theme, isDarkMode } = useTheme();

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={theme.colors.card} />

            {/* Header */}
            <View style={[styles.header, { backgroundColor: theme.colors.card, borderBottomColor: theme.colors.border }]}>
                <Text style={[styles.title, { color: theme.colors.text }]}>Minha Conta</Text>
            </View>

            {/* Perfil */}
            <View style={styles.profile}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>D</Text>
                </View>

                <Text style={[styles.name, { color: theme.colors.text }]}>Daniel</Text>
                <Text style={[styles.email, { color: theme.colors.subText }]}>teste@gmail.com</Text>
            </View>

            {/* Opções */}
            <View style={styles.menu}>
                <TouchableOpacity style={[styles.item, { backgroundColor: theme.colors.card }]} onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={[styles.itemText, { color: theme.colors.text }]}>Editar perfil</Text>
                    <Ionicons name="chevron-forward" size={20} color={theme.colors.subText} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.item, { backgroundColor: theme.colors.card }]} onPress={() => navigation.navigate('Settings')}>
                    <Text style={[styles.itemText, { color: theme.colors.text }]}>Configurações</Text>
                    <Ionicons name="chevron-forward" size={20} color={theme.colors.subText} />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.item, { backgroundColor: theme.colors.card }]} onPress={() => navigation.navigate('Privacy')}>
                    <Text style={[styles.itemText, { color: theme.colors.text }]}>Privacidade</Text>
                    <Ionicons name="chevron-forward" size={20} color={theme.colors.subText} />
                </TouchableOpacity>
            </View>

            {/* Logout */}
            <TouchableOpacity
                style={[styles.logoutButton, { backgroundColor: isDarkMode ? '#333' : '#ddd' }]}
                onPress={() => setLogado(false)}
            >
                <Text style={[styles.logoutText, { color: isDarkMode ? '#fff' : '#333' }]}>Sair</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },

    header: {
        padding: 24,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },

    profile: {
        alignItems: 'center',
        marginTop: 20,
    },

    avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#ff4458',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12,
    },

    avatarText: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },

    email: {
        color: '#666',
        marginTop: 4,
    },

    menu: {
        marginTop: 40,
        paddingHorizontal: 24,
    },

    item: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 10,
        marginBottom: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    itemText: {
        fontSize: 16,
        color: '#333',
    },

    logoutButton: {
        marginTop: 'auto',
        marginBottom: 32,
        marginHorizontal: 24,
        backgroundColor: '#ddd',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },

    logoutText: {
        color: '#333',
        fontWeight: 'bold',
    },
});
