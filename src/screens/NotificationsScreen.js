import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../contexts/ThemeContext';

const MOCK_NOTIFICATIONS = [
    { id: '1', title: 'Nova mensagem', description: 'Você recebeu uma mensagem de Fernanda.', time: '5 min atrás', read: false, icon: 'chatbubble' },
    { id: '2', title: 'Match!', description: 'Você deu match com Carlos Oliveira.', time: '1 hora atrás', read: false, icon: 'heart' },
    { id: '3', title: 'Dica do dia', description: 'Confira os novos monitores de Cálculo.', time: '3 horas atrás', read: true, icon: 'bulb' },
    { id: '4', title: 'Atualização', description: 'O app foi atualizado com sucesso.', time: '1 dia atrás', read: true, icon: 'settings' },
];

export default function NotificationsScreen() {
    const { theme, isDarkMode } = useTheme();

    const renderItem = ({ item }) => (
        <View style={[
            styles.notificationItem,
            {
                backgroundColor: item.read ? theme.colors.background : theme.colors.card,
                borderBottomColor: theme.colors.border
            }
        ]}>
            <View style={[styles.iconContainer, { backgroundColor: theme.colors.border }]}>
                <Ionicons name={item.icon} size={24} color={theme.colors.primary} />
            </View>
            <View style={styles.textContainer}>
                <Text style={[styles.title, { color: theme.colors.text, fontWeight: item.read ? 'normal' : 'bold' }]}>{item.title}</Text>
                <Text style={[styles.description, { color: theme.colors.subText }]}>{item.description}</Text>
                <Text style={[styles.time, { color: theme.colors.subText }]}>{item.time}</Text>
            </View>
            {!item.read && <View style={[styles.dot, { backgroundColor: theme.colors.primary }]} />}
        </View>
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={theme.colors.card} />

            {/* Header is handled by Stack Navigator usually, but if hidden: */}
            {/* If we want a consistent custom header: */}
            {/* <View style={[styles.header, { backgroundColor: theme.colors.card, borderBottomColor: theme.colors.border }]}>
                <Text style={[styles.headerTitle, { color: theme.colors.text }]}>Notificações</Text>
             </View> */}

            <FlatList
                data={MOCK_NOTIFICATIONS}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContent: {
        paddingVertical: 10,
    },
    notificationItem: {
        flexDirection: 'row',
        padding: 16,
        alignItems: 'center',
        borderBottomWidth: 1,
    },
    iconContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        marginBottom: 4,
    },
    time: {
        fontSize: 12,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginLeft: 8,
    }
});
