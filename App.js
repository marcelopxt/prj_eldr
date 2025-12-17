import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import PaginaPrincipal from './src/Paginas/PaginaPrincipal';
import PaginaConversa from './src/Paginas/PaginaConversa';
import PaginaPerfil from './src/Paginas/PaginaPefil'; 
import TelaMensagens from './src/Paginas/TelaMensagens';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ListaConversas" 
        component={PaginaConversa} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Mensagens" 
        component={TelaMensagens} 
        options={({ route }) => ({ title: route.params.nome })} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Início') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
            } else if (route.name === 'Perfil') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#555151',
          tabBarInactiveTintColor: 'gray',
          headerShown: false, 
        })}
      >
        <Tab.Screen name="Chat" component={ChatStack} />
        <Tab.Screen name="Início" component={PaginaPrincipal} />
        <Tab.Screen name="Perfil" component={PaginaPerfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}