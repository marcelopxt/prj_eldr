import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Switch,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    ScrollView
} from 'react-native';

import { useTheme } from '../contexts/ThemeContext';

export default function SettingsScreen() {
    const { isDarkMode, toggleTheme, theme } = useTheme();
    const [notifications, setNotifications] = useState(true);
    const [emailUpdates, setEmailUpdates] = useState(true);

    const containerStyle = {
        ...styles.container,
        backgroundColor: theme.colors.background
    };

    const textStyle = { color: theme.colors.text };
    const subTextStyle = { color: theme.colors.subText };
    const sectionTitleStyle = { ...styles.sectionTitle, color: theme.colors.text };
    const rowStyle = { ...styles.row, borderBottomColor: theme.colors.border };

    return (
        <SafeAreaView style={containerStyle}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <Text style={sectionTitleStyle}>Preferências</Text>

                    <View style={rowStyle}>
                        <Text style={[styles.rowText, textStyle]}>Notificações Push</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#ff4458" }}
                            thumbColor={notifications ? "#fff" : "#f4f3f4"}
                            onValueChange={setNotifications}
                            value={notifications}
                        />
                    </View>

                    <View style={rowStyle}>
                        <Text style={[styles.rowText, textStyle]}>Modo Escuro</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#ff4458" }}
                            thumbColor={isDarkMode ? "#fff" : "#f4f3f4"}
                            onValueChange={toggleTheme}
                            value={isDarkMode}
                        />
                    </View>

                    <View style={rowStyle}>
                        <Text style={[styles.rowText, textStyle]}>Receber emails de novidades</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#ff4458" }}
                            thumbColor={emailUpdates ? "#fff" : "#f4f3f4"}
                            onValueChange={setEmailUpdates}
                            value={emailUpdates}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={sectionTitleStyle}>Suporte</Text>
                    <TouchableOpacity style={styles.linkRow}>
                        <Text style={styles.linkText}>Central de Ajuda</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.linkRow}>
                        <Text style={styles.linkText}>Reportar um problema</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    content: {
        padding: 24,
    },
    section: {
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    rowText: {
        fontSize: 16,
        color: '#555',
    },
    linkRow: {
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    linkText: {
        fontSize: 16,
        color: '#007AFF', // Blue link color
    },
});
