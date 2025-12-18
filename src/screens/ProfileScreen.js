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

export default function AccountScreen({ setLogado }) {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>Minha Conta</Text>
            </View>

            {/* Perfil */}
            <View style={styles.profile}>
                <View style={styles.avatar}>
                    <Text style={styles.avatarText}>D</Text>
                </View>

                <Text style={styles.name}>Daniel</Text>
                <Text style={styles.email}>teste@gmail.com</Text>
            </View>

            {/* Opções */}
            <View style={styles.menu}>
                <Text style={styles.item}>Editar perfil</Text>
                <Text style={styles.item}>Configurações</Text>
                <Text style={styles.item}>Privacidade</Text>
            </View>

            {/* Logout */}
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={() => setLogado(false)}
            >
                <Text style={styles.logoutText}>Sair</Text>
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
