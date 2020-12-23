import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity } from 'react-native'
import Search from './components/Search';
import Newsfeed from './components/Newsfeed';

const STORAGE_KEY = '@save_name'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News of the World</Text>
      <StatusBar style="auto" />
      <Search setSearchTerm={setSearchTerm} />
      <Newsfeed searchTerm={searchTerm} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 56
  },
  title: {
    fontSize: 36,
    fontWeight: "bold"
  }
});
