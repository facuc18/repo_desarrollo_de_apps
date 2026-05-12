import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import db from "../DB/db";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    if (!email || !password) return Alert.alert("Error", "Completa todo");
    try {
      await db.runAsync("INSERT INTO usuarios (email, password) VALUES (?, ?)", [email, password]);
      Alert.alert("Éxito", "Usuario creado");
      navigation.navigate("Login");
    } catch (e) { Alert.alert("Error", "El usuario ya existe"); }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registro</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Registrarse" onPress={handleRegister} color="#2ecc71" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  titulo: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 15 }
});
export default RegisterScreen;