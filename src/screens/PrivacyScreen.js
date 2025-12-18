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

export default function PrivacyScreen() {
    const [privateProfile, setPrivateProfile] = useState(false);
    const [readReceipts, setReadReceipts] = useState(true);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <View style={styles.infoBox}>
                    <Text style={styles.infoText}>
                        Gerencie quem vê suas informações e como você interage com outros usuários.
                    </Text>
                </View>

                <View style={styles.section}>
                    <View style={styles.row}>
                        <View style={styles.textWrapper}>
                            <Text style={styles.rowTitle}>Perfil Privado</Text>
                            <Text style={styles.rowSubtitle}>Apenas seguidores aprovados poderão ver suas fotos e posts.</Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#ff4458" }}
                            thumbColor={privateProfile ? "#fff" : "#f4f3f4"}
                            onValueChange={setPrivateProfile}
                            value={privateProfile}
                        />
                    </View>

                    <View style={styles.row}>
                        <View style={styles.textWrapper}>
                            <Text style={styles.rowTitle}>Recibos de Leitura</Text>
                            <Text style={styles.rowSubtitle}>Outros usuários saberão quando você visualizou as mensagens.</Text>
                        </View>
                        <Switch
                            trackColor={{ false: "#767577", true: "#ff4458" }}
                            thumbColor={readReceipts ? "#fff" : "#f4f3f4"}
                            onValueChange={setReadReceipts}
                            value={readReceipts}
                        />
                    </View>
                </View>

                <TouchableOpacity style={styles.blockedButton}>
                    <Text style={styles.blockedText}>Gerenciar Contas Bloqueadas</Text>
                </TouchableOpacity>
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
    infoBox: {
        backgroundColor: '#e3f2fd',
        padding: 16,
        borderRadius: 8,
        marginBottom: 24,
    },
    infoText: {
        color: '#0d47a1',
        fontSize: 14,
        lineHeight: 20,
    },
    section: {
        marginBottom: 32,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    textWrapper: {
        flex: 1,
        paddingRight: 16,
    },
    rowTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    rowSubtitle: {
        fontSize: 12,
        color: '#666',
    },
    blockedButton: {
        paddingVertical: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    blockedText: {
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
});
