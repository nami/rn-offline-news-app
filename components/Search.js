import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import * as Network from 'expo-network';

const Search = props => {
  const [input, setInput] = useState('')

  const searchInputHandler = (text) => {
    setInput(text)
  }

  const setTerm = () => {
    props.setSearchTerm(input)
    // setInput('')
  }

  return (
    <View style={styles.inputContainer}>
      <View style={styles.searchContainer}>
        <TextInput 
          placeholder="Search the news..." 
          style={styles.input} 
          onChangeText={searchInputHandler} 
          value={input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="SEARCH" onPress={setTerm} />
      </View>
    </View>
   )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchContainer: {
    width: 270,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 24,
    padding: 8
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: 8
  }
});

export default Search