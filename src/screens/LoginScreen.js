import { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform
} from 'react-native';

export default function LoginScreen({ setLogado }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [emailInvalido, setEmailInvalido] = useState(false);

    const handleEntrar = () => {
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!emailValido) return;

        if (email === 'teste@gmail.com' && senha === '123') {
            setLogado(true);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />

            <View style={styles.header}>
                <Text style={styles.title}>iMatch</Text>
            </View>

            <View style={styles.form}>
                <TextInput
                    style={[
                        styles.input,
                        emailInvalido && styles.inputErro
                    ]}
                    placeholder="E-mail"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        setEmailInvalido(false);
                    }}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />

                <TouchableOpacity
                    style={styles.botao}
                    onPress={handleEntrar}
                >
                    <Text style={styles.botaoTexto}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        justifyContent: 'center',
    },

    header: {
        alignItems: 'center',
        marginBottom: 32,
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ff4458',
    },

    form: {
        paddingHorizontal: 24,
    },

    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 14,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },

    inputErro: {
        borderColor: 'red',
    },

    botao: {
        backgroundColor: '#ff4458',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
    },

    botaoTexto: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

