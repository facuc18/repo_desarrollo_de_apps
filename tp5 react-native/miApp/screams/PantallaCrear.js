import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import db from "../DB/db";

const PantallaCrear = ({ navigation }) => {
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [año, setAño] = useState("");

  const guardar = async () => {
    await db.runAsync("INSERT INTO items (marca, modelo, año) VALUES (?, ?, ?)", [marca, modelo, parseInt(año)]);
    Alert.alert("Guardado", "Vehículo cargado");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Marca" onChangeText={setMarca} />
      <TextInput style={styles.input} placeholder="Modelo" onChangeText={setModelo} />
      <TextInput style={styles.input} placeholder="Año" onChangeText={setAño} keyboardType="numeric" />
      <Button title="Guardar" onPress={guardar} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 }
});
export default PantallaCrear;