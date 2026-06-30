# 📱 Smart Lists App

A mobile application built with React Native + Expo, focused on creating and managing task and shopping lists, with fully local storage using SQLite.

## 🚀 Overview

The Smart Lists App is a productivity application that allows users to create and manage different types of lists:

- 📝 Task lists (To-Do)
- 🛒 Shopping lists
- 📌 Nested sub-items inside tasks
- 🎨 Color-based organization and categorization

All data is stored locally on the device, making the app fully offline-first.

## 🧱 Architecture

The project follows a simple and scalable layered architecture:

src/
├── database/
│   ├── connection.ts
│   ├── migrations/
│   │   └── init.ts
│   ├── models/
│   │   └── List.ts
│   └── repositories/
│       └── ListRepository.ts
│
├── screens/
│   ├── Home/
│   │   └── index.tsx
│   ├── ListDetails/
│   └── CreateList/
│
├── components/
│
└── styles/

## ⚙️ Tech Stack

- React Native (Expo)
- TypeScript
- SQLite (expo-sqlite)
- Repository Pattern (data layer abstraction)

## 🗄️ Local Database (SQLite)

The database is automatically created when the app starts.

Table: list

CREATE TABLE IF NOT EXISTS list (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  description TEXT,
  color INTEGER,
  type INTEGER
);

Table: ItemToDo

CREATE TABLE IF NOT EXISTS ItemToDo (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_list INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  done INTEGER DEFAULT 0,
  color INTEGER,
  created_at TEXT,
  FOREIGN KEY(id_list) REFERENCES list(id)
  ON DELETE CASCADE
);

Table: SubItemToDo

CREATE TABLE IF NOT EXISTS SubItemToDo (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  id_item INTEGER NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  done INTEGER DEFAULT 0,
  created_at TEXT,
  FOREIGN KEY(id_item) REFERENCES ItemToDo(id)
  ON DELETE CASCADE
);

## 🔌 Database Initialization

The database is initialized automatically when the app starts:

useEffect(() => {
  initDatabase();
}, []);

## 🧠 Repository Pattern

All database operations are encapsulated inside repositories to avoid SQL inside UI components.

Example:

ListRepository.create({
  name: "Groceries",
  description: "Weekly shopping list",
  color: 0,
  type: 1
});

## 🎨 UI Styling Approach

At this stage, styling is done using React Native StyleSheet to ensure stability.

import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

## 📱 Features

✔ Implemented:
- SQLite database initialization
- Local persistent storage
- List structure (tasks + shopping support)
- Sub-item support design
- Repository pattern architecture

🚧 In Development:
- Create list screen (UI)
- List detail screen
- Task management system
- Mark tasks as done
- Filtering by list type
- Improved UI/UX
- Dark mode support

## 🧭 App Flow

App starts
↓
initDatabase()
↓
SQLite creates tables (if not exist)
↓
Repositories handle data operations
↓
Screens consume repository data

## 💡 Project Goal

This project was built to practice:

- React Native architecture
- SQLite local database usage
- Repository pattern design
- Offline-first mobile apps
- Scalable project structure

## 🛠️ How to Run

1. Install dependencies:
npm install

2. Start project:
npx expo start

3. Run on device:
- Expo Go (Android/iOS)
- Emulator or simulator

## 📌 Technical Notes

- Database is fully local (no backend required)
- Data persists after restart
- Architecture prepared for scaling
- NativeWind was removed for stability during early development

## 📈 Roadmap

- Full CRUD for lists
- Task system
- Sub-task hierarchy
- Filtering by type
- Drag & drop tasks
- Notifications
- UI improvements
- Dark mode

## 👨‍💻 Author

Built as a learning project focused on React Native, SQLite, and mobile architecture.
