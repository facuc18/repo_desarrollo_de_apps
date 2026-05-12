import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import db from "../DB/db";

const ListaScreen = ({ navigation }) => {
  const [datos, setDatos] = useState([]);
  const isFocused = useIsFocused();

  const cargar = async () => {
    const res = await db.getAllAsync("SELECT * FROM items");
    setDatos(res);
  };

  useEffect(() => { if (isFocused) cargar(); }, [isFocused]);

  return (
    <ScrollView style={{ padding: 20 }}>
      {datos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Text>{item.marca} - {item.modelo} ({item.año})</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={() => navigation.navigate("Editar", { vehiculo: item })}>
              <Text style={{color:'#d4ff00', marginRight: 10}}>Editar</Text>
            </TouchableOpacity>
			<TouchableOpacity onPress={() => navigation.navigate("EliminarVehiculo", { vehiculo: item })}>
              <Text style={{color: '#ff0000', marginRight: 10}}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: "#eee", marginBottom: 10, borderRadius: 5 }
});
export default ListaScreen;