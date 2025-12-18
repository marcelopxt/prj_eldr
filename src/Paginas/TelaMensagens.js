import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  KeyboardAvoidingView, 
  Platform 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TelaMensagens({ route }) {
  const { nome } = route.params;
  const [mensagem, setMensagem] = useState('');

  // Simulação de mensagens
  const [mensagens, setMensagens] = useState([
    { id: '1', texto: 'Olá! Gostaria de saber se você consegue me explicar sobre árvore binaria.', enviadoPorMim: false, hora: '10:00' },
    { id: '2', texto: 'Opa, claro. Que horas?', enviadoPorMim: true, hora: '10:01' },
    { id: '3', texto: 'Que tal 14hrs?', enviadoPorMim: true, hora: '10:01' },
    { id: '4', texto: 'Combinado.', enviadoPorMim: false, hora: '10:05' },
  ]);

  const renderItem = ({ item }) => (
    <View style={[
      style.balao, 
      item.enviadoPorMim ? style.balaoEu : style.balaoOutro
    ]}>
      <Text style={style.textoMensagem}>{item.texto}</Text>
      <Text style={style.horaMensagem}>{item.hora}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={style.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={90} // Ajuste dependendo da altura do seu header
    >
      {/* Lista de Mensagens */}
      <FlatList
        data={mensagens}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={style.listaConteudo}
      />

      {/* Barra de Entrada de Texto */}
      <View style={style.inputContainer}>
        <TextInput
          style={style.input}
          placeholder="Digite uma mensagem..."
          value={mensagem}
          onChangeText={setMensagem}
          multiline
        />
        <TouchableOpacity style={style.botaoEnviar}>
          <Ionicons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5ddd5', // Cor de fundo clássica do WhatsApp
  },
  listaConteudo: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    paddingTop: 10,
  },
  balao: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
  },
  balaoEu: {
    alignSelf: 'flex-end',
    backgroundColor: '#ffffffff',
    borderTopRightRadius: 0,
  },
  balaoOutro: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
  },
  textoMensagem: {
    fontSize: 16,
    color: '#333',
  },
  horaMensagem: {
    fontSize: 11,
    color: '#999',
    alignSelf: 'flex-end',
    marginTop: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 8,
    maxHeight: 100,
    fontSize: 16,
    elevation: 2,
  },
  botaoEnviar: {
    backgroundColor: '#555151', 
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    elevation: 2,
  },
});