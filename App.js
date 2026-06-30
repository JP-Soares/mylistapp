import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { initDatabase } from './src/database/migrations/init';

import Home from './src/screens/Home'

import "./global.css"

export default function App() {

  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <Home></Home>
  );
}