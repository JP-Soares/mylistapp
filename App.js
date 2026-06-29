import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { initDatabase } from './src/database/migrations/init';

export default function App() {

  useEffect(() => {
    initDatabase();
  }, []);

  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});