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

export default function SettingsScreen() {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [emailUpdates, setEmailUpdates] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Preferências</Text>

                    <View style={styles.row}>
                        <Text style={styles.rowText}>Notificações Push</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#ff4458" }}
                            thumbColor={notifications ? "#fff" : "#f4f3f4"}
                            onValueChange={setNotifications}
                            value={notifications}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.rowText}>Modo Escuro</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#ff4458" }}
                            thumbColor={darkMode ? "#fff" : "#f4f3f4"}
                            onValueChange={setDarkMode}
                            value={darkMode}
                        />
                    </View>

                    <View style={styles.row}>
                        <Text style={styles.rowText}>Receber emails de novidades</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#ff4458" }}
                            thumbColor={emailUpdates ? "#fff" : "#f4f3f4"}
                            onValueChange={setEmailUpdates}
                            value={emailUpdates}
                        />
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Suporte</Text>
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
