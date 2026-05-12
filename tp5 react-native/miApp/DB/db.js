import * as SQLite from 'expo-sqlite';

// 1. Abrimos la base de datos de forma síncrona (Método moderno)
const db = SQLite.openDatabaseSync('usuarios.db');

// 2. Usamos execSync para crear las tablas de una sola vez al iniciar
// Esto asegura que las tablas existan antes de que cualquier pantalla las use.
db.execSync(`
  PRAGMA journal_mode = WAL;
  
  CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    email TEXT UNIQUE, 
    password TEXT
  );
  
  CREATE TABLE IF NOT EXISTS items (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    marca TEXT, 
    modelo TEXT, 
    año INTEGER
  );
`);

export default db;