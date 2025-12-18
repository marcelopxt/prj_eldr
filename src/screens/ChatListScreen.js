import { Text, View, StyleSheet, FlatList, Image, StatusBar, SafeAreaView } from 'react-native';
import icon from "../../assets/user_icon.jpg";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dadosPessoas = {
  lista: [
    { id: '1', imagem: icon, nome: "Fernanda Lima", hora: "20:40" },
    { id: '2', imagem: icon, nome: "André Souza", hora: "15:42" },
    { id: '3', imagem: icon, nome: "Luana Pereira", hora: "01:00" },
  ],
};

import { useTheme } from '../contexts/ThemeContext';

// Componente que renderiza cada linha da conversa
const ItemConversa = ({ imagem, nome, hora }) => {
  const navigation = useNavigation(); // Hook para acessar a navegação
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={[styles.itemContainer, { borderBottomColor: theme.colors.border }]}
      onPress={() => navigation.navigate('Messages', { nome: nome })}
    >
      <Image source={imagem} style={[styles.avatar, { backgroundColor: theme.colors.border }]} />
      <View style={styles.textContainer}>
        <Text style={[styles.nome, { color: theme.colors.text }]}>{nome}</Text>
        <Text style={[styles.hora, { color: theme.colors.subText }]}>{hora}</Text>
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
        <Text style={[styles.headerText, { color: theme.colors.text }]}>Chat</Text>
      </View>

      {/* Body */}
      <FlatList
        data={dadosPessoas.lista}
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
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee', // Linha sutil entre conversas
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, // Deixa a imagem redonda
    backgroundColor: '#ddd',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  hora: {
    fontSize: 14,
    color: '#666',
  },
});