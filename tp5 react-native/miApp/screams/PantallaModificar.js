import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import db from "../DB/db";

const EditarScreen = ({ route, navigation }) => {
  const { vehiculo } = route.params;
  const [marca, setMarca] = useState(vehiculo.marca);
  const [modelo, setModelo] = useState(vehiculo.modelo);

  const actualizar = async () => {
    await db.runAsync("UPDATE items SET marca = ?, modelo = ? WHERE id = ?", [marca, modelo, vehiculo.id]);
    navigation.goBack();
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput style={styles.input} value={marca} onChangeText={setMarca} />
      <TextInput style={styles.input} value={modelo} onChangeText={setModelo} />
      <Button title="Actualizar" onPress={actualizar} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: { borderWidth: 1, marginBottom: 10, padding: 8 }
});
export default EditarScreen;