import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const MenuPrincipal = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Panel de Control 🚗</Text>
      <Text style={styles.subtitulo}>Gestión de Inventario y Usuarios</Text>

      <View style={styles.grid}>
        {/* Botón: Cargar Vehículo */}
        <TouchableOpacity 
          style={[styles.boton, { backgroundColor: '#3498db' }]} 
          onPress={() => navigation.navigate('AgregarVehiculo')}
        >
          <Text style={styles.textoIcono}>➕</Text>
          <Text style={styles.textoBoton}>Cargar Nuevo</Text>
        </TouchableOpacity>

        {/* Botón: Ver Lista (CRUD completo) */}
        <TouchableOpacity 
          style={[styles.boton, { backgroundColor: '#2ecc71' }]} 
          onPress={() => navigation.navigate('VerLista')}
        >
          <Text style={styles.textoIcono}>📋</Text>
          <Text style={styles.textoBoton}>Ver Inventario</Text>
        </TouchableOpacity>

      
      </View>

      <TouchableOpacity 
        style={styles.botonSalir} 
        onPress={() => navigation.replace('Login')}
      >
        <Text style={styles.textoSalir}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    paddingVertical: 40,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 30,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  boton: {
    width: '40%',
    height: 120,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textoIcono: {
    fontSize: 30,
    marginBottom: 10,
  },
  textoBoton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  botonSalir: {
    marginTop: 40,
    padding: 15,
  },
  textoSalir: {
    color: '#e74c3c',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default MenuPrincipal;