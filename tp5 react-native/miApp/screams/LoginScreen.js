import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import db from "../DB/db";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const user = await db.getFirstAsync("SELECT * FROM usuarios WHERE email = ? AND password = ?", [email, password]);
    if (user) { navigation.navigate("MenuPrincipal"); } 
    else { Alert.alert("Error", "Datos incorrectos"); }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <Button title="Entrar" onPress={handleLogin} />
      <Button title="Ir a Registro" onPress={() => navigation.navigate("Register")} color="grey" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  titulo: { fontSize: 24, textAlign: "center", marginBottom: 20 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 8, marginBottom: 15 }
});
export default LoginScreen;