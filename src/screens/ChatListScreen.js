import { Text, View, StyleSheet, FlatList, Image, StatusBar, SafeAreaView } from 'react-native';
import icon from "../../assets/user_icon.jpg";
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dadosPessoas = {
  lista: [
    { id: '1', imagem: icon, nome: "Marcelo Peixoto", hora: "20:40" },
    { id: '2', imagem: icon, nome: "Diego Araújo", hora: "15:42" },
    { id: '3', imagem: icon, nome: "Daniel Berbet", hora: "01:00" },
  ],
};

// Componente que renderiza cada linha da conversa
const ItemConversa = ({ imagem, nome, hora }) => {
  const navigation = useNavigation(); // Hook para acessar a navegação

  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => navigation.navigate('Messages', { nome: nome })}
    >
      <Image source={imagem} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.hora}>{hora}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function ChatListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#555151" barStyle="light-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Chat</Text>
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
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    backgroundColor: "#555151",
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  headerText: {
    color: "#fff",
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