import { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';

export default function App() {
    const [logado, setLogado] = useState(false);
    const [tela, setTela] = useState('home');

    if (!logado) {
        return <LoginScreen setLogado={setLogado} />;
    }

    if (tela === 'conta') {
        return <AccountScreen setLogado={setLogado} />;
    }

    return <HomeScrween setTela={setTela} />;
}
