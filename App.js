import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, AsyncStorage, TouchableOpacity } from 'react-native'
import Search from './components/Search';
import Newsfeed from './components/Newsfeed';
import useConnectInfo from './components/useConnectInfo'

const STORAGE_KEY = '@save_name'

export default function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const isConnected = useConnectInfo()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>News of the World</Text>
      { isConnected ? <Text style={styles.connected}>Connected</Text> : 
                  <Text style={styles.notconnected}>Not Connected</Text>}
      <StatusBar style="auto" />
      <Search setSearchTerm={setSearchTerm} isConnected={isConnected} />
      <Newsfeed searchTerm={searchTerm} setSearchTerm={setSearchTerm} isConnected={isConnected} />
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
  },
  connected: {
    marginTop: 16,
    fontWeight: "bold",
    color: "green"
  },
  notconnected: {
    marginTop: 16,
    fontWeight: "bold",
    color: "red"
  }
});
