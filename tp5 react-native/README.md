# 🚗 Gestión de Inventario Vehicular - TP5

Este proyecto es una aplicación móvil desarrollada con **React Native** y **Expo** para la gestión de inventario y control de acceso de usuarios. Utiliza **SQLite** como motor de base de datos local para garantizar la persistencia de la información sin necesidad de una API externa.

## 🚀 Características

*   **Autenticación**: Registro e inicio de sesión de usuarios con persistencia en tabla local.
*   **Gestión de Inventario (CRUD)**:
    *   **Alta**: Carga de marca, modelo y año del vehículo.
    *   **Consulta**: Visualización de la lista completa de vehículos registrados.
    *   **Edición**: Modificación de datos existentes mediante formularios.
    *   **Baja**: Eliminación de registros con confirmación previa.
*   **Navegación**: Estructura de navegación por Stacks para separar el flujo de login del menú principal.

## 🛠️ Tecnologías Utilizadas

*   **React Native** (Expo SDK 50+)
*   **SQLite** (vía `expo-sqlite`)
*   **React Navigation** (Stack Navigator)

## 📂 Estructura de Carpetas

```text
miApp/
├── App.js                 # Configuración principal y navegación de la App
├── DB/
│   └── db.js              # Inicialización de la DB y creación de tablas
├── screams/               # Todas las pantallas del sistema
│   ├── LoginScreen.js     # Pantalla de acceso
│   ├── RegistroPantalla.js# Pantalla de creación de cuenta
│   ├── HomeScreen.js      # Panel de control (Menú Principal)
│   ├── PantallaCrear.js   # Formulario de alta de vehículos
│   ├── MostrarTabla.js    # Lista con opciones de editar/eliminar
│   ├── PantallaModificar.js# Formulario de edición de datos
│   └── EliminarPantalla.js# Pantalla de confirmación de borrado
└── package.json           # Dependencias y scripts del proyecto