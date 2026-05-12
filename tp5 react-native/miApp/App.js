import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// --- IMPORTACIÓN DE PANTALLAS ---
// Asegúrate de que la carpeta se llame 'screams' como en tus rutas anteriores
import LoginScreen from './screams/LoginScreen';
import RegisterScreen from './screams/RegistroPantalla';
import MenuPrincipal from './screams/HomeScreen';
import PantallaCrear from './screams/PantallaCrear';
import ListaScreen from './screams/MostrarTabla';
import EditarScreen from './screams/PantallaModificar';
import EliminarVehiculo from './screams/EliminarPantalla';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* 
        initialRouteName="Login" asegura que lo primero que vea el usuario 
        sea el inicio de sesión.
      */}
      <Stack.Navigator initialRouteName="Login">
        
        {/* FLUJO DE AUTENTICACIÓN */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} // Oculta la barra superior en el login
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ title: 'Crear Cuenta' }} 
        />

        {/* MENÚ PRINCIPAL (Home) */}
        <Stack.Screen 
          name="MenuPrincipal" 
          component={MenuPrincipal} 
          options={{ title: 'Panel de Control' }} 
        />

        {/* GESTIÓN DE VEHÍCULOS (CRUD) */}
        <Stack.Screen 
          name="AgregarVehiculo" 
          component={PantallaCrear} 
          options={{ title: 'Cargar Nuevo Vehículo' }} 
        />
        <Stack.Screen 
          name="VerLista" 
          component={ListaScreen} 
          options={{ title: 'Inventario de Vehículos' }} 
        />
        <Stack.Screen 
          name="Editar" 
          component={EditarScreen} 
          options={{ title: 'Modificar Registro' }} 
        />

        {/* GESTIÓN DE USUARIOS / TABLAS ADICIONALES */}
        <Stack.Screen 
          name="EliminarVehiculo" 
          component={EliminarVehiculo} 
          options={{ title: 'eliminar vehiculo' }} 
        />
     

      </Stack.Navigator>
    </NavigationContainer>
  );
}