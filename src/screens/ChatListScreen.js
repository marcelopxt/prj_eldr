import { Text, View, StyleSheet, FlatList, Image, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../contexts/ThemeContext';
import { PROFILES } from '../data/profiles';

// Generate mock active chats from profiles
const activeChats = PROFILES.slice(0, 6).map((profile, index) => ({
  id: profile.id,
  name: profile.name,
  avatarUrl: profile.avatarUrl,
  lastMessage: index % 2 === 0 ? `Olá, gostaria de saber mais sobre ${profile.subject}.` : 'Combinado, até logo!',
  time: index % 2 === 0 ? '10:30' : 'Ontem',
  unread: index === 0 ? 2 : 0,
}));

// Componente que renderiza cada linha da conversa
const ItemConversa = ({ avatarUrl, name, lastMessage, time, unread }) => {
  const navigation = useNavigation(); // Hook para acessar a navegação
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.colors.card }]}
      onPress={() => navigation.navigate('Messages', { nome: name })}
    >
      <Image source={{ uri: avatarUrl }} style={[styles.avatar, { backgroundColor: theme.colors.border }]} />

      <View style={styles.contentContainer}>
        <View style={styles.topRow}>
          <Text style={[styles.name, { color: theme.colors.text }]} numberOfLines={1}>{name}</Text>
          <Text style={[styles.time, { color: theme.colors.subText }]}>{time}</Text>
        </View>

        <View style={styles.bottomRow}>
          <Text style={[styles.message, { color: theme.colors.subText }]} numberOfLines={1}>{lastMessage}</Text>
          {unread > 0 && (
            <View style={[styles.badge, { backgroundColor: theme.colors.primary }]}>
              <Text style={styles.badgeText}>{unread}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function ChatListScreen() {
  const { theme, isDarkMode } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} backgroundColor={theme.colors.card} />

      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.card, borderBottomColor: theme.colors.border }]}>
        <Text style={[styles.headerText, { color: theme.colors.text }]}>Conversas</Text>
      </View>

      {/* Body */}
      <FlatList
        data={activeChats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ItemConversa {...item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    width: '100%',
    backgroundColor: "#fff",
    height: 80, // Taller for safe area if simplest, but better to match Header.js padding
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerText: {
    color: "#333",
    fontSize: 22,
    fontWeight: 'bold',
  },
  listContent: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
  },
  contentContainer: {
    flex: 1,
    marginLeft: 12,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
    marginRight: 8,
  },
  time: {
    fontSize: 12,
    color: '#999',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  message: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    marginRight: 8,
  },
  badge: {
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  }
});