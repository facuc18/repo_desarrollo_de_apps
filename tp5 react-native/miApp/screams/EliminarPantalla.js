import React from "react";
import { View, Text, Button, StyleSheet, Alert } from "react-native";
import db from "../DB/db";

const EliminarVehiculo = ({ route, navigation }) => {
  // Recibimos el vehículo que pasamos desde la lista
  const { vehiculo } = route.params;

  const handleEliminar = async () => {
    try {
      // Usamos el ID del vehículo para borrarlo de la tabla 'items'
      await db.runAsync("DELETE FROM items WHERE id = ?", [vehiculo.id]);
      
      Alert.alert("Éxito", "Vehículo eliminado correctamente");
      
      // Volvemos a la lista automáticamente
      navigation.goBack();
    } catch (error) {
      Alert.alert("Error", "No se pudo eliminar el vehículo");
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Confirmar Eliminación</Text>
      
      <View style={styles.card}>
        <Text style={styles.infoLabel}>Marca:</Text>
        <Text style={styles.infoValue}>{vehiculo.marca}</Text>
        
        <Text style={styles.infoLabel}>Modelo:</Text>
        <Text style={styles.infoValue}>{vehiculo.modelo}</Text>
        
        <Text style={styles.infoLabel}>Año:</Text>
        <Text style={styles.infoValue}>{vehiculo.año}</Text>
      </View>

      <Text style={styles.advertencia}>
        ¿Estás seguro de que deseas borrar este registro? Esta acción no se puede deshacer.
      </Text>

      <View style={styles.botonera}>
        <Button 
          title="Sí, Eliminar" 
          color="#ff4444" 
          onPress={() => {
            Alert.alert(
              "Última advertencia",
              "¿Realmente quieres borrarlo?",
              [
                { text: "No", style: "cancel" },
                { text: "Sí, Borrar", onPress: handleEliminar, style: "destructive" }
              ]
            );
          }} 
        />
        
        <View style={{ marginTop: 15 }}>
          <Button title="Cancelar" onPress={() => navigation.goBack()} color="#666" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: "#f8f9fa" },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center", color: "#333" },
  card: { 
    backgroundColor: "#fff", 
    padding: 20, 
    borderRadius: 10, 
    elevation: 3, 
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd" 
  },
  infoLabel: { fontSize: 14, color: "#888", fontWeight: "bold" },
  infoValue: { fontSize: 18, color: "#333", marginBottom: 10 },
  advertencia: { color: "#e74c3c", textAlign: "center", marginBottom: 30, fontStyle: "italic" },
  botonera: { width: "100%" }
});

export default EliminarVehiculo;